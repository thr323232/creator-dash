import DigitalDownloadIdeas from "./components/DigitalDownloadIdeas";

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <header className="sticky top-0 z-40 bg-gray-950/90 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center">
          <span className="text-white font-bold text-lg tracking-tight">
            Creator <span className="text-violet-400">Dash</span>
          </span>
        </div>
      </header>

      <main>
        <DigitalDownloadIdeas />
      </main>
    </div>
  );
}

export default App;
