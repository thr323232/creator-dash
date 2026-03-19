import { useMemo, useState } from "react";
import { digitalDownloadIdeas } from "../data/digitalDownloadIdeas";
import { getDifficulty, getDemandRating, CATEGORY_BAR, CATEGORY_ACCENT } from "../data/ideaUtils";
import { CATEGORIES, STAGES, useTracker, type Stage } from "../data/tracker";
import { DemandStars } from "./DigitalDownloadIdeas";

const difficultyColor: Record<string, string> = {
  beginner:     "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  intermediate: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  advanced:     "bg-red-500/20 text-red-400 border-red-500/30",
};

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
}: {
  stage: typeof STAGES[number];
  ideas: typeof digitalDownloadIdeas;
  salesMap: Record<string, number>;
  onSalesChange: (id: string, sales: number) => void;
}) {
  const [collapsed, setCollapsed] = useState(false);
  if (ideas.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={() => setCollapsed((v) => !v)}
        className="flex items-center gap-3 group w-full text-left"
      >
        <span className={`text-sm font-bold ${stage.color}`}>{stage.label}</span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${stage.color} ${stage.bg} ${stage.border}`}>
          {ideas.length}
        </span>
        <span className={`ml-auto text-purple-600 group-hover:text-purple-400 transition-all duration-200 text-sm ${collapsed ? "-rotate-90" : ""}`}>
          ▾
        </span>
      </button>

      {!collapsed && (
        <div className="flex flex-col gap-2">
          {ideas.map((idea) => {
            const catAccent = CATEGORY_ACCENT[idea.category] ?? "border-t-gray-700";
            return (
              <div
                key={idea.id}
                className={`bg-[#160028] border border-purple-900 border-t-4 ${catAccent} rounded-xl p-4 flex flex-col gap-3`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-white font-bold text-base leading-snug">{idea.name}</p>
                    <p className="text-purple-400 text-xs mt-0.5">{idea.category}</p>
                  </div>
                  <span className={`shrink-0 text-xs px-2.5 py-1 rounded-full border font-medium ${difficultyColor[getDifficulty(idea)]}`}>
                    {getDifficulty(idea)}
                  </span>
                </div>

                <p className="text-purple-300 text-sm leading-relaxed line-clamp-2">{idea.description}</p>

                <div className="flex items-center justify-between">
                  <DemandStars rating={getDemandRating(idea)} />
                  <span className="text-green-400 font-bold text-sm">£{idea.pricingRange.min}–£{idea.pricingRange.max}</span>
                </div>

                {stage.key === "earning" && (
                  <div className="flex items-center gap-3 pt-1 border-t border-purple-900">
                    <label className="text-xs text-purple-400 shrink-0">Units sold</label>
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
                      className="w-24 bg-[#0d0118] border border-purple-800 rounded-lg px-3 py-1.5 text-sm text-white placeholder-purple-600 focus:outline-none focus:border-green-500"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const { tracker, setSales } = useTracker();

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

  // Category bar chart data
  const categoryStats = useMemo(() => {
    const counts: Record<string, number> = {};
    const creating: Record<string, number> = {};
    const listed: Record<string, number> = {};
    const earningCount: Record<string, number> = {};
    const earningSales: Record<string, number> = {};

    for (const idea of digitalDownloadIdeas) {
      counts[idea.category] = (counts[idea.category] ?? 0) + 1;
    }
    for (const [id, entry] of trackerEntries) {
      const idea = ideaById[id];
      if (!idea) continue;
      const cat = idea.category;
      if (entry.stage === "creating") creating[cat] = (creating[cat] ?? 0) + 1;
      if (entry.stage === "listed")   listed[cat]   = (listed[cat]   ?? 0) + 1;
      if (entry.stage === "earning") {
        earningCount[cat] = (earningCount[cat] ?? 0) + 1;
        earningSales[cat] = (earningSales[cat] ?? 0) + (entry.sales ?? 0);
      }
    }
    return CATEGORIES
      .map((cat) => ({
        category: cat,
        count: counts[cat] ?? 0,
        creating: creating[cat] ?? 0,
        listed: listed[cat] ?? 0,
        earningCount: earningCount[cat] ?? 0,
        earningSales: earningSales[cat] ?? 0,
      }))
      .sort((a, b) => b.count - a.count);
  }, [trackerEntries, ideaById]);

  const maxCategoryCount = categoryStats[0]?.count ?? 1;

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
          <StatCard label="Tracked"    value={totalTracked} accent="text-white"      sub="ideas in your list" />
          <StatCard label="In Progress" value={inProgress}   accent="text-amber-400" sub="creating or listed" />
          <StatCard label="Earning"    value={earning}      accent="text-green-400" sub="active listings" />
          <StatCard label="Total Sold" value={totalSales}   accent="text-green-300" sub="units across all" />
        </div>

        {/* My List */}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-base font-bold text-purple-100">My List</h2>
            <p className="text-purple-500 text-xs mt-0.5">All ideas you're tracking, grouped by stage</p>
          </div>

          {totalTracked === 0 ? (
            <div className="bg-[#160028] border border-dashed border-purple-800 rounded-xl px-6 py-10 text-center flex flex-col gap-2">
              <p className="text-purple-300 font-semibold text-sm">Your list is empty</p>
              <p className="text-purple-600 text-xs">
                Go to Browse, open any idea, and set a stage — it will appear here.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {STAGES.map((s) => (
                <StageSection
                  key={s.key}
                  stage={s}
                  ideas={ideasByStage[s.key]}
                  salesMap={salesMap}
                  onSalesChange={setSales}
                />
              ))}
            </div>
          )}
        </div>

        {/* Stage pipeline bar */}
        {totalTracked > 0 && (
          <div className="flex flex-col gap-3">
            <h2 className="text-base font-bold text-purple-100">Pipeline</h2>
            <div className="bg-[#160028] border border-purple-900 rounded-xl p-5 flex flex-col gap-4">
              {STAGES.map((s) => {
                const count = stageCounts[s.key] ?? 0;
                const pct = totalTracked > 0 ? (count / totalTracked) * 100 : 0;
                return (
                  <div key={s.key} className="flex items-center gap-4">
                    <span className={`text-sm font-semibold w-20 shrink-0 ${s.color}`}>{s.label}</span>
                    <div className="flex-1 h-3 bg-[#2a0050] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${s.bg.replace("/20", "")}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-purple-300 w-6 text-right shrink-0">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Ideas by category */}
        <div className="flex flex-col gap-3">
          <h2 className="text-base font-bold text-purple-100">Ideas by Category</h2>
          <div className="bg-[#160028] border border-purple-900 rounded-xl p-5 flex flex-col gap-4">
            {categoryStats.map(({ category, count, creating, listed, earningCount, earningSales }) => {
              const pct = (count / maxCategoryCount) * 100;
              const bar = CATEGORY_BAR[category] ?? "bg-gray-600";
              const hasActivity = creating > 0 || listed > 0 || earningCount > 0;
              return (
                <div key={category} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-purple-300 w-48 shrink-0 truncate">{category}</span>
                    <div className="flex-1 h-2.5 bg-[#2a0050] rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-500 ${bar}`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-sm text-purple-400 w-6 text-right shrink-0">{count}</span>
                  </div>
                  {hasActivity && (
                    <div className="flex items-center gap-3 pl-[12.5rem]">
                      <div className="flex items-center gap-2 text-xs">
                        {creating > 0 && (
                          <span className="flex items-center gap-1 text-amber-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            {creating} creating
                          </span>
                        )}
                        {listed > 0 && (
                          <span className="flex items-center gap-1 text-blue-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            {listed} listed
                          </span>
                        )}
                        {earningCount > 0 && (
                          <span className="flex items-center gap-1 text-green-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                            {earningCount} earning{earningSales > 0 ? ` · ${earningSales} sold` : ""}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
