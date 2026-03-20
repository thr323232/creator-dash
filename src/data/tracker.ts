import { useState, useEffect, useRef } from "react";
import type { Category } from "./digitalDownloadIdeas";
import { supabase } from "../lib/supabase";

export const CATEGORIES: Category[] = [
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

export type Stage = "saved" | "creating" | "listed" | "earning";

export const STAGES: { key: Stage; label: string; color: string; bg: string; border: string }[] = [
  { key: "saved",    label: "Saved",    color: "text-purple-200",  bg: "bg-[#3b006e]",    border: "border-purple-700" },
  { key: "creating", label: "Creating", color: "text-amber-300", bg: "bg-amber-500/20", border: "border-amber-500/40" },
  { key: "listed",   label: "Listed",   color: "text-blue-300",  bg: "bg-blue-500/20",  border: "border-blue-500/40" },
  { key: "earning",  label: "Earning",  color: "text-green-300", bg: "bg-green-500/20", border: "border-green-500/40" },
];

export type TrackerEntry = { stage: Stage; sales?: number; movedAt?: number };
export type TrackerData = Record<string, TrackerEntry>;

export const STORAGE_KEY = "creator-dash-tracker";

function parseTracker(raw: string | null): TrackerData {
  try {
    const parsed = JSON.parse(raw ?? "{}");
    const result: TrackerData = {};
    for (const [id, val] of Object.entries(parsed)) {
      result[id] = typeof val === "string"
        ? { stage: val as Stage }
        : (val as TrackerEntry);
    }
    return result;
  } catch {
    return {};
  }
}

export function useTracker() {
  const [tracker, setTracker] = useState<TrackerData>(() =>
    parseTracker(localStorage.getItem(STORAGE_KEY))
  );
  // skip the initial sync on mount so we don't overwrite cloud with empty local
  const initialised = useRef(false);

  // On mount: fetch cloud data and merge (cloud wins if user_data exists)
  useEffect(() => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) { initialised.current = true; return; }
      const { data } = await supabase
        .from("user_data")
        .select("tracker")
        .eq("user_id", user.id)
        .single();
      if (data?.tracker && Object.keys(data.tracker as object).length > 0) {
        const cloud = data.tracker as TrackerData;
        setTracker(cloud);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cloud));
      }
      initialised.current = true;
    });
  }, []);

  // Sync to localStorage + debounced cloud upsert on every change
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!initialised.current) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tracker));

    if (syncTimer.current) clearTimeout(syncTimer.current);
    syncTimer.current = setTimeout(async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      await supabase.from("user_data").upsert(
        { user_id: user.id, tracker, updated_at: new Date().toISOString() },
        { onConflict: "user_id" }
      );
    }, 1500);
  }, [tracker]);

  const setStage = (id: string, stage: Stage | null) => {
    setTracker((prev) => {
      const next = { ...prev };
      if (stage === null) {
        delete next[id];
      } else {
        next[id] = { ...next[id], stage, movedAt: Date.now() };
      }
      return next;
    });
  };

  const setSales = (id: string, sales: number) => {
    setTracker((prev) => {
      const entry = prev[id];
      if (!entry) return prev;
      return { ...prev, [id]: { ...entry, sales } };
    });
  };

  return { tracker, setStage, setSales };
}
