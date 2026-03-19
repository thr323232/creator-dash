import { useMemo } from "react";
import { digitalDownloadIdeas } from "../data/digitalDownloadIdeas";
import { getDemandRating, CATEGORY_BAR } from "../data/ideaUtils";
import { CATEGORIES, STAGES, STORAGE_KEY, DemandStars, type Stage } from "./DigitalDownloadIdeas";

function readTracker(): Record<string, Stage> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function StatPill({ label, value, accent }: { label: string; value: number; accent: string }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex flex-col gap-1">
      <span className={`text-2xl font-bold ${accent}`}>{value}</span>
      <span className="text-gray-500 text-xs">{label}</span>
    </div>
  );
}

export default function Dashboard() {
  const tracker = useMemo(readTracker, []);

  const trackerEntries = Object.entries(tracker) as [string, Stage][];
  const totalTracked = trackerEntries.length;

  const stageCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const [, stage] of trackerEntries) {
      counts[stage] = (counts[stage] ?? 0) + 1;
    }
    return counts;
  }, [trackerEntries]);

  const inProgress = (stageCounts["creating"] ?? 0) + (stageCounts["listed"] ?? 0);
  const earning = stageCounts["earning"] ?? 0;

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const idea of digitalDownloadIdeas) {
      counts[idea.category] = (counts[idea.category] ?? 0) + 1;
    }
    return CATEGORIES
      .map((cat) => ({ category: cat, count: counts[cat] ?? 0 }))
      .sort((a, b) => b.count - a.count);
  }, []);

  const maxCategoryCount = categoryCounts[0]?.count ?? 1;

  const topByDemand = useMemo(() => {
    return [...digitalDownloadIdeas]
      .sort((a, b) => getDemandRating(b) - getDemandRating(a))
      .slice(0, 5);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-8">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">Overview of your ideas and progress</p>
        </div>

        {/* Stat pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatPill label="Total Ideas"  value={digitalDownloadIdeas.length} accent="text-white" />
          <StatPill label="Categories"   value={CATEGORIES.length}           accent="text-violet-400" />
          <StatPill label="In Progress"  value={inProgress}                  accent="text-amber-400" />
          <StatPill label="Earning"      value={earning}                     accent="text-green-400" />
        </div>

        {/* Tracker breakdown */}
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-gray-300">My Tracker</h2>
          {totalTracked === 0 ? (
            <div className="bg-gray-900 border border-gray-800 rounded-xl px-4 py-6 text-center">
              <p className="text-gray-500 text-sm">No ideas tracked yet.</p>
              <p className="text-gray-600 text-xs mt-1">Open any product in Browse and set a stage to get started.</p>
            </div>
          ) : (
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex flex-col gap-3">
              {STAGES.map((s) => {
                const count = stageCounts[s.key] ?? 0;
                const pct = totalTracked > 0 ? (count / totalTracked) * 100 : 0;
                return (
                  <div key={s.key} className="flex items-center gap-3">
                    <span className={`text-xs font-semibold w-16 shrink-0 ${s.color}`}>{s.label}</span>
                    <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${s.bg.replace("/20", "")}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-6 text-right shrink-0">{count}</span>
                  </div>
                );
              })}
              <p className="text-gray-600 text-xs text-right">{totalTracked} idea{totalTracked !== 1 ? "s" : ""} tracked</p>
            </div>
          )}
        </div>

        {/* Ideas by category */}
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-gray-300">Ideas by Category</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex flex-col gap-3">
            {categoryCounts.map(({ category, count }) => {
              const pct = (count / maxCategoryCount) * 100;
              const bar = CATEGORY_BAR[category] ?? "bg-gray-600";
              return (
                <div key={category} className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 w-44 shrink-0 truncate">{category}</span>
                  <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${bar}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-6 text-right shrink-0">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top 5 by demand */}
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-gray-300">Top Ideas by Demand</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl divide-y divide-gray-800">
            {topByDemand.map((idea, i) => (
              <div key={idea.id} className="px-4 py-3 flex items-center gap-4">
                <span className="text-gray-600 text-xs font-bold w-4 shrink-0">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{idea.name}</p>
                  <p className="text-gray-500 text-xs truncate">{idea.category}</p>
                </div>
                <DemandStars rating={getDemandRating(idea)} />
                <span className="text-gray-400 text-xs shrink-0">£{idea.pricingRange.min}–£{idea.pricingRange.max}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
