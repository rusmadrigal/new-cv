import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySessionToken, COOKIE_NAME } from "@/lib/session-reports";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/reports")) {
    return NextResponse.next();
  }
  if (pathname === "/reports/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token) {
    const loginUrl = new URL("/reports/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  try {
    const session = await verifySessionToken(token);
    if (!session) {
      const loginUrl = new URL("/reports/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  } catch {
    const loginUrl = new URL("/reports/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/reports/:path*"],
};
