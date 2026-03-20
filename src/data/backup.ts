import { STORAGE_KEY as TRACKER_KEY } from "./tracker";

const CUSTOM_IDEAS_KEY = "creator-dash-custom-ideas";
export const LAST_BACKUP_KEY = "creator-dash-last-backup";

export interface BackupPayload {
  version: 1;
  exportedAt: string;
  tracker: Record<string, unknown>;
  customIdeas: unknown[];
}

export function exportBackup(): void {
  const tracker    = JSON.parse(localStorage.getItem(TRACKER_KEY)    ?? "{}");
  const customIdeas = JSON.parse(localStorage.getItem(CUSTOM_IDEAS_KEY) ?? "[]");

  const payload: BackupPayload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    tracker,
    customIdeas,
  };

  const date = new Date().toISOString().slice(0, 10);
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = `creator-dash-backup-${date}.json`;
  a.click();
  URL.revokeObjectURL(url);

  localStorage.setItem(LAST_BACKUP_KEY, String(Date.now()));
}

export async function importBackup(file: File): Promise<void> {
  const text    = await file.text();
  const payload = JSON.parse(text) as BackupPayload;

  if (payload.version !== 1) throw new Error("Unrecognised backup format.");

  localStorage.setItem(TRACKER_KEY,      JSON.stringify(payload.tracker));
  localStorage.setItem(CUSTOM_IDEAS_KEY, JSON.stringify(payload.customIdeas));
  localStorage.setItem(LAST_BACKUP_KEY,  String(Date.now()));

  window.location.reload();
}

export function daysSinceBackup(): number | null {
  const raw = localStorage.getItem(LAST_BACKUP_KEY);
  if (!raw) return null;
  return Math.floor((Date.now() - Number(raw)) / 86_400_000);
}
