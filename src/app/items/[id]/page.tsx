"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Item } from "@/lib/api";

export default function ItemDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<string>("");

  useEffect(() => {
    params.then((p) => setId(p.id));
  }, [params]);

  useEffect(() => {
    if (!id) return;

    async function loadItem() {
      try {
        setLoading(true);
        const res = await fetch(`/api/items/${id}`);
        if (!res.ok) throw new Error("Item not found");
        const data = await res.json();
        setItem(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load item");
        setItem(null);
      } finally {
        setLoading(false);
      }
    }

    loadItem();
  }, [id]);

  if (loading) {
    return (
      <div className="space-y-6">
        <Link
          href="/items"
          className="text-sm text-neutral-700 underline underline-offset-4 hover:text-neutral-900"
        >
          ← Back to items
        </Link>
        <div className="flex justify-center py-12">
          <p className="text-neutral-700">Loading item...</p>
        </div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="space-y-6">
        <Link
          href="/items"
          className="text-sm text-neutral-700 underline underline-offset-4 hover:text-neutral-900"
        >
          ← Back to items
        </Link>
        <div className="rounded-2xl border border-red-300 bg-red-50 p-6">
          <p className="text-red-900 font-medium">
            {error || "Item not found"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/items"
          className="text-sm text-neutral-700 underline underline-offset-4 hover:text-neutral-900"
        >
          ← Back to items
        </Link>
        <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-800">
          {item.category || "General"}
        </span>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border bg-neutral-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              item.image ||
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80"
            }
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
            {item.name}
          </h1>
          <p className="text-neutral-700">{item.description}</p>
          <div className="rounded-2xl border p-5">
            <p className="text-sm text-neutral-700">Price</p>
            <p className="text-2xl font-semibold text-neutral-900">
              ${item.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
