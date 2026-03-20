import { useState } from "react";
import DigitalDownloadIdeas from "./components/DigitalDownloadIdeas";
import Dashboard from "./components/Dashboard";

type Tab = "browse" | "dashboard";

function App({ onSignOut }: { onSignOut: () => void }) {
  const [tab, setTab] = useState<Tab>("browse");

  return (
    <div className="min-h-screen bg-[#0d0118]">
      <header className="sticky top-0 z-40 bg-[#0d0118]/90 backdrop-blur border-b border-purple-900">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="text-white font-bold text-lg tracking-tight">
            Creator <span className="text-amber-400">Dash</span>
          </span>

          <nav className="flex items-center gap-1">
            {(["browse", "dashboard"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  tab === t
                    ? "bg-[#2a0050] text-white"
                    : "text-purple-300 hover:text-white"
                }`}
              >
                {t === "browse" ? "Browse" : "Dashboard"}
              </button>
            ))}
            <button
              onClick={onSignOut}
              className="ml-2 px-3 py-1.5 rounded-lg text-xs font-medium text-purple-600 hover:text-purple-400 transition-colors border border-purple-900 hover:border-purple-700"
              title="Sign out"
            >
              Sign out
            </button>
          </nav>
        </div>
      </header>

      <main>
        {tab === "browse" ? <DigitalDownloadIdeas /> : <Dashboard />}
      </main>
    </div>
  );
}

export default App;
