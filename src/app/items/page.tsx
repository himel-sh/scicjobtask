"use client";

import { useEffect, useState } from "react";
import { ItemCard } from "@/components/ItemCard";
import type { Item } from "@/lib/api";

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadItems() {
      try {
        setLoading(true);
        const res = await fetch("/api/items");
        if (!res.ok) throw new Error("Failed to fetch items");
        const data = await res.json();
        setItems(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load items");
      } finally {
        setLoading(false);
      }
    }

    loadItems();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Items</h1>
          <p className="text-sm text-neutral-600">
            Public list of available products.
          </p>
        </div>
      </div>

      {loading && (
        <div className="flex justify-center py-12">
          <p className="text-neutral-600">Loading items...</p>
        </div>
      )}

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {!loading && !error && items.length === 0 && (
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <p className="text-neutral-600">No items available yet.</p>
        </div>
      )}

      {!loading && !error && items.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
