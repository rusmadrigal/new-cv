import { NextResponse } from "next/server";
import { siteUrl } from "@/lib/site";

/** Alias hacia /es/llms.txt */
export function GET() {
  const base = siteUrl.replace(/\/$/, "");
  return NextResponse.redirect(`${base}/es/llms.txt`, 308);
}
