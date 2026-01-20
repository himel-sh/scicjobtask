import Link from "next/link";
import type { Item } from "@/lib/api";

export function ItemCard({ item }: { item: Item }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="aspect-[16/10] w-full bg-neutral-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            item.image ||
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80"
          }
          alt={item.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-1 font-semibold">{item.name}</h3>
          <span className="shrink-0 rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700">
            ${item.price.toFixed(2)}
          </span>
        </div>

        <p className="line-clamp-2 text-sm text-neutral-600">
          {item.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-neutral-500">
            {item.category || "General"}
          </span>
          <Link
            href={`/items/${item.id}`}
            className="text-sm font-medium underline underline-offset-4"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

