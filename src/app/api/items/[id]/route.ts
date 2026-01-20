import { NextResponse } from "next/server";
import { getItem } from "@/lib/api";

// GET /api/items/[id] - Fetch single item
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const item = getItem(id);

  if (!item) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(item);
}
