import { useState } from "react";
import { supabase } from "../lib/supabase";

type Tab = "signin" | "signup";

export default function AuthScreen() {
  const [tab, setTab]         = useState<Tab>("signin");
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    if (tab === "signup") {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setError(error.message);
      } else {
        setMessage("Check your email for a confirmation link.");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
      // on success onAuthStateChange in main.tsx handles the rest
    }

    setLoading(false);
  }

  async function handleForgotPassword() {
    if (!email.trim()) { setError("Enter your email address first."); return; }
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    setLoading(false);
    if (error) { setError(error.message); } else { setMessage("Password reset email sent."); }
  }

  return (
    <div className="min-h-screen bg-[#0d0118] flex items-center justify-center px-4">
      <div className="w-full max-w-sm flex flex-col gap-8">

        {/* Logo / title */}
        <div className="text-center">
          <div className="text-4xl mb-3">✦</div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Creator Dash</h1>
          <p className="text-purple-400 text-sm mt-1">Your digital download pipeline</p>
        </div>

        {/* Card */}
        <div className="bg-[#160028] border border-purple-900 rounded-2xl p-6 flex flex-col gap-5">

          {/* Tab switcher */}
          <div className="flex gap-1 bg-[#0d0118] rounded-xl p-1">
            {(["signin", "signup"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); setError(null); setMessage(null); }}
                className={`flex-1 text-sm font-semibold py-2 rounded-lg transition-colors ${
                  tab === t
                    ? "bg-purple-600 text-white"
                    : "text-purple-500 hover:text-purple-300"
                }`}
              >
                {t === "signin" ? "Sign in" : "Create account"}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-purple-400 text-xs font-medium">Email</label>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-[#0d0118] border border-purple-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-purple-700 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-purple-400 text-xs font-medium">Password</label>
              <input
                type="password"
                autoComplete={tab === "signup" ? "new-password" : "current-password"}
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#0d0118] border border-purple-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-purple-700 focus:outline-none focus:border-purple-500"
              />
            </div>

            {error && (
              <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}
            {message && (
              <p className="text-green-400 text-xs bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white text-sm font-semibold transition-colors mt-1"
            >
              {loading ? "…" : tab === "signin" ? "Sign in" : "Create account"}
            </button>
          </form>

          {/* Forgot password */}
          {tab === "signin" && (
            <button
              onClick={handleForgotPassword}
              disabled={loading}
              className="text-purple-600 hover:text-purple-400 text-xs text-center transition-colors"
            >
              Forgot password?
            </button>
          )}
        </div>

        <p className="text-purple-800 text-xs text-center">
          Your data is encrypted and stored securely via Supabase.
        </p>
      </div>
    </div>
  );
}
