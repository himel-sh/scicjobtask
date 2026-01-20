export type Item = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category?: string;
};

// In-memory database (shared across requests)
let itemsDb: Item[] = [
  {
    id: "item_1",
    name: "Wireless Headphones",
    description:
      "Comfortable over-ear wireless headphones with rich bass and 30-hour battery life.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1518441902117-f0a80d6d7f9b?auto=format&fit=crop&w=1200&q=80",
    category: "Audio",
  },
  {
    id: "item_2",
    name: "Minimal Desk Lamp",
    description:
      "A clean, minimal LED desk lamp with adjustable brightness and color temperature.",
    price: 34.5,
    image:
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1200&q=80",
    category: "Home",
  },
  {
    id: "item_3",
    name: "Smart Water Bottle",
    description:
      "Tracks hydration and gently reminds you when it's time to drink.",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1526401485004-2aa7d0f35c7c?auto=format&fit=crop&w=1200&q=80",
    category: "Wellness",
  },
  {
    id: "item_4",
    name: "Travel Backpack",
    description:
      "Carry-on friendly backpack with a laptop sleeve, hidden pocket, and water-resistant fabric.",
    price: 59,
    image:
      "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1200&q=80",
    category: "Travel",
  },
];

// Server-side function to get all items (used in server components)
export function getItems(): Item[] {
  return itemsDb;
}

// Server-side function to get single item (used in server components)
export function getItem(id: string): Item | undefined {
  return itemsDb.find((i) => i.id === id);
}

// Server-side function to add item (used in API routes)
export function addItem(item: Omit<Item, "id">): Item {
  const newItem: Item = {
    id: `item_${Date.now()}`,
    ...item,
  };
  itemsDb.unshift(newItem);
  return newItem;
}

// Client-side fetch function (used in client components)
export async function fetchItems(): Promise<Item[]> {
  const res = await fetch("/api/items", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch items");
  return res.json();
}

// Client-side fetch function (used in client components)
export async function fetchItem(id: string): Promise<Item> {
  const res = await fetch(`/api/items/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch item");
  return res.json();
}

// Client-side function to create item (used in client components)
export async function createItem(data: Omit<Item, "id">): Promise<Item> {
  const res = await fetch("/api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create item");
  return res.json();
}
