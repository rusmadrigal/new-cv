import { NextResponse } from "next/server";
import { getLlmsTxtEn } from "@/lib/llms-txt";

export function GET() {
  return new NextResponse(getLlmsTxtEn(), {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
