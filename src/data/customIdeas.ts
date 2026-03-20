import { useEffect, useState } from "react";
import type { DigitalDownloadIdea } from "./digitalDownloadIdeas";
import type { MarketingPrompts } from "./marketingPrompts";

export interface CustomIdeaRecord {
  idea: DigitalDownloadIdea;
  workflowGuide?: { steps: string[] };
  marketingPrompts?: MarketingPrompts;
}

const STORAGE_KEY = "creator-dash-custom-ideas";

function loadRecords(): CustomIdeaRecord[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function useCustomIdeas() {
  const [records, setRecords] = useState<CustomIdeaRecord[]>(loadRecords);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }, [records]);

  const addCustomIdea = (record: CustomIdeaRecord) =>
    setRecords((prev) => [...prev, record]);

  const removeCustomIdea = (id: string) =>
    setRecords((prev) => prev.filter((r) => r.idea.id !== id));

  return { records, addCustomIdea, removeCustomIdea };
}
