"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const nextPath = useMemo(() => params.get("next") || "/items", [params]);

  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("password123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || "Login failed");
      }
      router.push(nextPath);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
      <p className="mt-1 text-sm text-neutral-600">
        Use the mock credentials: <b>admin@example.com</b> / <b>password123</b>
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4 rounded-2xl border p-6">
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border px-3 py-2 text-sm"
            type="email"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border px-3 py-2 text-sm"
            type="password"
            required
          />
        </div>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        <button
          disabled={loading}
          className="w-full rounded-xl bg-black px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60"
          type="submit"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}

