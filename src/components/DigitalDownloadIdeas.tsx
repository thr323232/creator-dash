import { useState, useMemo } from "react";
import { digitalDownloadIdeas, type DigitalDownloadIdea, type Category } from "../data/digitalDownloadIdeas";

const CATEGORIES: Category[] = [
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

function DemandStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-600"}>
          ★
        </span>
      ))}
    </div>
  );
}

function IdeaCard({ idea, onClick }: { idea: DigitalDownloadIdea; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-left bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-violet-500/50 hover:bg-gray-800/60 transition-all duration-200 flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-white font-semibold text-sm leading-snug">{idea.name}</h3>
        {idea.trending && (
          <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/30">
            Trending
          </span>
        )}
      </div>

      <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{idea.description}</p>

      <div className="flex items-center gap-2 flex-wrap">
        <span className={`text-xs px-2 py-0.5 rounded-full border ${difficultyColor[idea.difficulty]}`}>
          {idea.difficulty}
        </span>
        <DemandStars rating={idea.demandRating} />
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>${idea.pricingRange.min}–${idea.pricingRange.max}</span>
        <span>{idea.estimatedCreationTime}</span>
      </div>
    </button>
  );
}

function IdeaDetail({ idea, onClose }: { idea: DigitalDownloadIdea; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={onClose}>
      <div
        className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 flex flex-col gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-white text-xl font-bold">{idea.name}</h2>
            <p className="text-violet-400 text-sm mt-1">{idea.category}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white text-2xl leading-none">
            ×
          </button>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed">{idea.description}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Stat label="Price Range" value={`$${idea.pricingRange.min}–$${idea.pricingRange.max}`} />
          <Stat label="Time" value={idea.estimatedCreationTime} />
          <Stat label="Difficulty" value={idea.difficulty} />
          <Stat label="Demand" value={<DemandStars rating={idea.demandRating} />} />
        </div>

        <Section title="Target Niches">
          <div className="flex flex-wrap gap-2">
            {idea.niches.map((n) => (
              <span key={n} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                {n}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Tools Needed">
          <div className="flex flex-wrap gap-2">
            {idea.toolsNeeded.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-violet-900/30 text-violet-300 border border-violet-700/30">
                {t}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Launch Checklist">
          <ul className="flex flex-col gap-2">
            {idea.launchChecklist.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-300">
                <span className="shrink-0 w-5 h-5 rounded-full bg-violet-500/20 text-violet-400 text-xs flex items-center justify-center font-bold mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="bg-gray-800 rounded-lg p-3 flex flex-col gap-1">
      <span className="text-gray-500 text-xs">{label}</span>
      <span className="text-white text-sm font-medium capitalize">{value}</span>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{title}</h4>
      {children}
    </div>
  );
}

export default function DigitalDownloadIdeas() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [trendingOnly, setTrendingOnly] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState<DigitalDownloadIdea | null>(null);

  const filtered = useMemo(() => {
    return digitalDownloadIdeas.filter((idea) => {
      if (selectedCategory !== "All" && idea.category !== selectedCategory) return false;
      if (selectedDifficulty !== "All" && idea.difficulty !== selectedDifficulty) return false;
      if (trendingOnly && !idea.trending) return false;
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
  }, [search, selectedCategory, selectedDifficulty, trendingOnly]);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">Digital Download Ideas</h1>
          <p className="text-gray-400 mt-1">
            {digitalDownloadIdeas.length} product ideas across {CATEGORIES.length} categories
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Search by name, description, or niche..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
          />

          <div className="flex flex-wrap gap-2 items-center">
            {/* Category filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as Category | "All")}
              className="bg-gray-900 border border-gray-700 text-sm text-white rounded-lg px-3 py-2 focus:outline-none focus:border-violet-500"
            >
              <option value="All">All Categories</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {/* Difficulty filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-gray-900 border border-gray-700 text-sm text-white rounded-lg px-3 py-2 focus:outline-none focus:border-violet-500"
            >
              <option value="All">All Difficulties</option>
              {DIFFICULTIES.map((d) => (
                <option key={d} value={d}>{d.charAt(0).toUpperCase() + d.slice(1)}</option>
              ))}
            </select>

            {/* Trending toggle */}
            <button
              onClick={() => setTrendingOnly((v) => !v)}
              className={`text-sm px-3 py-2 rounded-lg border transition-colors ${
                trendingOnly
                  ? "bg-violet-600 border-violet-500 text-white"
                  : "bg-gray-900 border-gray-700 text-gray-400 hover:text-white"
              }`}
            >
              Trending Only
            </button>

            <span className="text-gray-500 text-sm ml-auto">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No ideas match your filters.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} onClick={() => setSelectedIdea(idea)} />
            ))}
          </div>
        )}
      </div>

      {/* Detail modal */}
      {selectedIdea && (
        <IdeaDetail idea={selectedIdea} onClose={() => setSelectedIdea(null)} />
      )}
    </div>
  );
}
