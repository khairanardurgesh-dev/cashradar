"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [status, setStatus] = useState("Testing Supabase...");

  useEffect(() => {
    async function testConnection() {
      const { error } = await supabase.auth.getSession();

      if (error) {
        setStatus(`Supabase error: ${error.message}`);
        return;
      }

      setStatus("Supabase connection successful");
    }

    testConnection();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">CashRadar</h1>
        <p className="mt-4">{status}</p>
      </div>
    </main>
  );
}