import { NextResponse } from "next/server";
import { siteUrl } from "@/lib/site";

/** Alias hacia /llms.txt (convención habitual: llms.txt). */
export function GET() {
  const base = siteUrl.replace(/\/$/, "");
  return NextResponse.redirect(`${base}/llms.txt`, 308);
}
