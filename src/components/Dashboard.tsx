import { useMemo, useState } from "react";
import { digitalDownloadIdeas } from "../data/digitalDownloadIdeas";
import { getDifficulty, getDemandRating, CATEGORY_BAR, CATEGORY_ACCENT } from "../data/ideaUtils";
import { CATEGORIES, STAGES, useTracker, type Stage } from "../data/tracker";
import { DemandStars, IdeaDetail } from "./DigitalDownloadIdeas";

const difficultyColor: Record<string, string> = {
  beginner:     "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  intermediate: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  advanced:     "bg-red-500/20 text-red-400 border-red-500/30",
};

const stageBorderLeft: Record<Stage, string> = {
  saved:    "border-l-purple-500",
  creating: "border-l-amber-500",
  listed:   "border-l-blue-500",
  earning:  "border-l-green-500",
};

// Stage order for quick-advance
const STAGE_KEYS: Stage[] = ["saved", "creating", "listed", "earning"];

function StatCard({ label, value, accent, sub }: { label: string; value: string | number; accent: string; sub?: string }) {
  return (
    <div className="bg-[#160028] border border-purple-900 rounded-xl p-5 flex flex-col gap-1">
      <span className={`text-3xl font-bold ${accent}`}>{value}</span>
      <span className="text-purple-300 text-sm font-medium">{label}</span>
      {sub && <span className="text-purple-600 text-xs">{sub}</span>}
    </div>
  );
}

