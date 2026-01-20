"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function AddItemPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/items", {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name,
          description,
          price: Number(price),
          image,
          category,
        }),
      });

      if (res.status === 401) {
        toast.error("You must be logged in to add an item.");
        router.push("/login?next=/add-item");
        return;
      }

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || "Failed to create item");
      }

      toast.success("Item created successfully");
      router.push("/items");
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to create item");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-xl space-y-2">
      <h1 className="text-2xl font-semibold tracking-tight">Add Item</h1>
      <p className="text-sm text-neutral-600">
        Protected page — you'll be redirected to login if not authenticated.
      </p>

      <form
        onSubmit={onSubmit}
        className="mt-4 space-y-4 rounded-2xl border p-6"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-sm font-medium">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border px-3 py-2 text-sm"
              required
            />
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="text-sm font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-28 w-full rounded-xl border px-3 py-2 text-sm"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Price</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full rounded-xl border px-3 py-2 text-sm"
              inputMode="decimal"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border px-3 py-2 text-sm"
              placeholder="e.g. Audio"
            />
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="text-sm font-medium">Image URL</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full rounded-xl border px-3 py-2 text-sm"
              placeholder="https://..."
            />
          </div>
        </div>

        <button
          disabled={loading}
          className="w-full rounded-xl bg-black px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60"
          type="submit"
        >
          {loading ? "Creating..." : "Create item"}
        </button>
      </form>
    </div>
  );
}
