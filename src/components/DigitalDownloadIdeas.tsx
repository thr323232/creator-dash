import { useState, useMemo, useEffect } from "react";
import { digitalDownloadIdeas, type DigitalDownloadIdea, type Category } from "../data/digitalDownloadIdeas";
import { workflowGuides } from "../data/workflowGuides";
import { marketingPrompts } from "../data/marketingPrompts";
import { getDifficulty, getDemandRating, CATEGORY_ACCENT, CATEGORY_DOT } from "../data/ideaUtils";

export const CATEGORIES: Category[] = [
  "Planners & Organizers",
  "Wall Art & Prints",
  "Social Media Templates",
  "Business & Branding",
  "Education & Kids",
  "Journals & Workbooks",
  "Notion & Digital Templates",
  "Photo & Design Assets",
  "Events & Celebrations",
  "Spreadsheets & Trackers",
];

const DIFFICULTIES = ["beginner", "intermediate", "advanced"] as const;

const difficultyColor: Record<string, string> = {
  beginner: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  intermediate: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  advanced: "bg-red-500/20 text-red-400 border-red-500/30",
};

export type Stage = "saved" | "creating" | "listed" | "earning";

export const STAGES: { key: Stage; label: string; color: string; bg: string; border: string }[] = [
  { key: "saved",    label: "Saved",    color: "text-purple-200",  bg: "bg-[#3b006e]",    border: "border-purple-700" },
  { key: "creating", label: "Creating", color: "text-amber-300", bg: "bg-amber-500/20", border: "border-amber-500/40" },
  { key: "listed",   label: "Listed",   color: "text-blue-300",  bg: "bg-blue-500/20",  border: "border-blue-500/40" },
  { key: "earning",  label: "Earning",  color: "text-green-300", bg: "bg-green-500/20", border: "border-green-500/40" },
];

export type TrackerEntry = { stage: Stage; sales?: number };
export type TrackerData = Record<string, TrackerEntry>;

export const STORAGE_KEY = "creator-dash-tracker";

function parseTracker(raw: string | null): TrackerData {
  try {
    const parsed = JSON.parse(raw ?? "{}");
    const result: TrackerData = {};
    for (const [id, val] of Object.entries(parsed)) {
      result[id] = typeof val === "string"
        ? { stage: val as Stage }
        : (val as TrackerEntry);
    }
    return result;
  } catch {
    return {};
  }
}

export function useTracker() {
  const [tracker, setTracker] = useState<TrackerData>(() =>
    parseTracker(localStorage.getItem(STORAGE_KEY))
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tracker));
  }, [tracker]);

  const setStage = (id: string, stage: Stage | null) => {
    setTracker((prev) => {
      const next = { ...prev };
      if (stage === null) {
        delete next[id];
      } else {
        next[id] = { ...next[id], stage };
      }
      return next;
    });
  };

  const setSales = (id: string, sales: number) => {
    setTracker((prev) => {
      const entry = prev[id];
      if (!entry) return prev;
      return { ...prev, [id]: { ...entry, sales } };
    });
  };

  return { tracker, setStage, setSales };
}