function StageSection({
  stage,
  ideas,
  salesMap,
  onSalesChange,
  onStageAdvance,
  onOpenDetail,
}: {
  stage: typeof STAGES[number];
  ideas: typeof digitalDownloadIdeas;
  salesMap: Record<string, number>;
  onSalesChange: (id: string, sales: number) => void;
  onStageAdvance: (id: string, nextStage: Stage) => void;
  onOpenDetail: (idea: typeof digitalDownloadIdeas[number]) => void;
}) {
  const [collapsed, setCollapsed] = useState(false);
  if (ideas.length === 0) return null;

  const currentIdx = STAGE_KEYS.indexOf(stage.key);
  const nextStage = currentIdx < STAGE_KEYS.length - 1 ? STAGE_KEYS[currentIdx + 1] : null;

  return (
    <div className="flex flex-col gap-2">
      {/* Stage subheading */}
      <button
        onClick={() => setCollapsed((v) => !v)}
        className={`flex items-center gap-3 group w-full text-left border-l-4 ${stageBorderLeft[stage.key]} pl-3 py-1`}
      >
        <span className={`text-base font-bold ${stage.color}`}>{stage.label}</span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${stage.color} ${stage.bg} ${stage.border}`}>
          {ideas.length}
        </span>
        <span className={`ml-auto text-purple-600 group-hover:text-purple-400 transition-all duration-200 text-sm ${collapsed ? "-rotate-90" : ""}`}>
          ▾
        </span>
      </button>

      {/* Compact rows */}
      {!collapsed && (
        <div className="flex flex-col divide-y divide-purple-900/60 rounded-xl border border-purple-900 bg-[#160028] overflow-hidden">
          {ideas.map((idea) => (
            <div
              key={idea.id}
              onClick={() => onOpenDetail(idea)}
              className="px-4 py-3 flex flex-col gap-2 cursor-pointer hover:bg-[#1e003a] transition-colors"
            >
              {/* Main row */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex-1 min-w-0">
                  <span className="text-white font-semibold text-sm">{idea.name}</span>
                  {idea.trending && (
                    <span className="ml-2 text-xs text-orange-400 font-semibold">🔥 Trending</span>
                  )}
                  <span className="text-purple-500 text-xs"> · {idea.category}</span>
                </div>
                <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full border font-medium ${difficultyColor[getDifficulty(idea)]}`}>
                  {getDifficulty(idea)}
                </span>
                <span className="shrink-0 text-green-400 font-bold text-sm">£{idea.pricingRange.min}–£{idea.pricingRange.max}</span>
                <div className="shrink-0">
                  <DemandStars rating={getDemandRating(idea)} />
                </div>
                {/* Quick stage advance */}
                {nextStage && (
                  <button
                    onClick={(e) => { e.stopPropagation(); onStageAdvance(idea.id, nextStage); }}
                    className="shrink-0 text-purple-500 hover:text-purple-300 text-base leading-none px-1 transition-colors"
                    title={`Move to ${nextStage}`}
                  >
                    ›
                  </button>
                )}
              </div>
              {/* Earning sales input */}
              {stage.key === "earning" && (
                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <label className="text-xs text-purple-500 shrink-0">Units sold</label>
                  <input
                    type="number"
                    min={0}
                    step={1}
                    value={salesMap[idea.id] ?? ""}
                    placeholder="0"
                    onChange={(e) => {
                      const n = parseInt(e.target.value, 10);
                      onSalesChange(idea.id, isNaN(n) ? 0 : Math.max(0, n));
                    }}
                    className="w-20 bg-[#0d0118] border border-purple-800 rounded-lg px-2.5 py-1 text-sm text-white placeholder-purple-700 focus:outline-none focus:border-green-500"
                  />
                  {(salesMap[idea.id] ?? 0) > 0 && (
                    <span className="text-xs text-green-400 font-semibold">
                      = £{Math.round((salesMap[idea.id] ?? 0) * (idea.pricingRange.min + idea.pricingRange.max) / 2)} est.
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const { tracker, setStage, setSales } = useTracker();
  const [detailIdea, setDetailIdea] = useState<(typeof digitalDownloadIdeas)[number] | null>(null);

  const salesMap = useMemo(() => {
    const m: Record<string, number> = {};
    for (const [id, entry] of Object.entries(tracker)) {
      if (entry.sales != null) m[id] = entry.sales;
    }
    return m;
  }, [tracker]);

  const trackerEntries = useMemo(() => Object.entries(tracker), [tracker]);
  const totalTracked = trackerEntries.length;

  const ideaById = useMemo(() => {
    const map: Record<string, (typeof digitalDownloadIdeas)[number]> = {};
    for (const idea of digitalDownloadIdeas) map[idea.id] = idea;
    return map;
  }, []);

  const stageCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const [, entry] of trackerEntries) {
      counts[entry.stage] = (counts[entry.stage] ?? 0) + 1;
    }
    return counts;
  }, [trackerEntries]);

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

  const inProgress = (stageCounts["creating"] ?? 0) + (stageCounts["listed"] ?? 0);
  const earning = stageCounts["earning"] ?? 0;

  // Ideas per stage for My List
  const ideasByStage = useMemo(() => {
    const groups: Record<Stage, typeof digitalDownloadIdeas> = {
      saved: [], creating: [], listed: [], earning: [],
    };
    for (const [id, entry] of trackerEntries) {
      const idea = ideaById[id];
      if (idea) groups[entry.stage].push(idea);
    }
    return groups;
  }, [trackerEntries, ideaById]);

  // Category opportunity grid
  const categoryOpportunity = useMemo(() => {
    return CATEGORIES.map((cat) => {
      const ideas = digitalDownloadIdeas.filter((i) => i.category === cat);
      const avgDemand = ideas.reduce((s, i) => s + i.demandRating, 0) / ideas.length;
      const avgPrice  = Math.round(
        ideas.reduce((s, i) => s + (i.pricingRange.min + i.pricingRange.max) / 2, 0) / ideas.length
      );
      const trendingCount = ideas.filter((i) => i.trending).length;
      const difficultyCounts: Record<string, number> = { beginner: 0, intermediate: 0, advanced: 0 };
      for (const i of ideas) difficultyCounts[getDifficulty(i)]++;
      const dominantDifficulty = (Object.entries(difficultyCounts) as [string, number][])
        .sort((a, b) => b[1] - a[1])[0][0];
      const tracked = trackerEntries.filter(([id]) => ideaById[id]?.category === cat);
      const stages: Record<Stage, number> = { saved: 0, creating: 0, listed: 0, earning: 0 };
      for (const [, e] of tracked) stages[e.stage]++;
      return {
        category: cat,
        total: ideas.length,
        avgDemand,
        avgPrice,
        trendingCount,
        dominantDifficulty,
        trackedCount: tracked.length,
        stages,
      };
    }).sort((a, b) => b.trackedCount - a.trackedCount || b.avgDemand - a.avgDemand);
  }, [trackerEntries, ideaById]);

  const stageLabels: Record<Stage, string> = { saved: "Saved", creating: "Creating", listed: "Listed", earning: "Earning" };
  const stageColors: Record<Stage, string> = { saved: "text-purple-300", creating: "text-amber-400", listed: "text-blue-400", earning: "text-green-400" };

  return (
    <div className="min-h-screen bg-[#0d0118] text-white">
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-10">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard</h1>
          <p className="text-purple-400 text-sm mt-1.5">Your progress at a glance</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard label="Tracked"      value={totalTracked}               accent="text-white"      sub="ideas in your list" />
          <StatCard label="In Progress"  value={inProgress}                 accent="text-amber-400" sub="creating or listed" />
          <StatCard label="Earning"      value={earning}                    accent="text-green-400" sub="active listings" />
          <StatCard label="Est. Revenue" value={`£${Math.round(estRevenue)}`} accent="text-green-300" sub={`${totalSales} units sold`} />
        </div>

        {/* My List */}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-base font-bold text-purple-100">My List</h2>
            <p className="text-purple-500 text-xs mt-0.5">Click any idea to open its full workflow · › to advance stage</p>
          </div>

          {totalTracked === 0 ? (
            <div className="bg-[#160028] border border-dashed border-purple-800 rounded-xl px-6 py-10 text-center flex flex-col gap-2">
              <p className="text-purple-300 font-semibold text-sm">Your list is empty</p>
              <p className="text-purple-600 text-xs">
                Go to Browse, open any idea, and set a stage — it will appear here.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {STAGES.map((s) => (
                <StageSection
                  key={s.key}
                  stage={s}
                  ideas={ideasByStage[s.key]}
                  salesMap={salesMap}
                  onSalesChange={setSales}
                  onStageAdvance={(id, next) => setStage(id, next)}
                  onOpenDetail={setDetailIdea}
                />
              ))}
            </div>
          )}
        </div>

        {/* Category Opportunities */}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-base font-bold text-purple-100">Category Opportunities</h2>
            <p className="text-purple-500 text-xs mt-0.5">Sorted by your activity, then avg demand — pick your next focus</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {categoryOpportunity.map(({ category, total, avgDemand, avgPrice, trendingCount, dominantDifficulty, trackedCount, stages }) => {
              const accent  = CATEGORY_ACCENT[category] ?? "border-t-gray-700";
              const bar     = CATEGORY_BAR[category]   ?? "bg-gray-600";
              const isActive = trackedCount > 0;
              const coveragePct = (trackedCount / total) * 100;
              const activeStages = (Object.entries(stages) as [Stage, number][]).filter(([, n]) => n > 0);
              return (
                <div
                  key={category}
                  className={`border border-t-4 ${accent} rounded-xl p-4 flex flex-col gap-3 transition-colors ${
                    isActive ? "bg-[#1e003a] border-amber-500/30" : "bg-[#160028] border-purple-900"
                  }`}
                >
                  {/* Category name + tracked badge */}
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-white font-bold text-sm leading-snug">{category}</p>
                    {isActive && (
                      <span className="shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400">
                        {trackedCount} tracked
                      </span>
                    )}
                  </div>

                  {/* Demand + price + difficulty */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <DemandStars rating={Math.round(avgDemand)} />
                    <span className="text-purple-500 text-xs">·</span>
                    <span className="text-green-400 font-semibold text-sm">avg £{avgPrice}</span>
                    <span className={`ml-auto text-xs px-2 py-0.5 rounded-full border font-medium ${difficultyColor[dominantDifficulty]}`}>
                      {dominantDifficulty}
                    </span>
                  </div>

                  {/* Coverage bar + trending */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-[#2a0050] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${bar}`}
                        style={{ width: `${coveragePct}%` }}
                      />
                    </div>
                    <span className="text-purple-600 text-xs shrink-0">{trackedCount}/{total}</span>
                    {trendingCount > 0 && (
                      <span className="text-orange-400 text-xs font-medium shrink-0">🔥 {trendingCount}</span>
                    )}
                  </div>

                  {/* Stage breakdown */}
                  {isActive && activeStages.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {activeStages.map(([stage, n]) => (
                        <span key={stage} className={`text-xs font-medium ${stageColors[stage]}`}>
                          {n} {stageLabels[stage]}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Idea detail modal */}
      {detailIdea && (
        <IdeaDetail
          idea={detailIdea}
          entry={tracker[detailIdea.id]}
          onStageChange={(stage) => { if (stage) setStage(detailIdea.id, stage); }}
          onSalesChange={(sales) => setSales(detailIdea.id, sales)}
          onClose={() => setDetailIdea(null)}
        />
      )}
    </div>
  );
}
