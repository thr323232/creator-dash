import { useMemo, useState } from "react";
import { digitalDownloadIdeas } from "../data/digitalDownloadIdeas";
import { STAGES, useTracker, type Stage } from "../data/tracker";
import { IdeaDetail } from "./DigitalDownloadIdeas";

function StatCard({ label, value, accent, sub }: { label: string; value: string | number; accent: string; sub?: string }) {
  return (
    <div className="bg-[#160028] border border-purple-900 rounded-xl p-5 flex flex-col gap-1">
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

export default function Dashboard() {
  const { tracker, setStage, setSales } = useTracker();
  const [detailIdea, setDetailIdea] = useState<(typeof digitalDownloadIdeas)[number] | null>(null);

  const trackerEntries = useMemo(() => Object.entries(tracker), [tracker]);
  const totalTracked = trackerEntries.length;

  const ideaById = useMemo(() => {
    const map: Record<string, (typeof digitalDownloadIdeas)[number]> = {};
    for (const idea of digitalDownloadIdeas) map[idea.id] = idea;
    return map;
  }, []);

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
    const groups: Record<Stage, typeof digitalDownloadIdeas> = {
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

  const inProgress = (stageCounts["creating"] ?? 0) + (stageCounts["listed"] ?? 0);
  const earning = stageCounts["earning"] ?? 0;
  const saved = stageCounts["saved"] ?? 0;
  const creating = stageCounts["creating"] ?? 0;
  const listed = stageCounts["listed"] ?? 0;

  const nudge = useMemo((): { emoji: string; message: string } => {
    if (totalTracked === 0)
      return { emoji: "👆", message: "Browse ideas and save one to start tracking your pipeline." };
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

  const earningIdeas = ideasByStage["earning"];
  const totalEstRevenue = Math.round(estRevenue);

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
          <StatCard label="Tracked"      value={totalTracked}                 accent="text-white"      sub="ideas in pipeline" />
          <StatCard label="In Progress"  value={inProgress}                   accent="text-amber-400"  sub="creating or listed" />
          <StatCard label="Earning"      value={earning}                      accent="text-green-400"  sub="active listings" />
          <StatCard label="Est. Revenue" value={`£${totalEstRevenue}`}        accent="text-green-300"  sub={`${totalSales} units sold`} />
        </div>

        {/* Nudge */}
        <div className="bg-[#160028] border border-purple-800 rounded-xl px-5 py-3 flex items-center gap-3">
          <span className="text-xl shrink-0">{nudge.emoji}</span>
          <p className="text-purple-200 text-sm">{nudge.message}</p>
        </div>

        {/* Pipeline */}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-base font-bold text-purple-100">Pipeline</h2>
            <p className="text-purple-500 text-xs mt-0.5">Click any idea to open its workflow and update progress</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STAGES.map((s) => {
              const ideas = ideasByStage[s.key];
              return (
                <div
                  key={s.key}
                  className={`${stageBg[s.key]} border ${stageRingColor[s.key]} rounded-xl flex flex-col min-h-[160px]`}
                >
                  {/* Column header */}
                  <div className={`px-3 py-2.5 border-b ${stageRingColor[s.key]} flex items-center gap-2`}>
                    <span className={`text-sm font-bold ${s.color}`}>{s.label}</span>
                    <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-full border ${s.color} ${s.bg} ${s.border}`}>
                      {ideas.length}
                    </span>
                  </div>

                  {/* Idea rows */}
                  <div className="flex flex-col flex-1 divide-y divide-white/5">
                    {ideas.length === 0 ? (
                      <p className="text-purple-800 text-xs px-3 py-4 text-center">Nothing here yet</p>
                    ) : (
                      ideas.map((idea) => {
                        const sales = salesMap[idea.id] ?? 0;
                        const avgPrice = (idea.pricingRange.min + idea.pricingRange.max) / 2;
                        const ideaRevenue = Math.round(sales * avgPrice);
                        return (
                          <button
                            key={idea.id}
                            onClick={() => setDetailIdea(idea)}
                            className="w-full text-left px-3 py-2.5 hover:bg-white/5 transition-colors flex flex-col gap-1"
                          >
                            <span className="text-white text-xs font-medium leading-snug line-clamp-2">
                              {idea.name}
                            </span>
                            {s.key === "creating" && (
                              <span className="text-amber-500/80 text-xs">
                                {idea.launchChecklist.length} checklist items
                              </span>
                            )}
                            {s.key === "listed" && sales === 0 && (
                              <span className="text-blue-400/70 text-xs">log sales →</span>
                            )}
                            {s.key === "earning" && (
                              <span className="text-green-400 text-xs font-semibold">
                                {sales > 0 ? `${sales} sold · £${ideaRevenue} est.` : "log sales →"}
                              </span>
                            )}
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sales Tracker — only when earning ideas exist */}
        {earningIdeas.length > 0 && (
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-base font-bold text-purple-100">Sales Tracker</h2>
              <p className="text-purple-500 text-xs mt-0.5">Log units sold per listing to track your estimated revenue</p>
            </div>

            <div className="bg-[#160028] border border-purple-900 rounded-xl overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-2.5 border-b border-purple-900 text-xs text-purple-500 font-semibold uppercase tracking-wide">
                <span>Listing</span>
                <span className="text-right">Units sold</span>
                <span className="text-right w-24">Est. revenue</span>
              </div>

              {/* Rows */}
              {earningIdeas.map((idea) => {
                const sales = salesMap[idea.id] ?? 0;
                const avgPrice = (idea.pricingRange.min + idea.pricingRange.max) / 2;
                const revenue = Math.round(sales * avgPrice);
                return (
                  <div
                    key={idea.id}
                    className="grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-3 border-b border-purple-900/50 items-center last:border-0"
                  >
                    <button
                      onClick={() => setDetailIdea(idea)}
                      className="text-white text-sm font-medium text-left hover:text-purple-300 transition-colors truncate"
                    >
                      {idea.name}
                    </button>
                    <input
                      type="number"
                      min={0}
                      step={1}
                      value={salesMap[idea.id] ?? ""}
                      placeholder="0"
                      onChange={(e) => {
                        const n = parseInt(e.target.value, 10);
                        setSales(idea.id, isNaN(n) ? 0 : Math.max(0, n));
                      }}
                      className="w-20 bg-[#0d0118] border border-purple-800 rounded-lg px-3 py-1.5 text-sm text-white placeholder-purple-700 text-right focus:outline-none focus:border-green-500"
                    />
                    <span className={`text-sm font-bold text-right w-24 ${sales > 0 ? "text-green-400" : "text-purple-700"}`}>
                      {sales > 0 ? `£${revenue}` : "—"}
                    </span>
                  </div>
                );
              })}

              {/* Total row */}
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-3 bg-[#0d0118] items-center">
                <span className="text-purple-400 text-sm font-semibold">Total</span>
                <span className="text-white text-sm font-bold text-right">{totalSales} units</span>
                <span className="text-green-300 text-sm font-bold text-right w-24">£{totalEstRevenue}</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Idea detail modal */}
      {detailIdea && (
        <IdeaDetail
          idea={detailIdea}
          entry={tracker[detailIdea.id]}
          onStageChange={(stage) => {
            setStage(detailIdea.id, stage);
            if (stage === null) setDetailIdea(null);
          }}
          onSalesChange={(sales) => setSales(detailIdea.id, sales)}
          onClose={() => setDetailIdea(null)}
        />
      )}
    </div>
  );
}
