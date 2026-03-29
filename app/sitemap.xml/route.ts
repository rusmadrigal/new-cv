import { getSitemapEntries } from "@/lib/sitemap-entries";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatPriority(p: number): string {
  if (p >= 1) return "1.0";
  if (p <= 0) return "0.0";
  return p.toFixed(1);
}

function buildUrlXml(entry: {
  loc: string;
  lastmod: Date;
  changefreq: string;
  priority: number;
}): string {
  const lastmod = entry.lastmod.toISOString();
  return `
  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
    <changefreq>${escapeXml(entry.changefreq)}</changefreq>
    <priority>${formatPriority(entry.priority)}</priority>
  </url>`;
}

export async function GET() {
  const urls = await getSitemapEntries();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(buildUrlXml).join("")}
</urlset>`;

  return new Response(body.trimStart(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
