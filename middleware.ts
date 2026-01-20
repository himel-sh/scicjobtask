import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const auth = req.cookies.get("auth")?.value;

  if (req.nextUrl.pathname.startsWith("/add-item")) {
    if (auth !== "1") {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("next", "/add-item");
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-item/:path*"],
};

