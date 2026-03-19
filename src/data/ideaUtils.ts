import type { DigitalDownloadIdea, Category } from "./digitalDownloadIdeas";

export const CATEGORY_ACCENT: Record<Category, string> = {
  "Planners & Organizers":      "border-t-amber-500",
  "Wall Art & Prints":          "border-t-pink-500",
  "Social Media Templates":     "border-t-sky-500",
  "Business & Branding":        "border-t-amber-500",
  "Education & Kids":           "border-t-green-500",
  "Journals & Workbooks":       "border-t-purple-500",
  "Notion & Digital Templates": "border-t-cyan-500",
  "Photo & Design Assets":      "border-t-rose-500",
  "Events & Celebrations":      "border-t-orange-500",
  "Spreadsheets & Trackers":    "border-t-teal-500",
};

// Dot colour used for category labels (matches accent bar colour)
export const CATEGORY_DOT: Record<Category, string> = {
  "Planners & Organizers":      "bg-amber-500",
  "Wall Art & Prints":          "bg-pink-500",
  "Social Media Templates":     "bg-sky-500",
  "Business & Branding":        "bg-amber-500",
  "Education & Kids":           "bg-green-500",
  "Journals & Workbooks":       "bg-purple-500",
  "Notion & Digital Templates": "bg-cyan-500",
  "Photo & Design Assets":      "bg-rose-500",
  "Events & Celebrations":      "bg-orange-500",
  "Spreadsheets & Trackers":    "bg-teal-500",
};

// Bar fill colour for dashboard category chart
export const CATEGORY_BAR: Record<Category, string> = {
  "Planners & Organizers":      "bg-amber-500",
  "Wall Art & Prints":          "bg-pink-500",
  "Social Media Templates":     "bg-sky-500",
  "Business & Branding":        "bg-amber-500",
  "Education & Kids":           "bg-green-500",
  "Journals & Workbooks":       "bg-purple-500",
  "Notion & Digital Templates": "bg-cyan-500",
  "Photo & Design Assets":      "bg-rose-500",
  "Events & Celebrations":      "bg-orange-500",
  "Spreadsheets & Trackers":    "bg-teal-500",
};

const TOOL_SCORES: Record<string, number> = {
  "canva": 0, "google docs": 0, "google slides": 0, "powerpoint": 0, "word": 0, "google forms": 0,
  "notion": 1, "figma": 1, "google sheets": 1, "excel": 1, "keynote": 1, "canva pro": 1,
  "adobe illustrator": 2, "adobe indesign": 2, "adobe photoshop": 2, "adobe premiere": 2,
  "adobe after effects": 2, "procreate": 2, "davinci resolve": 2, "final cut pro": 2,
  "lightroom": 2, "adobe lightroom": 2,
};

export function getDifficulty(idea: DigitalDownloadIdea): "beginner" | "intermediate" | "advanced" {
  const toolScore = idea.toolsNeeded.reduce((max, tool) => {
    const score = TOOL_SCORES[tool.toLowerCase()] ?? 0;
    return Math.max(max, score);
  }, 0);

  const numbers = idea.estimatedCreationTime.match(/\d+/g)?.map(Number) ?? [4];
  const avgTime = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  const timeScore = avgTime < 4 ? 0 : avgTime <= 8 ? 1 : 2;

  const total = toolScore + timeScore;
  if (total <= 1) return "beginner";
  if (total <= 3) return "intermediate";
  return "advanced";
}

export function getDemandRating(idea: DigitalDownloadIdea): 1 | 2 | 3 | 4 | 5 {
  // More niches = broader appeal
  const nicheScore = idea.niches.length <= 2 ? 1 : idea.niches.length <= 4 ? 2 : 3;

  // Higher avg price = more established / proven market
  const avgPrice = (idea.pricingRange.min + idea.pricingRange.max) / 2;
  const priceScore = avgPrice < 8 ? 1 : avgPrice <= 18 ? 2 : 3;

  // Trending products have validated demand
  const trendBonus = idea.trending ? 1 : 0;

  const total = nicheScore + priceScore + trendBonus;
  if (total <= 2) return 1;
  if (total === 3) return 2;
  if (total === 4) return 3;
  if (total <= 6) return 4;
  return 5;
}
