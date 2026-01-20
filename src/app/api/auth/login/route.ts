import { NextResponse } from "next/server";

const VALID_EMAIL = "admin@example.com";
const VALID_PASSWORD = "password123";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = body?.email;
  const password = body?.password;

  if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: "auth",
    value: "1",
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  res.cookies.set({
    name: "email",
    value: String(email),
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return res;
}

