import { useMemo, useRef, useState } from "react";
import {
  DndContext, PointerSensor, useSensor, useSensors,
  useDroppable, useDraggable, type DragEndEvent,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { digitalDownloadIdeas, type DigitalDownloadIdea } from "../data/digitalDownloadIdeas";
import { CATEGORY_DOT } from "../data/ideaUtils";
import { STAGES, useTracker, type Stage } from "../data/tracker";
import { useCustomIdeas, type CustomIdeaRecord } from "../data/customIdeas";
import { IdeaDetail } from "./DigitalDownloadIdeas";
import { exportBackup, importBackup, daysSinceBackup } from "../data/backup";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function StatCard({
  label, value, accent, sub, accentBorder = "border-t-transparent",
}: {
  label: string; value: string | number; accent: string; sub?: string; accentBorder?: string;
}) {
  return (
    <div className={`bg-[#160028] border border-t-4 ${accentBorder} border-purple-900 rounded-xl p-5 flex flex-col gap-1`}>
      <span className={`text-3xl font-bold ${accent}`}>{value}</span>
      <span className="text-purple-300 text-sm font-medium">{label}</span>
      {sub && <span className="text-purple-600 text-xs">{sub}</span>}
    </div>
  );
}

const stageRingColor: Record<Stage, string> = {
  saved:    "border-purple-700",
  creating: "border-amber-500/60",
  listed:   "border-blue-500/60",
  earning:  "border-green-500/60",
};

const stageBg: Record<Stage, string> = {
  saved:    "bg-[#160028]",
  creating: "bg-[#1a0f00]",
  listed:   "bg-[#00101a]",
  earning:  "bg-[#001a0a]",
};

const scrollMap: Partial<Record<Stage, string>> = {
  creating: "section-checklist",
  listed:   "section-market",
  earning:  "section-progress",
};

const COLLAPSE_AT = 3;

// ---------------------------------------------------------------------------
// Drag-and-drop helpers
// ---------------------------------------------------------------------------

function DroppableColumn({ stageKey, isOver, children }: { stageKey: Stage; isOver: boolean; children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({ id: stageKey });
  return (
    <div
      ref={setNodeRef}
      className={`${stageBg[stageKey]} border ${stageRingColor[stageKey]} rounded-xl flex flex-col min-h-[160px] transition-all ${isOver ? "ring-2 ring-purple-400/60 scale-[1.01]" : ""}`}
    >
      {children}
    </div>
  );
}

function DraggableCard({ id, children }: { id: string; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });
  const style = transform ? { transform: CSS.Translate.toString(transform) } : undefined;
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`touch-none ${isDragging ? "opacity-50 z-50 relative" : ""}`}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Claude generation
// ---------------------------------------------------------------------------

const VALID_CATEGORIES = [
  "Planners & Organizers", "Wall Art & Prints", "Social Media Templates",
  "Business & Branding", "Education & Kids", "Journals & Workbooks",
  "Notion & Digital Templates", "Photo & Design Assets",
  "Events & Celebrations", "Spreadsheets & Trackers",
];

function buildPrompt(userPrompt: string): string {
  const ts = Date.now();
  return `You are helping someone build a digital download business on Etsy.
Generate a complete digital download product idea based on: "${userPrompt}"

Return ONLY valid JSON — no markdown fences, no explanation — with this exact structure:
{
  "idea": {
    "id": "custom-${ts}",
    "name": "...",
    "category": one of ${JSON.stringify(VALID_CATEGORIES)},
    "description": "2-3 sentences describing the product",
    "niches": ["niche1", "niche2", "niche3"],
    "toolsNeeded": ["tool1", "tool2"],
    "estimatedCreationTime": "X-Y hours",
    "pricingRange": { "min": 3, "max": 15 },
    "difficulty": "beginner",
    "demandRating": 4,
    "trending": false,
    "launchChecklist": ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"],
    "creationTool": "claude",
    "creationPrompt": "Detailed AI prompt a user could paste into Claude to create this product..."
  },
  "workflowGuide": {
    "steps": [
      "Step 1: ...",
      "Step 2: ...",
      "Step 3: ...",
      "Step 4: ...",
      "Step 5: ..."
    ]
  },
  "marketingPrompts": {
    "etsy": {
      "title": "SEO listing title under 60 chars",
      "description": "Full Etsy listing description",
      "tags": "tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag9, tag10, tag11, tag12, tag13"
    },
    "tiktok": {
      "caption": "Engaging TikTok caption",
      "hashtags": "#tag1 #tag2 #tag3 #tag4 #tag5"
    },
    "instagram": {
      "caption": "Instagram caption",
      "hashtags": "#tag1 #tag2 #tag3 #tag4 #tag5"
    },
    "pinterest": {
      "title": "Pin title",
      "description": "Pin description",
      "keywords": "keyword1, keyword2, keyword3"
    },
    "gptImagePrompt": "Prompt for generating a product mockup image",
    "videoPrompt": "Script or prompt for a short promotional video"
  }
}`;
}

async function callClaude(userPrompt: string, apiKey: string): Promise<CustomIdeaRecord> {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2048,
      messages: [{ role: "user", content: buildPrompt(userPrompt) }],
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: { message?: string } }).error?.message ?? `API error ${res.status}`);
  }
  const data = await res.json() as { content: { text: string }[] };
  const text = data.content[0].text;
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("Could not parse response from Claude.");
  return JSON.parse(jsonMatch[0]) as CustomIdeaRecord;
}

