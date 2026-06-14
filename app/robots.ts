import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/** robots.txt dinámico: no indexación pública; bloquea /api/. */
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
