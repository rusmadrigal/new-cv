import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/** robots.txt dinámico: permite indexación pública, bloquea /api/, enlaza sitemap. */
export default function robots(): MetadataRoute.Robots {
  const base = siteUrl.replace(/\/$/, "");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    host: base,
    sitemap: `${base}/sitemap.xml`,
  };
}