// ---------------------------------------------------------------------------
// Dashboard
// ---------------------------------------------------------------------------

export default function Dashboard() {
  const { tracker, setStage, setSales } = useTracker();
  const { records, addCustomIdea, removeCustomIdea } = useCustomIdeas();

  // Detail modal
  const [detailContext, setDetailContext] = useState<{
    idea: DigitalDownloadIdea; stage?: Stage;
  } | null>(null);

  // Quick-Add overlay
  const [showAdd, setShowAdd]     = useState(false);
  const [addTab, setAddTab]       = useState<"browse" | "generate">("browse");
  const [addStage, setAddStage]   = useState<Stage>("saved");
  const [addQuery, setAddQuery]   = useState("");

  // Generate tab state
  const [apiKey, setApiKey]         = useState<string>(() => localStorage.getItem("anthropic-api-key") ?? "");
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [genPrompt, setGenPrompt]   = useState("");
  const [genLoading, setGenLoading] = useState(false);
  const [genError, setGenError]     = useState<string | null>(null);
  const [genResult, setGenResult]   = useState<CustomIdeaRecord | null>(null);

  // Pipeline expand
  const [expandedStages, setExpandedStages] = useState<Set<Stage>>(new Set());

  // Backup reminder
  const backupDays = daysSinceBackup();
  const showBackupBanner = backupDays === null || backupDays >= 7;
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const restoreInputRef = useRef<HTMLInputElement>(null);

  async function handleRestore(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!window.confirm("This will replace all your current data. Continue?")) {
      e.target.value = "";
      return;
    }
    try {
      await importBackup(file);
    } catch {
      alert("Could not read backup file. Make sure it's a valid Creator Dash backup.");
      e.target.value = "";
    }
  }

  // Drag-and-drop
  const [overId, setOverId] = useState<Stage | null>(null);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));

  function handleDragEnd(event: DragEndEvent) {
    setOverId(null);
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const newStage = over.id as Stage;
    if (STAGES.some((s) => s.key === newStage)) {
      setStage(active.id as string, newStage);
    }
  }

  // Merge static + custom ideas
  const allIdeas = useMemo(
    () => [...digitalDownloadIdeas, ...records.map((r) => r.idea)],
    [records]
  );

  const trackerEntries = useMemo(() => Object.entries(tracker), [tracker]);
  const totalTracked   = trackerEntries.length;

  const ideaById = useMemo(() => {
    const map: Record<string, DigitalDownloadIdea> = {};
    for (const idea of allIdeas) map[idea.id] = idea;
    return map;
  }, [allIdeas]);

  const customById = useMemo(() => {
    const map: Record<string, CustomIdeaRecord> = {};
    for (const r of records) map[r.idea.id] = r;
    return map;
  }, [records]);

  const salesMap = useMemo(() => {
    const m: Record<string, number> = {};
    for (const [id, entry] of Object.entries(tracker)) {
      if (entry.sales != null) m[id] = entry.sales;
    }
    return m;
  }, [tracker]);

  const stageCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const [, entry] of trackerEntries) {
      counts[entry.stage] = (counts[entry.stage] ?? 0) + 1;
    }
    return counts;
  }, [trackerEntries]);

  const ideasByStage = useMemo(() => {
    const groups: Record<Stage, DigitalDownloadIdea[]> = {
      saved: [], creating: [], listed: [], earning: [],
    };
    for (const [id, entry] of trackerEntries) {
      const idea = ideaById[id];
      if (idea) groups[entry.stage].push(idea);
    }
    return groups;
  }, [trackerEntries, ideaById]);

  const totalSales = useMemo(
    () => trackerEntries.reduce((sum, [, e]) => sum + (e.sales ?? 0), 0),
    [trackerEntries]
  );

  const estRevenue = useMemo(
    () => trackerEntries.reduce((sum, [id, e]) => {
      const idea = ideaById[id];
      if (!idea || !e.sales) return sum;
      return sum + e.sales * (idea.pricingRange.min + idea.pricingRange.max) / 2;
    }, 0),
    [trackerEntries, ideaById]
  );

  const inProgress      = (stageCounts["creating"] ?? 0) + (stageCounts["listed"] ?? 0);
  const earning         = stageCounts["earning"] ?? 0;
  const saved           = stageCounts["saved"]   ?? 0;
  const creating        = stageCounts["creating"] ?? 0;
  const listed          = stageCounts["listed"]   ?? 0;
  const totalEstRevenue = Math.round(estRevenue);

  const nudge = useMemo((): { emoji: string; message: string } => {
    if (totalTracked === 0)
      return { emoji: "👆", message: "Use the + Add idea button to start filling your pipeline." };
    if (saved > 0 && creating === 0)
      return { emoji: "✏️", message: `${saved} idea${saved > 1 ? "s" : ""} saved — open one and start creating!` };
    if (creating > 0 && listed === 0)
      return { emoji: "🛒", message: `${creating} idea${creating > 1 ? "s" : ""} in progress — finish one and list it on Etsy.` };
    if (listed > 0 && earning === 0)
      return { emoji: "📣", message: `${listed} listing${listed > 1 ? "s" : ""} live — start marketing to get your first sale.` };
    if (earning > 0 && totalSales === 0)
      return { emoji: "🚀", message: "You're listed! Share your Etsy link on TikTok or Instagram to drive your first sale." };
    return { emoji: "🎉", message: `${totalSales} unit${totalSales > 1 ? "s" : ""} sold — keep adding and marketing new ideas!` };
  }, [totalTracked, saved, creating, listed, earning, totalSales]);

  // Browse tab: untracked ideas matching query
  const untrackedIdeas = useMemo(() => {
    const trackedIds = new Set(trackerEntries.map(([id]) => id));
    const q = addQuery.toLowerCase();
    return allIdeas
      .filter((i) =>
        !trackedIds.has(i.id) &&
        (q === "" || i.name.toLowerCase().includes(q) || i.category.toLowerCase().includes(q))
      )
      .slice(0, 20);
  }, [trackerEntries, allIdeas, addQuery]);

  function openAdd(defaultStage?: Stage) {
    setAddStage(defaultStage ?? "saved");
    setAddQuery("");
    setGenPrompt("");
    setGenResult(null);
    setGenError(null);
    setShowAdd(true);
  }

  function closeAdd() {
    setShowAdd(false);
    setGenResult(null);
    setGenError(null);
    setGenLoading(false);
  }

  function saveApiKey() {
    localStorage.setItem("anthropic-api-key", apiKeyInput);
    setApiKey(apiKeyInput);
    setApiKeyInput("");
  }

  async function handleGenerate() {
    if (!genPrompt.trim()) return;
    setGenLoading(true);
    setGenError(null);
    setGenResult(null);
    try {
      const result = await callClaude(genPrompt.trim(), apiKey);
      // Ensure the id is unique
      result.idea.id = `custom-${Date.now()}`;
      setGenResult(result);
    } catch (e) {
      setGenError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setGenLoading(false);
    }
  }

  function handleAddGenerated() {
    if (!genResult) return;
    addCustomIdea(genResult);
    setStage(genResult.idea.id, addStage);
    closeAdd();
  }

  function toggleExpand(stage: Stage) {
    setExpandedStages((prev) => {
      const next = new Set(prev);
      if (next.has(stage)) { next.delete(stage); } else { next.add(stage); }
      return next;
    });
  }

  const NEXT_STAGE: Partial<Record<Stage, Stage>> = {
    saved: "creating",
    creating: "listed",
    listed: "earning",
  };

  function daysInStage(movedAt?: number): number | null {
    if (!movedAt) return null;
    return Math.floor((Date.now() - movedAt) / 86_400_000);
  }

  function exportCSV() {
    const rows = [["Idea", "Category", "Stage", "Units Sold", "Est. Revenue (£)"]];
    for (const [id, entry] of trackerEntries) {
      const idea = ideaById[id];
      if (!idea) continue;
      const sales = entry.sales ?? 0;
      const revenue = Math.round(sales * (idea.pricingRange.min + idea.pricingRange.max) / 2);
      rows.push([idea.name, idea.category, entry.stage, String(sales), String(revenue)]);
    }
    const csv = rows.map((r) => r.map((c) => `"${c.replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "creator-dash-pipeline.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleDeleteIdea(id: string) {
    removeCustomIdea(id);
    setStage(id, null);
    setDetailContext(null);
  }

  const earningIdeas = ideasByStage["earning"];
  const detailIdea   = detailContext?.idea ?? null;
  const scrollTo     = detailContext?.stage ? scrollMap[detailContext.stage] : undefined;
  const customRecord = detailIdea ? customById[detailIdea.id] : undefined;

  return (
    <div className="min-h-screen bg-[#0d0118] text-white">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-10">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard</h1>
          <p className="text-purple-400 text-sm mt-1.5">Track your pipeline and earnings</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard label="Tracked"      value={totalTracked}          accent="text-white"     sub="ideas in pipeline"  accentBorder="border-t-purple-500" />
          <StatCard label="In Progress"  value={inProgress}            accent="text-amber-400" sub="creating or listed" accentBorder="border-t-amber-500" />
          <StatCard label="Earning"      value={earning}               accent="text-green-400" sub="active listings"    accentBorder="border-t-green-500" />
          <StatCard label="Est. Revenue" value={`£${totalEstRevenue}`} accent="text-green-300" sub={`${totalSales} units sold`} accentBorder="border-t-green-300" />
        </div>

        {/* Backup reminder banner */}
        {showBackupBanner && !bannerDismissed && (
          <div className="bg-[#160028] border border-amber-800/50 rounded-xl px-5 py-3 flex items-center gap-3">
            <span className="text-lg shrink-0">📦</span>
            <p className="text-amber-300/80 text-sm flex-1">
              {backupDays === null
                ? "No backup yet — download one to keep your data safe."
                : `Last backup ${backupDays} day${backupDays !== 1 ? "s" : ""} ago — consider downloading a fresh one.`}
            </p>
            <button
              onClick={() => exportBackup()}
              className="shrink-0 text-xs font-semibold text-amber-300 border border-amber-700 hover:border-amber-500 hover:text-amber-200 px-3 py-1.5 rounded-lg transition-colors"
            >
              Download backup
            </button>
            <button onClick={() => setBannerDismissed(true)} className="shrink-0 text-purple-600 hover:text-purple-400 text-lg leading-none transition-colors">×</button>
          </div>
        )}

        {/* Nudge */}
        <div className="bg-[#160028] border border-purple-800 rounded-xl px-5 py-3 flex items-center gap-3">
          <span className="text-xl shrink-0">{nudge.emoji}</span>
          <p className="text-purple-200 text-sm">{nudge.message}</p>
        </div>

        {/* Sales Tracker — above pipeline */}
        {earningIdeas.length > 0 && (
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-base font-bold text-purple-100">Sales Tracker</h2>
              <p className="text-purple-500 text-xs mt-0.5">Log units sold per listing to track your estimated revenue</p>
            </div>
            <div className="bg-[#160028] border border-purple-900 rounded-xl overflow-hidden">
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-2.5 border-b border-purple-900 text-xs text-purple-500 font-semibold uppercase tracking-wide">
                <span>Listing</span>
                <span className="text-right">Units sold</span>
                <span className="text-right w-20">Est. revenue</span>
              </div>
              {earningIdeas.map((idea) => {
                const sales   = salesMap[idea.id] ?? 0;
                const revenue = Math.round(sales * (idea.pricingRange.min + idea.pricingRange.max) / 2);
                const dot     = CATEGORY_DOT[idea.category] ?? "bg-gray-500";
                return (
                  <div key={idea.id} className="grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-3 border-b border-purple-900/50 items-center last:border-0">
                    <button onClick={() => setDetailContext({ idea, stage: "earning" })} className="flex items-center gap-2 text-white text-sm font-medium text-left hover:text-purple-300 transition-colors min-w-0">
                      <span className={`shrink-0 w-2 h-2 rounded-full ${dot}`} />
                      <span className="truncate">{idea.name}</span>
                    </button>
                    {/* Stepper */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setSales(idea.id, Math.max(0, sales - 1))}
                        className="w-7 h-7 flex items-center justify-center rounded-md border border-purple-800 text-purple-400 hover:text-white hover:border-purple-600 text-sm font-bold transition-colors"
                      >−</button>
                      <span className="w-8 text-center text-white text-sm font-semibold tabular-nums">{sales}</span>
                      <button
                        onClick={() => setSales(idea.id, sales + 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-md border border-purple-800 text-purple-400 hover:text-white hover:border-purple-600 text-sm font-bold transition-colors"
                      >+</button>
                    </div>
                    <span className={`text-sm font-bold text-right w-20 ${sales > 0 ? "text-green-400" : "text-purple-700"}`}>
                      {sales > 0 ? `£${revenue}` : "—"}
                    </span>
                  </div>
                );
              })}
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-3 bg-[#0d0118] items-center">
                <span className="text-purple-400 text-sm font-semibold">Total</span>
                <span className="text-white text-sm font-bold text-right pr-1">{totalSales} units</span>
                <span className="text-green-300 text-sm font-bold text-right w-20">£{totalEstRevenue}</span>
              </div>
            </div>
          </div>
        )}

        {/* Pipeline */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-purple-100">Pipeline</h2>
              <div className="hidden sm:flex items-center gap-1 mt-1 text-xs text-purple-600 font-medium">
                {STAGES.map((s, i) => (
                  <span key={s.key} className="flex items-center gap-1">
                    <span className={s.color}>{s.label}</span>
                    {i < STAGES.length - 1 && <span className="text-purple-800">→</span>}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Hidden file input for restore */}
              <input
                ref={restoreInputRef}
                type="file"
                accept=".json"
                className="hidden"
                onChange={handleRestore}
              />
              <button
                onClick={() => exportBackup()}
                className="flex items-center gap-1.5 text-sm font-semibold text-purple-500 hover:text-purple-300 border border-purple-800 hover:border-purple-600 px-3 py-1.5 rounded-lg transition-colors"
                title="Download a full backup of your data"
              >
                ↓ Backup
              </button>
              <button
                onClick={() => restoreInputRef.current?.click()}
                className="flex items-center gap-1.5 text-sm font-semibold text-purple-500 hover:text-purple-300 border border-purple-800 hover:border-purple-600 px-3 py-1.5 rounded-lg transition-colors"
                title="Restore from a backup file"
              >
                ↑ Restore
              </button>
              {totalTracked > 0 && (
                <button
                  onClick={exportCSV}
                  className="flex items-center gap-1.5 text-sm font-semibold text-purple-500 hover:text-purple-300 border border-purple-800 hover:border-purple-600 px-3 py-1.5 rounded-lg transition-colors"
                  title="Export pipeline as CSV"
                >
                  ↓ CSV
                </button>
              )}
              <button
                onClick={() => openAdd()}
                className="flex items-center gap-1.5 text-sm font-semibold text-purple-300 hover:text-white border border-purple-700 hover:border-purple-500 px-3 py-1.5 rounded-lg transition-colors"
              >
                <span className="text-base leading-none">+</span> Add idea
              </button>
            </div>
          </div>

          <DndContext
            sensors={sensors}
            onDragOver={(e) => setOverId(e.over ? (e.over.id as Stage) : null)}
            onDragEnd={handleDragEnd}
            onDragCancel={() => setOverId(null)}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STAGES.map((s) => {
                const ideas      = ideasByStage[s.key];
                const isExpanded = expandedStages.has(s.key);
                const visible    = isExpanded || ideas.length <= COLLAPSE_AT ? ideas : ideas.slice(0, COLLAPSE_AT);
                const hidden     = ideas.length - COLLAPSE_AT;
                const nextStage  = NEXT_STAGE[s.key];
                return (
                  <DroppableColumn key={s.key} stageKey={s.key} isOver={overId === s.key}>
                    <div className={`px-3 py-2.5 border-b ${stageRingColor[s.key]} flex items-center gap-2`}>
                      <span className={`text-sm font-bold ${s.color}`}>{s.label}</span>
                      <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-full border ${s.color} ${s.bg} ${s.border}`}>{ideas.length}</span>
                    </div>
                    <div className="flex flex-col flex-1 divide-y divide-white/5">
                      {ideas.length === 0 ? (
                        <button onClick={() => openAdd(s.key)} className="text-purple-700 hover:text-purple-400 text-xs px-3 py-4 text-center transition-colors w-full">
                          + Add idea
                        </button>
                      ) : (
                        visible.map((idea) => {
                          const sales       = salesMap[idea.id] ?? 0;
                          const ideaRevenue = Math.round(sales * (idea.pricingRange.min + idea.pricingRange.max) / 2);
                          const dot         = CATEGORY_DOT[idea.category] ?? "bg-gray-500";
                          const entry       = tracker[idea.id];
                          const days        = daysInStage(entry?.movedAt);
                          return (
                            <DraggableCard key={idea.id} id={idea.id}>
                              <div className="flex items-stretch">
                                <button
                                  onClick={() => setDetailContext({ idea, stage: s.key })}
                                  className="flex-1 text-left px-3 py-2.5 hover:bg-white/5 transition-colors min-w-0"
                                >
                                  <div className="flex items-start gap-2">
                                    <span className={`mt-[5px] shrink-0 w-2 h-2 rounded-full ${dot}`} />
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="text-white text-xs font-medium leading-snug line-clamp-2">{idea.name}</span>
                                      {s.key === "saved" && (
                                        <span className="text-purple-700 text-xs">Open checklist →</span>
                                      )}
                                      {s.key === "creating" && (
                                        <>
                                          <span className="text-amber-500/80 text-xs">{idea.estimatedCreationTime}</span>
                                          <span className="text-purple-700 text-xs">{idea.launchChecklist.length} steps</span>
                                        </>
                                      )}
                                      {s.key === "listed" && (
                                        <span className="text-blue-400/70 text-xs">Start marketing →</span>
                                      )}
                                      {s.key === "earning" && (
                                        <span className="text-green-400 text-xs font-semibold">
                                          {sales > 0 ? `${sales} sold · £${ideaRevenue} est.` : "log sales →"}
                                        </span>
                                      )}
                                      {days !== null && days >= 3 && (
                                        <span className="text-purple-800 text-xs">{days}d in stage</span>
                                      )}
                                    </div>
                                  </div>
                                </button>
                                {/* Quick action button */}
                                {nextStage ? (
                                  <button
                                    onClick={(e) => { e.stopPropagation(); setStage(idea.id, nextStage); }}
                                    title={`Move to ${nextStage}`}
                                    className={`shrink-0 flex items-center justify-center w-8 text-purple-700 hover:text-purple-300 hover:bg-white/5 transition-colors border-l border-white/5 text-sm`}
                                  >
                                    →
                                  </button>
                                ) : (
                                  <button
                                    onClick={(e) => { e.stopPropagation(); setSales(idea.id, sales + 1); }}
                                    title="Log 1 sale"
                                    className="shrink-0 flex items-center justify-center w-8 text-green-700 hover:text-green-400 hover:bg-white/5 transition-colors border-l border-white/5 text-sm font-bold"
                                  >
                                    +
                                  </button>
                                )}
                              </div>
                            </DraggableCard>
                          );
                        })
                      )}
                    </div>
                    {hidden > 0 && (
                      <button onClick={() => toggleExpand(s.key)} className={`w-full text-center text-xs text-purple-500 hover:text-purple-300 py-2 border-t ${stageRingColor[s.key]} transition-colors`}>
                        {isExpanded ? "Show less ↑" : `+ ${hidden} more`}
                      </button>
                    )}
                  </DroppableColumn>
                );
              })}
            </div>
          </DndContext>
        </div>

      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Quick-Add overlay                                                    */}
      {/* ------------------------------------------------------------------ */}
      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4" onClick={closeAdd}>
          <div className="bg-[#0d0118] border border-purple-800 rounded-2xl w-full max-w-md flex flex-col max-h-[85vh]" onClick={(e) => e.stopPropagation()}>

            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-3 shrink-0">
              <h3 className="text-white font-bold text-base">Add an idea to your pipeline</h3>
              <button onClick={closeAdd} className="text-purple-500 hover:text-white transition-colors text-lg leading-none">×</button>
            </div>

            {/* Tab switcher */}
            <div className="flex gap-1 px-5 pb-3 shrink-0">
              {(["browse", "generate"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setAddTab(tab)}
                  className={`flex-1 text-xs font-semibold py-1.5 rounded-lg border transition-colors ${
                    addTab === tab
                      ? "bg-purple-600/20 border-purple-500 text-purple-300"
                      : "border-purple-900 text-purple-600 hover:border-purple-700"
                  }`}
                >
                  {tab === "browse" ? "Browse existing" : "✨ Generate with AI"}
                </button>
              ))}
            </div>

            {/* Stage selector — shared */}
            <div className="flex gap-2 px-5 pb-3 shrink-0 flex-wrap">
              {STAGES.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setAddStage(s.key)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                    addStage === s.key ? `${s.color} ${s.bg} ${s.border}` : "text-purple-500 border-purple-800 hover:border-purple-600"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* ---- BROWSE TAB ---- */}
            {addTab === "browse" && (
              <>
                <div className="px-5 pb-3 shrink-0">
                  <input
                    autoFocus type="text" value={addQuery}
                    onChange={(e) => setAddQuery(e.target.value)}
                    placeholder="Search by name or category…"
                    className="w-full bg-[#160028] border border-purple-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-purple-600 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div className="overflow-y-auto flex-1 border-t border-purple-900 divide-y divide-purple-900/50">
                  {untrackedIdeas.length === 0 ? (
                    <p className="text-purple-600 text-sm text-center py-8">
                      {addQuery ? "No ideas match that search." : "All ideas are already in your pipeline!"}
                    </p>
                  ) : (
                    untrackedIdeas.map((idea) => {
                      const dot = CATEGORY_DOT[idea.category] ?? "bg-gray-500";
                      return (
                        <div key={idea.id} className="flex items-center gap-3 px-5 py-3 hover:bg-white/5 transition-colors">
                          <span className={`shrink-0 w-2 h-2 rounded-full ${dot}`} />
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-medium leading-snug truncate">{idea.name}</p>
                            <p className="text-purple-500 text-xs">{idea.category}</p>
                          </div>
                          <button
                            onClick={() => setStage(idea.id, addStage)}
                            className="shrink-0 text-xs font-semibold text-green-400 border border-green-500/40 hover:border-green-400 hover:bg-green-500/10 px-3 py-1 rounded-full transition-colors"
                          >
                            Add
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>
              </>
            )}

            {/* ---- GENERATE TAB ---- */}
            {addTab === "generate" && (
              <div className="flex flex-col gap-4 px-5 pb-5 overflow-y-auto flex-1">

                {/* API key setup */}
                {!apiKey ? (
                  <div className="flex flex-col gap-2">
                    <p className="text-purple-400 text-xs">Enter your Anthropic API key to generate ideas with Claude. It's saved locally in your browser only.</p>
                    <div className="flex gap-2">
                      <input
                        type="password"
                        value={apiKeyInput}
                        onChange={(e) => setApiKeyInput(e.target.value)}
                        placeholder="sk-ant-…"
                        className="flex-1 bg-[#160028] border border-purple-800 rounded-lg px-3 py-2 text-sm text-white placeholder-purple-700 focus:outline-none focus:border-purple-500"
                      />
                      <button
                        onClick={saveApiKey}
                        disabled={!apiKeyInput.trim()}
                        className="text-xs font-semibold px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 disabled:opacity-40 transition-colors text-white"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Prompt input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-purple-400 text-xs font-medium">Describe your idea</label>
                      <textarea
                        autoFocus
                        rows={3}
                        value={genPrompt}
                        onChange={(e) => setGenPrompt(e.target.value)}
                        placeholder="e.g. a budget tracker for freelancers, a wedding seating chart template, a kids' daily routine chart…"
                        className="w-full bg-[#160028] border border-purple-800 rounded-lg px-4 py-3 text-sm text-white placeholder-purple-600 focus:outline-none focus:border-purple-500 resize-none"
                      />
                    </div>

                    {/* Generate button */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleGenerate}
                        disabled={genLoading || !genPrompt.trim()}
                        className="flex-1 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-40 text-white text-sm font-semibold transition-colors"
                      >
                        {genLoading ? "Generating…" : "Generate with Claude"}
                      </button>
                      <button
                        onClick={() => { setApiKey(""); localStorage.removeItem("anthropic-api-key"); }}
                        className="text-xs text-purple-700 hover:text-purple-400 transition-colors"
                      >
                        Change key
                      </button>
                    </div>

                    {/* Loading */}
                    {genLoading && (
                      <p className="text-purple-500 text-xs text-center animate-pulse">Claude is thinking…</p>
                    )}

                    {/* Error */}
                    {genError && (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
                        <p className="text-red-400 text-sm">{genError}</p>
                      </div>
                    )}

                    {/* Result preview */}
                    {genResult && (
                      <div className="flex flex-col gap-3">
                        <div className="bg-[#160028] border border-purple-700 rounded-xl p-4 flex flex-col gap-2">
                          <div className="flex items-start gap-2">
                            <span className={`mt-1 shrink-0 w-2 h-2 rounded-full ${CATEGORY_DOT[genResult.idea.category] ?? "bg-gray-500"}`} />
                            <div>
                              <p className="text-white font-bold text-sm">{genResult.idea.name}</p>
                              <p className="text-purple-500 text-xs">{genResult.idea.category}</p>
                            </div>
                          </div>
                          <p className="text-purple-300 text-xs leading-relaxed">{genResult.idea.description}</p>
                          <div className="flex gap-3 text-xs text-purple-500">
                            <span>£{genResult.idea.pricingRange.min}–£{genResult.idea.pricingRange.max}</span>
                            <span>·</span>
                            <span>{genResult.idea.estimatedCreationTime}</span>
                            <span>·</span>
                            <span className="capitalize">{genResult.idea.difficulty}</span>
                          </div>
                        </div>
                        <button
                          onClick={handleAddGenerated}
                          className="w-full py-2.5 rounded-lg bg-green-600 hover:bg-green-500 text-white text-sm font-semibold transition-colors"
                        >
                          Add to pipeline as {addStage.charAt(0).toUpperCase() + addStage.slice(1)}
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Idea detail modal                                                    */}
      {/* ------------------------------------------------------------------ */}
      {detailIdea && (
        <IdeaDetail
          idea={detailIdea}
          entry={tracker[detailIdea.id]}
          scrollTo={scrollTo}
          workflowOverride={customRecord?.workflowGuide}
          marketingOverride={customRecord?.marketingPrompts}
          onStageChange={(stage) => {
            setStage(detailIdea.id, stage);
            if (stage === null) setDetailContext(null);
          }}
          onSalesChange={(sales) => setSales(detailIdea.id, sales)}
          onClose={() => setDetailContext(null)}
          onDelete={customRecord ? () => handleDeleteIdea(detailIdea.id) : undefined}
        />
      )}
    </div>
  );
}