const PLATFORM_CONFIG = [
  { key: "etsy" as const,           label: "Etsy",             color: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10" },
  { key: "tiktok" as const,         label: "TikTok",           color: "text-pink-400",   border: "border-pink-500/30",   bg: "bg-pink-500/10" },
  { key: "instagram" as const,      label: "Instagram",        color: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10" },
  { key: "pinterest" as const,      label: "Pinterest",        color: "text-red-400",    border: "border-red-500/30",    bg: "bg-red-500/10" },
  { key: "gptImagePrompt" as const, label: "GPT Image Prompt", color: "text-cyan-400",   border: "border-cyan-500/30",   bg: "bg-cyan-500/10" },
  { key: "videoPrompt" as const,    label: "Video Prompt",     color: "text-blue-400",   border: "border-blue-500/30",   bg: "bg-blue-500/10" },
];

function StagePill({ stage }: { stage: Stage }) {
  const s = STAGES.find((s) => s.key === stage)!;
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${s.color} ${s.bg} ${s.border}`}>
      {s.label}
    </span>
  );
}

export function DemandStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`text-[10px] ${i < rating ? "text-amber-400" : "text-purple-900"}`}>●</span>
      ))}
    </div>
  );
}

function IdeaCard({
  idea,
  entry,
  onClick,
}: {
  idea: DigitalDownloadIdea;
  entry: TrackerEntry | undefined;
  onClick: () => void;
}) {
  const accent = CATEGORY_ACCENT[idea.category] ?? "border-t-gray-700";
  return (
    <button
      onClick={onClick}
      className={`text-left bg-[#160028] border border-purple-900 border-t-2 ${accent} rounded-xl p-4 hover:border-amber-500/50 hover:bg-[#2a0050]/60 hover:-translate-y-px transition-all duration-200 flex flex-col gap-3 active:scale-[0.98]`}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-white font-semibold text-sm leading-snug">{idea.name}</h3>
        {entry && <StagePill stage={entry.stage} />}
      </div>
      <p className="text-purple-300 text-xs leading-relaxed line-clamp-2">{idea.description}</p>
      <div className="flex items-center justify-between text-xs text-purple-400">
        <span className={`px-2 py-0.5 rounded-full border ${difficultyColor[getDifficulty(idea)]}`}>
          {getDifficulty(idea)}
        </span>
        <span>£{idea.pricingRange.min}–£{idea.pricingRange.max}</span>
        <DemandStars rating={getDemandRating(idea)} />
      </div>
      {entry?.stage === "earning" && entry.sales != null && entry.sales > 0 && (
        <span className="text-xs text-green-400 font-medium">{entry.sales} sold</span>
      )}
    </button>
  );
}

function PlaceholderBox({ message }: { message: string }) {
  return (
    <div className="rounded-xl border border-dashed border-purple-800 px-4 py-5 text-center">
      <p className="text-purple-600 text-xs">{message}</p>
    </div>
  );
}

function IdeaDetail({
  idea,
  entry,
  onStageChange,
  onSalesChange,
  onClose,
}: {
  idea: DigitalDownloadIdea;
  entry: TrackerEntry | undefined;
  onStageChange: (stage: Stage | null) => void;
  onSalesChange: (sales: number) => void;
  onClose: () => void;
}) {
  const workflow = workflowGuides[idea.id];
  const marketing = marketingPrompts[idea.id];
  const [checkedSteps, setCheckedSteps] = useState<Set<number>>(new Set());

  const toggleStep = (i: number) =>
    setCheckedSteps((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  const checklist = idea.launchChecklist ?? [];
  const completedCount = checklist.filter((_, i) => checkedSteps.has(i)).length;
  const stage = entry?.stage;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div
        className="bg-[#0d0118] border border-purple-900 rounded-t-2xl sm:rounded-2xl w-full sm:max-w-lg max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {/* Mobile drag handle — tap to close */}
        <button
          onClick={onClose}
          className="sm:hidden w-full flex justify-center pt-3 pb-1 shrink-0"
          aria-label="Close"
        >
          <span className="w-10 h-1 rounded-full bg-purple-700" />
        </button>

        <div className="sticky top-0 z-10 bg-[#0d0118] border-b border-purple-900 px-4 py-3 flex items-start justify-between gap-3">
          <div>
            <h2 className="text-white font-bold text-base leading-snug">{idea.name}</h2>
            <p className="text-amber-400 text-xs mt-0.5">{idea.category}</p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center text-purple-300 hover:text-white text-xl rounded-lg hover:bg-[#2a0050] transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto flex-1">
        <div className="px-4 py-5 flex flex-col gap-6">

          {/* Progress tracker */}
          <div className="flex flex-col gap-2">
            <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider">My Progress</p>
            <div className="grid grid-cols-4 gap-2">
              {STAGES.map((s) => {
                const active = stage === s.key;
                return (
                  <button
                    key={s.key}
                    onClick={() => onStageChange(active ? null : s.key)}
                    className={`min-h-[44px] rounded-xl border text-xs font-semibold transition-all ${
                      active
                        ? `${s.bg} ${s.border} ${s.color}`
                        : "bg-[#160028] border-purple-800 text-purple-500 hover:border-purple-700 hover:text-purple-300"
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>

            {/* Sales input — only visible when earning */}
            {stage === "earning" && (
              <div className="flex items-center gap-3 pt-1">
                <label className="text-xs text-gray-500 shrink-0">Units sold</label>
                <input
                  type="number"
                  min={0}
                  step={1}
                  value={entry?.sales ?? ""}
                  placeholder="0"
                  onChange={(e) => {
                    const n = parseInt(e.target.value, 10);
                    onSalesChange(isNaN(n) ? 0 : Math.max(0, n));
                  }}
                  className="w-24 bg-[#160028] border border-purple-800 rounded-lg px-3 py-1.5 text-sm text-white placeholder-purple-600 focus:outline-none focus:border-green-500 min-h-[36px]"
                />
              </div>
            )}

            {stage && (
              <button
                onClick={() => onStageChange(null)}
                className="text-xs text-purple-600 hover:text-purple-400 text-right transition-colors"
              >
                Remove from my list
              </button>
            )}
          </div>

          {/* Description */}
          <p className="text-purple-200 text-sm leading-relaxed">{idea.description}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#160028] rounded-xl p-3 flex flex-col gap-1">
              <span className="text-purple-400 text-xs">Price Range</span>
              <span className="text-white text-sm font-semibold">£{idea.pricingRange.min}–£{idea.pricingRange.max}</span>
            </div>
            <div className="bg-[#160028] rounded-xl p-3 flex flex-col gap-1">
              <span className="text-purple-400 text-xs">Time to Create</span>
              <span className="text-white text-sm font-semibold">{idea.estimatedCreationTime}</span>
            </div>
            <div className="bg-[#160028] rounded-xl p-3 flex flex-col gap-1">
              <span className="text-purple-400 text-xs">Difficulty</span>
              <span className={`text-sm font-semibold capitalize ${
                getDifficulty(idea) === "beginner" ? "text-emerald-400" :
                getDifficulty(idea) === "intermediate" ? "text-amber-400" : "text-red-400"
              }`}>{getDifficulty(idea)}</span>
            </div>
            <div className="bg-[#160028] rounded-xl p-3 flex flex-col gap-1">
              <span className="text-purple-400 text-xs">Demand</span>
              <div className="flex items-center gap-1 pt-0.5">
                <DemandStars rating={getDemandRating(idea)} />
                <span className="text-purple-400 text-xs">({getDemandRating(idea)}/5)</span>
              </div>
            </div>
          </div>

          {/* Launch Checklist */}
          {checklist.length > 0 && (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 py-1">
                <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Launch Checklist</span>
                <div className="flex-1 h-px bg-[#2a0050]" />
                <span className="text-xs text-purple-400 shrink-0">{completedCount}/{checklist.length} done</span>
              </div>
              <div className="flex flex-col gap-2">
                {checklist.map((item, i) => {
                  const checked = checkedSteps.has(i);
                  return (
                    <button
                      key={i}
                      onClick={() => toggleStep(i)}
                      className="bg-[#160028] border border-purple-900 rounded-xl p-3 flex gap-3 items-start text-left hover:border-purple-800 transition-colors"
                    >
                      <span className={`shrink-0 w-4 h-4 mt-0.5 rounded border flex items-center justify-center text-[10px] transition-colors ${
                        checked
                          ? "bg-amber-500 border-amber-500 text-white"
                          : "border-purple-700 text-transparent"
                      }`}>
                        ✓
                      </span>
                      <p className={`text-sm leading-relaxed transition-colors ${checked ? "text-purple-500 line-through" : "text-purple-200"}`}>
                        {item}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tools + Niches */}
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">Tools Needed</p>
              <div className="flex flex-wrap gap-2">
                {idea.toolsNeeded.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-amber-900/30 text-amber-300 border border-amber-700/30">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">Target Niches</p>
              <div className="flex flex-wrap gap-2">
                {idea.niches.map((n) => (
                  <span key={n} className="text-xs px-2.5 py-1 rounded-full bg-[#2a0050] text-purple-200 border border-purple-800">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Workflow Guide */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 py-1">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Workflow Guide</span>
              <div className="flex-1 h-px bg-[#2a0050]" />
            </div>
            {workflow && workflow.steps.length > 0 ? (
              <div className="flex flex-col gap-2">
                {workflow.steps.map((step, i) => (
                  <div key={i} className="bg-[#160028] border border-purple-900 rounded-xl p-4 flex gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-purple-200 text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            ) : (
              <PlaceholderBox message="Paste steps into workflowGuides.ts to populate this section" />
            )}
          </div>

          {/* Market It */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 py-1">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Market It</span>
              <div className="flex-1 h-px bg-[#2a0050]" />
            </div>
            {marketing ? (
              <div className="flex flex-col gap-3">
                {PLATFORM_CONFIG.map(({ key, label, color, border, bg }) => {
                  const content = marketing[key];
                  return (
                    <div key={key} className={`rounded-xl border ${border} ${bg} p-4 flex flex-col gap-2`}>
                      <span className={`text-xs font-bold uppercase tracking-widest ${color}`}>{label}</span>
                      {content ? (
                        <p className="text-purple-100 text-sm leading-relaxed select-all">{content}</p>
                      ) : (
                        <p className="text-purple-600 text-xs italic">Paste your {label} prompt into marketingPrompts.ts</p>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <PlaceholderBox message="Paste prompts into marketingPrompts.ts to populate this section" />
            )}
          </div>

          <button
            onClick={onClose}
            className="sm:hidden w-full py-3 rounded-xl bg-[#2a0050] border border-purple-800 text-purple-200 text-sm font-medium hover:text-white transition-colors"
          >
            Close
          </button>

          <div className="h-4" />
        </div>
        </div>
      </div>
    </div>
  );
}

type SortOption = "default" | "demand" | "price-asc" | "price-desc";

export default function DigitalDownloadIdeas() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [selectedSort, setSelectedSort] = useState<SortOption>("default");
  const [myListOnly, setMyListOnly] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState<DigitalDownloadIdea | null>(null);
  const [collapsedCats, setCollapsedCats] = useState<Set<string>>(new Set());
  const { tracker, setStage, setSales } = useTracker();

  const toggleCat = (cat: string) =>
    setCollapsedCats((prev) => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("All");
    setSelectedDifficulty("All");
    setSelectedSort("default");
    setMyListOnly(false);
  };

  const filtered = useMemo(() => {
    const results = digitalDownloadIdeas.filter((idea) => {
      if (selectedCategory !== "All" && idea.category !== selectedCategory) return false;
      if (selectedDifficulty !== "All" && getDifficulty(idea) !== selectedDifficulty) return false;
      if (myListOnly && !tracker[idea.id]) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          idea.name.toLowerCase().includes(q) ||
          idea.description.toLowerCase().includes(q) ||
          idea.niches.some((n) => n.toLowerCase().includes(q))
        );
      }
      return true;
    });

    if (selectedSort === "demand") return [...results].sort((a, b) => getDemandRating(b) - getDemandRating(a));
    if (selectedSort === "price-asc") return [...results].sort((a, b) => a.pricingRange.min - b.pricingRange.min);
    if (selectedSort === "price-desc") return [...results].sort((a, b) => b.pricingRange.min - a.pricingRange.min);
    return results;
  }, [search, selectedCategory, selectedDifficulty, selectedSort, myListOnly, tracker]);

  // Group by category when on default sort
  const grouped = useMemo(() => {
    if (selectedSort !== "default") return null;
    return CATEGORIES
      .map((cat) => ({ category: cat, ideas: filtered.filter((i) => i.category === cat) }))
      .filter((g) => g.ideas.length > 0);
  }, [filtered, selectedSort]);

  const myListCount = Object.keys(tracker).length;

  return (
    <div className="min-h-screen bg-[#0d0118] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-white">Digital Downloads</h1>
          <p className="text-purple-300 text-sm mt-1">
            {digitalDownloadIdeas.length} ideas across {CATEGORIES.length} categories
            {myListCount > 0 && (
              <span className="ml-2 text-amber-400">· {myListCount} in your list</span>
            )}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Search by name, description, or niche..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#160028] border border-purple-800 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-500 focus:outline-none focus:border-amber-500 min-h-[44px]"
          />

          <div className="flex flex-wrap gap-2 items-center">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as Category | "All")}
              className="bg-[#160028] border border-purple-800 text-sm text-white rounded-xl px-3 min-h-[44px] focus:outline-none focus:border-amber-500 flex-1 min-w-[140px]"
            >
              <option value="All">All Categories</option>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-[#160028] border border-purple-800 text-sm text-white rounded-xl px-3 min-h-[44px] focus:outline-none focus:border-amber-500 flex-1 min-w-[130px]"
            >
              <option value="All">All Difficulties</option>
              {DIFFICULTIES.map((d) => (
                <option key={d} value={d}>{d.charAt(0).toUpperCase() + d.slice(1)}</option>
              ))}
            </select>

            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value as SortOption)}
              className="bg-[#160028] border border-purple-800 text-sm text-white rounded-xl px-3 min-h-[44px] focus:outline-none focus:border-amber-500 flex-1 min-w-[130px]"
            >
              <option value="default">Default Order</option>
              <option value="demand">Demand: High first</option>
              <option value="price-asc">Price: Low first</option>
              <option value="price-desc">Price: High first</option>
            </select>

            <button
              onClick={() => setMyListOnly((v) => !v)}
              className={`text-sm px-4 min-h-[44px] rounded-xl border transition-colors ${
                myListOnly
                  ? "bg-amber-500 border-amber-400 text-white"
                  : "bg-[#160028] border-purple-800 text-purple-400 hover:text-white"
              }`}
            >
              My List{myListCount > 0 ? ` (${myListCount})` : ""}
            </button>
          </div>

          <p className="text-purple-400 text-sm">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <span className="text-4xl text-purple-900">◎</span>
            <div className="text-center">
              <p className="text-purple-200 font-semibold text-base">
                {myListOnly ? "Your list is empty" : "No ideas match your filters"}
              </p>
              <p className="text-purple-400 text-sm mt-1">
                {myListOnly
                  ? "Open any product and set a stage to add it here."
                  : "Try adjusting your search or filters."}
              </p>
            </div>
            {!myListOnly && (
              <button
                onClick={clearFilters}
                className="mt-2 text-sm px-4 py-2 rounded-xl bg-[#2a0050] border border-purple-800 text-purple-200 hover:text-white hover:border-purple-700 transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        ) : grouped ? (
          // Grouped by category (default sort)
          <div className="flex flex-col gap-6">
            {grouped.map(({ category, ideas }) => {
              const collapsed = collapsedCats.has(category);
              return (
                <div key={category} className="flex flex-col gap-3">
                  <button
                    onClick={() => toggleCat(category)}
                    className="flex items-center gap-2 group w-full text-left"
                  >
                    <span className={`w-2 h-2 rounded-full shrink-0 ${CATEGORY_DOT[category]}`} />
                    <h2 className="text-sm font-semibold text-purple-200 group-hover:text-white transition-colors">
                      {category}
                    </h2>
                    <span className="text-xs text-purple-700">{ideas.length}</span>
                    <span className={`ml-auto text-purple-700 group-hover:text-purple-400 transition-all duration-200 text-xs ${collapsed ? "-rotate-90" : ""}`}>
                      ▾
                    </span>
                  </button>
                  {!collapsed && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                      {ideas.map((idea) => (
                        <IdeaCard
                          key={idea.id}
                          idea={idea}
                          entry={tracker[idea.id]}
                          onClick={() => setSelectedIdea(idea)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          // Flat grid (sorted)
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filtered.map((idea) => (
              <IdeaCard
                key={idea.id}
                idea={idea}
                entry={tracker[idea.id]}
                onClick={() => setSelectedIdea(idea)}
              />
            ))}
          </div>
        )}
      </div>

      {selectedIdea && (
        <IdeaDetail
          idea={selectedIdea}
          entry={tracker[selectedIdea.id]}
          onStageChange={(stage) => setStage(selectedIdea.id, stage)}
          onSalesChange={(sales) => setSales(selectedIdea.id, sales)}
          onClose={() => setSelectedIdea(null)}
        />
      )}
    </div>
  );
}
