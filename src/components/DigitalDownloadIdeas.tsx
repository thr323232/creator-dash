import { useState, useMemo, useEffect } from "react";
import { digitalDownloadIdeas, type DigitalDownloadIdea, type Category } from "../data/digitalDownloadIdeas";
import { workflowGuides } from "../data/workflowGuides";
import { marketingPrompts, type MarketingPrompts } from "../data/marketingPrompts";
import { getDifficulty, getDemandRating, CATEGORY_ACCENT, CATEGORY_DOT } from "../data/ideaUtils";
import { CATEGORIES, STAGES, useTracker, type Stage, type TrackerEntry } from "../data/tracker";

const DIFFICULTIES = ["beginner", "intermediate", "advanced"] as const;

type PlatformKey = "etsy" | "tiktok" | "instagram" | "pinterest";

const PLATFORM_CONFIG: {
  key: PlatformKey;
  label: string;
  color: string;
  border: string;
  bg: string;
  fields: { subKey: string; label: string }[];
}[] = [
  {
    key: "etsy", label: "Etsy", color: "text-orange-400",
    border: "border-orange-500/30", bg: "bg-orange-500/10",
    fields: [
      { subKey: "title",       label: "Listing Title" },
      { subKey: "description", label: "Description" },
      { subKey: "tags",        label: "Tags" },
    ],
  },
  {
    key: "tiktok", label: "TikTok", color: "text-pink-400",
    border: "border-pink-500/30", bg: "bg-pink-500/10",
    fields: [
      { subKey: "caption",  label: "Caption" },
      { subKey: "hashtags", label: "Hashtags" },
    ],
  },
  {
    key: "instagram", label: "Instagram", color: "text-purple-400",
    border: "border-purple-500/30", bg: "bg-purple-500/10",
    fields: [
      { subKey: "caption",  label: "Caption" },
      { subKey: "hashtags", label: "Hashtags" },
    ],
  },
  {
    key: "pinterest", label: "Pinterest", color: "text-red-400",
    border: "border-red-500/30", bg: "bg-red-500/10",
    fields: [
      { subKey: "title",       label: "Pin Title" },
      { subKey: "description", label: "Description" },
      { subKey: "keywords",    label: "Keywords" },
    ],
  },
];

