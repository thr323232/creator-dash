import { useMemo } from "react";
import { digitalDownloadIdeas } from "../data/digitalDownloadIdeas";
import { getDemandRating, CATEGORY_BAR } from "../data/ideaUtils";
import { CATEGORIES, STAGES, STORAGE_KEY, DemandStars, type Stage, type TrackerData } from "./DigitalDownloadIdeas";

function readTracker(): TrackerData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = JSON.parse(raw ?? "{}");
    const result: TrackerData = {};
    for (const [id, val] of Object.entries(parsed)) {
      result[id] = typeof val === "string"
        ? { stage: val as Stage }
        : (val as TrackerData[string]);
    }
    return result;
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

  const trackerEntries = Object.entries(tracker);
  const totalTracked = trackerEntries.length;

  const stageCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const [, entry] of trackerEntries) {
      counts[entry.stage] = (counts[entry.stage] ?? 0) + 1;
    }
    return counts;
  }, [trackerEntries]);

  const inProgress = (stageCounts["creating"] ?? 0) + (stageCounts["listed"] ?? 0);
  const earning = stageCounts["earning"] ?? 0;

  // Build a lookup: ideaId → category
  const ideaById = useMemo(() => {
    const map: Record<string, (typeof digitalDownloadIdeas)[number]> = {};
    for (const idea of digitalDownloadIdeas) map[idea.id] = idea;
    return map;
  }, []);

  // Category idea counts + tracker stats per category
  const categoryStats = useMemo(() => {
    const counts: Record<string, number> = {};
    const creating: Record<string, number> = {};
    const listed: Record<string, number> = {};
    const earningSales: Record<string, number> = {};   // sum of sales per category
    const earningCount: Record<string, number> = {};

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

  // Top ideas: sort by sales (desc), pad with high-demand if needed
  const topIdeas = useMemo(() => {
    const withSales = digitalDownloadIdeas
      .filter((i) => (tracker[i.id]?.sales ?? 0) > 0)
      .sort((a, b) => (tracker[b.id]?.sales ?? 0) - (tracker[a.id]?.sales ?? 0));

    const withSalesIds = new Set(withSales.map((i) => i.id));
    const padded = [...digitalDownloadIdeas]
      .filter((i) => !withSalesIds.has(i.id))
      .sort((a, b) => getDemandRating(b) - getDemandRating(a));

    return [...withSales, ...padded].slice(0, 5);
  }, [tracker]);

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
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex flex-col gap-4">
            {categoryStats.map(({ category, count, creating, listed, earningCount, earningSales }) => {
              const pct = (count / maxCategoryCount) * 100;
              const bar = CATEGORY_BAR[category] ?? "bg-gray-600";
              const hasActivity = creating > 0 || listed > 0 || earningCount > 0;
              return (
                <div key={category} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-44 shrink-0 truncate">{category}</span>
                    <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${bar}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-6 text-right shrink-0">{count}</span>
                  </div>
                  {hasActivity && (
                    <div className="flex items-center gap-3 pl-[11.5rem]">
                      <div className="flex items-center gap-2 text-[11px]">
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

        {/* Top 5 ideas */}
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="text-sm font-semibold text-gray-300">Top Ideas</h2>
            <p className="text-gray-600 text-xs mt-0.5">By units sold · padded by demand rating</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl divide-y divide-gray-800">
            {topIdeas.map((idea, i) => {
              const sales = tracker[idea.id]?.sales ?? 0;
              return (
                <div key={idea.id} className="px-4 py-3 flex items-center gap-4">
                  <span className="text-gray-600 text-xs font-bold w-4 shrink-0">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">{idea.name}</p>
                    <p className="text-gray-500 text-xs truncate">{idea.category}</p>
                  </div>
                  {sales > 0 ? (
                    <span className="text-xs font-semibold text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full shrink-0">
                      {sales} sold
                    </span>
                  ) : (
                    <DemandStars rating={getDemandRating(idea)} />
                  )}
                  <span className="text-gray-400 text-xs shrink-0">£{idea.pricingRange.min}–£{idea.pricingRange.max}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
