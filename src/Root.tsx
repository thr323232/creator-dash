import { useState, useEffect } from "react";
import App from "./App.tsx";
import AuthScreen from "./components/AuthScreen.tsx";
import { supabase } from "./lib/supabase.ts";
import type { Session } from "@supabase/supabase-js";

export default function Root() {
  const [session, setSession] = useState<Session | null | "loading">("loading");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (session === "loading") {
    return (
      <div className="min-h-screen bg-[#0d0118] flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-purple-600 border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!session) return <AuthScreen />;

  return <App onSignOut={() => supabase.auth.signOut()} />;
}