export function StagePill({ stage }: { stage: Stage }) {
  const s = STAGES.find((s) => s.key === stage)!;
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${s.color} ${s.bg} ${s.border}`}>
      {s.label}
    </span>
  );
}

export function DemandStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`text-sm ${i < rating ? "text-amber-400" : "text-purple-800"}`}>●</span>
      ))}
    </div>
  );
}

const difficultyColor: Record<string, string> = {
  beginner: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  intermediate: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  advanced: "bg-red-500/20 text-red-400 border-red-500/30",
};

export function IdeaCard({
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
      className={`text-left bg-[#160028] border border-purple-900 border-t-4 ${accent} rounded-xl p-5 hover:border-amber-500/60 hover:bg-[#1e003a] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-950 transition-all duration-200 flex flex-col gap-4 active:scale-[0.98]`}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-white font-bold text-base leading-snug">{idea.name}</h3>
        {entry && <StagePill stage={entry.stage} />}
      </div>
      <p className="text-purple-300 text-sm leading-relaxed line-clamp-2">{idea.description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${difficultyColor[getDifficulty(idea)]}`}>
          {getDifficulty(idea)}
        </span>
        <span className="text-green-400 font-bold text-sm">£{idea.pricingRange.min}–£{idea.pricingRange.max}</span>
      </div>
      <div className="flex items-center justify-between">
        <DemandStars rating={getDemandRating(idea)} />
        {entry?.stage === "earning" && entry.sales != null && entry.sales > 0 && (
          <span className="text-xs text-green-400 font-semibold bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">{entry.sales} sold</span>
        )}
      </div>
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

export function IdeaDetail({
  idea,
  entry,
  onStageChange,
  onSalesChange,
  onClose,
  onDelete,
  scrollTo,
  workflowOverride,
  marketingOverride,
}: {
  idea: DigitalDownloadIdea;
  entry: TrackerEntry | undefined;
  onStageChange: (stage: Stage | null) => void;
  onSalesChange: (sales: number) => void;
  onClose: () => void;
  onDelete?: () => void;
  scrollTo?: string;
  workflowOverride?: { steps: string[] };
  marketingOverride?: MarketingPrompts;
}) {
  const workflow = workflowOverride ?? workflowGuides[idea.id];
  const marketing = marketingOverride ?? marketingPrompts[idea.id];
  const [checkedSteps, setCheckedSteps] = useState<Set<number>>(new Set());
  const [openPlatform, setOpenPlatform] = useState<string | null>("etsy");
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    if (!scrollTo) return;
    const el = document.getElementById(scrollTo);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
  }, [scrollTo]);

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    });
  };

  const toggleStep = (i: number) =>
    setCheckedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(i)) { next.delete(i); } else { next.add(i); }
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

        <div className="overflow-y-auto flex-1 overscroll-contain">
        <div className="px-4 py-5 flex flex-col gap-6">

          {/* Progress tracker */}
          <div id="section-progress" className="flex flex-col gap-2">
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

            <div className="flex items-center justify-between">
              {stage ? (
                <button
                  onClick={() => onStageChange(null)}
                  className="text-xs text-purple-600 hover:text-purple-400 transition-colors"
                >
                  Remove from my list
                </button>
              ) : <span />}
              {onDelete && (
                <button
                  onClick={onDelete}
                  className="text-xs text-red-600 hover:text-red-400 transition-colors"
                >
                  Delete idea
                </button>
              )}
            </div>
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
            <div id="section-checklist" className="flex flex-col gap-3">
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

          {/* Create It */}
          {idea.creationPrompt && (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 py-1">
                <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Create It</span>
                <div className="flex-1 h-px bg-[#2a0050]" />
              </div>
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-violet-300 uppercase tracking-wider">
                    {idea.creationTool === "chatgpt" ? "ChatGPT Prompt" : "Claude Prompt"}
                  </span>
                  <button
                    onClick={() => copyText(idea.creationPrompt!, "creationPrompt")}
                    className="shrink-0 text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-purple-300 hover:text-white hover:border-white/20 transition-colors"
                  >
                    {copied === "creationPrompt" ? "✓ Copied" : "Copy"}
                  </button>
                </div>
                <p className="text-purple-100 text-sm leading-relaxed whitespace-pre-line">{idea.creationPrompt}</p>
              </div>
            </div>
          )}

          {/* Market It */}
          <div id="section-market" className="flex flex-col gap-3">
            <div className="flex items-center gap-3 py-1">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Market It</span>
              <div className="flex-1 h-px bg-[#2a0050]" />
            </div>
            {marketing ? (
              <div className="flex flex-col gap-2">
                {/* Platform accordions */}
                {PLATFORM_CONFIG.map(({ key, label, color, border, bg, fields }) => {
                  const platformData = marketing[key] as unknown as Record<string, string>;
                  const isOpen = openPlatform === key;
                  const hasContent = fields.some(f => platformData?.[f.subKey]);
                  return (
                    <div key={key} className={`rounded-xl border ${border} ${bg} overflow-hidden`}>
                      {/* Accordion header */}
                      <button
                        onClick={() => setOpenPlatform(isOpen ? null : key)}
                        className="w-full px-4 py-3 flex items-center justify-between gap-3"
                      >
                        <span className={`text-xs font-bold uppercase tracking-widest ${color}`}>{label}</span>
                        <span className={`text-purple-500 text-xs transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>▾</span>
                      </button>
                      {/* Accordion body */}
                      {isOpen && (
                        <div className="px-4 pb-4 flex flex-col gap-4 border-t border-white/5 pt-3">
                          {hasContent ? fields.map(({ subKey, label: fieldLabel }) => {
                            const value = platformData?.[subKey] ?? "";
                            const copyKey = `${key}.${subKey}`;
                            return (
                              <div key={subKey} className="flex flex-col gap-1.5">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">{fieldLabel}</span>
                                  {value && (
                                    <button
                                      onClick={() => copyText(value, copyKey)}
                                      className="shrink-0 text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-purple-300 hover:text-white hover:border-white/20 transition-colors"
                                    >
                                      {copied === copyKey ? "✓ Copied" : "Copy"}
                                    </button>
                                  )}
                                </div>
                                {value ? (
                                  <p className="text-purple-100 text-sm leading-relaxed">{value}</p>
                                ) : (
                                  <p className="text-purple-600 text-xs italic">No content yet</p>
                                )}
                              </div>
                            );
                          }) : (
                            <p className="text-purple-600 text-xs italic">No content yet for this platform.</p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* GPT Image Prompt — flat card */}
                {(() => {
                  const val = marketing.gptImagePrompt;
                  return (
                    <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4 flex flex-col gap-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">GPT Image Prompt</span>
                        {val && (
                          <button
                            onClick={() => copyText(val, "gptImagePrompt")}
                            className="shrink-0 text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-purple-300 hover:text-white hover:border-white/20 transition-colors"
                          >
                            {copied === "gptImagePrompt" ? "✓ Copied" : "Copy"}
                          </button>
                        )}
                      </div>
                      {val ? (
                        <p className="text-purple-100 text-sm leading-relaxed">{val}</p>
                      ) : (
                        <p className="text-purple-600 text-xs italic">No content yet</p>
                      )}
                    </div>
                  );
                })()}

                {/* Video Prompt — flat card */}
                {(() => {
                  const val = marketing.videoPrompt;
                  return (
                    <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 flex flex-col gap-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Video Prompt</span>
                        {val && (
                          <button
                            onClick={() => copyText(val, "videoPrompt")}
                            className="shrink-0 text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-purple-300 hover:text-white hover:border-white/20 transition-colors"
                          >
                            {copied === "videoPrompt" ? "✓ Copied" : "Copy"}
                          </button>
                        )}
                      </div>
                      {val ? (
                        <p className="text-purple-100 text-sm leading-relaxed">{val}</p>
                      ) : (
                        <p className="text-purple-600 text-xs italic">No content yet</p>
                      )}
                    </div>
                  );
                })()}
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
      if (next.has(cat)) { next.delete(cat); } else { next.add(cat); }
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
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Digital Downloads
          </h1>
          <p className="text-purple-400 text-sm mt-1.5">
            <span className="text-purple-200 font-medium">{digitalDownloadIdeas.length} ideas</span> across <span className="text-purple-200 font-medium">{CATEGORIES.length} categories</span>
            {myListCount > 0 && (
              <span className="ml-2 text-amber-400 font-semibold">· {myListCount} in your list</span>
            )}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Search by name, description, or niche..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#160028] border border-purple-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-purple-500 focus:outline-none focus:border-amber-500"
          />

          {/* Category pill row */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {(["All", ...CATEGORIES] as (Category | "All")[]).map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`shrink-0 text-sm px-4 py-2 rounded-full border font-medium transition-all duration-150 ${
                  selectedCategory === c
                    ? "bg-amber-500 border-amber-400 text-white shadow-md shadow-amber-900/40"
                    : "bg-[#160028] border-purple-800 text-purple-300 hover:border-purple-600 hover:text-white"
                }`}
              >
                {c === "All" ? "All" : c}
              </button>
            ))}
          </div>

          {/* Secondary controls row */}
          <div className="flex flex-wrap gap-2 items-center">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-[#160028] border border-purple-800 text-sm text-white rounded-xl px-3 py-2.5 min-h-[44px] focus:outline-none focus:border-amber-500 flex-1 min-w-[140px]"
            >
              <option value="All">All Difficulties</option>
              {DIFFICULTIES.map((d) => (
                <option key={d} value={d}>{d.charAt(0).toUpperCase() + d.slice(1)}</option>
              ))}
            </select>

            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value as SortOption)}
              className="bg-[#160028] border border-purple-800 text-sm text-white rounded-xl px-3 py-2.5 min-h-[44px] focus:outline-none focus:border-amber-500 flex-1 min-w-[150px]"
            >
              <option value="default">Default Order</option>
              <option value="demand">Demand: High first</option>
              <option value="price-asc">Price: Low first</option>
              <option value="price-desc">Price: High first</option>
            </select>

            <button
              onClick={() => setMyListOnly((v) => !v)}
              className={`text-sm px-5 py-2.5 min-h-[44px] rounded-xl border font-medium transition-all duration-150 ${
                myListOnly
                  ? "bg-amber-500 border-amber-400 text-white shadow-md shadow-amber-900/40"
                  : "bg-[#160028] border-purple-800 text-purple-300 hover:border-purple-600 hover:text-white"
              }`}
            >
              My List{myListCount > 0 ? ` (${myListCount})` : ""}
            </button>
          </div>

          <p className="text-purple-500 text-sm">
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
          <div className="flex flex-col gap-8">
            {grouped.map(({ category, ideas }) => {
              const collapsed = collapsedCats.has(category);
              return (
                <div key={category} className="flex flex-col gap-4">
                  <button
                    onClick={() => toggleCat(category)}
                    className="flex items-center gap-3 group w-full text-left"
                  >
                    <span className={`w-3 h-3 rounded-full shrink-0 ${CATEGORY_DOT[category]}`} />
                    <h2 className="text-base font-bold text-purple-100 group-hover:text-white transition-colors">
                      {category}
                    </h2>
                    <span className="text-xs font-semibold text-purple-600 bg-purple-900/40 border border-purple-800 px-2 py-0.5 rounded-full">
                      {ideas.length}
                    </span>
                    <span className={`ml-auto text-purple-600 group-hover:text-purple-400 transition-all duration-200 text-sm ${collapsed ? "-rotate-90" : ""}`}>
                      ▾
                    </span>
                  </button>
                  {!collapsed && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
