import { useState } from "react";
import DigitalDownloadIdeas from "./components/DigitalDownloadIdeas";
import Dashboard from "./components/Dashboard";

type Tab = "browse" | "dashboard";

function App() {
  const [tab, setTab] = useState<Tab>("browse");

  return (
    <div className="min-h-screen bg-gray-950">
      <header className="sticky top-0 z-40 bg-gray-950/90 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="text-white font-bold text-lg tracking-tight">
            Creator <span className="text-violet-400">Dash</span>
          </span>

          <nav className="flex items-center gap-1">
            {(["browse", "dashboard"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  tab === t
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {t === "browse" ? "Browse" : "Dashboard"}
              </button>
            ))}
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
