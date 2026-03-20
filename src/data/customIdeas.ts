import { useEffect, useRef, useState } from "react";
import type { DigitalDownloadIdea } from "./digitalDownloadIdeas";
import type { MarketingPrompts } from "./marketingPrompts";
import { supabase } from "../lib/supabase";

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
  const initialised = useRef(false);

  // On mount: fetch cloud data and merge (cloud wins if non-empty)
  useEffect(() => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) { initialised.current = true; return; }
      const { data } = await supabase
        .from("user_data")
        .select("custom_ideas")
        .eq("user_id", user.id)
        .single();
      if (data?.custom_ideas && (data.custom_ideas as CustomIdeaRecord[]).length > 0) {
        const cloud = data.custom_ideas as CustomIdeaRecord[];
        setRecords(cloud);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cloud));
      }
      initialised.current = true;
    });
  }, []);

  // Sync to localStorage + debounced cloud upsert
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!initialised.current) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));

    if (syncTimer.current) clearTimeout(syncTimer.current);
    syncTimer.current = setTimeout(async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      await supabase.from("user_data").upsert(
        { user_id: user.id, custom_ideas: records, updated_at: new Date().toISOString() },
        { onConflict: "user_id" }
      );
    }, 1500);
  }, [records]);

  const addCustomIdea = (record: CustomIdeaRecord) =>
    setRecords((prev) => [...prev, record]);

  const removeCustomIdea = (id: string) =>
    setRecords((prev) => prev.filter((r) => r.idea.id !== id));

  return { records, addCustomIdea, removeCustomIdea };
}
