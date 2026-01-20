import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getItems, addItem } from "@/lib/api";

// GET /api/items - Fetch all items
export async function GET() {
  const items = getItems();
  return NextResponse.json(items);
}

// POST /api/items - Create new item (requires authentication)
export async function POST(req: Request) {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth")?.value;

  // Check authentication
  if (auth !== "1") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { name, description, price, image, category } = body;

    // Validate required fields
    if (!name || !description || typeof price !== "number") {
      return NextResponse.json(
        {
          message:
            "Invalid payload: name, description, and numeric price are required.",
        },
        { status: 400 },
      );
    }

    // Create new item using shared database
    const newItem = addItem({
      name: String(name),
      description: String(description),
      price,
      image: image ? String(image) : "",
      category: category ? String(category) : "General",
    });

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}
