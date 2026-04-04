import { siteUrl } from "@/lib/site";
import { getCaseStudySlugs, getLandingPageSlugs } from "@/lib/sanity";

export type SitemapEntry = {
  loc: string;
  lastmod: Date;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

const base = () => siteUrl.replace(/\/$/, "");

/** Misma cobertura que el antiguo app/sitemap.ts (MetadataRoute). */
export async function getSitemapEntries(): Promise<SitemapEntry[]> {
  const root = base();
  const now = new Date();

  const [slugsEn, slugsEs, landingEn, landingEs] = await Promise.all([
    getCaseStudySlugs("en"),
    getCaseStudySlugs("es"),
    getLandingPageSlugs("en"),
    getLandingPageSlugs("es"),
  ]);

  const caseStudiesEn: SitemapEntry[] = slugsEn.map((slug) => ({
    loc: `${root}/case-studies/${slug}`,
    lastmod: now,
    changefreq: "monthly",
    priority: 0.8,
  }));

  const caseStudiesEs: SitemapEntry[] = slugsEs.map((slug) => ({
    loc: `${root}/es/case-studies/${slug}`,
    lastmod: now,
    changefreq: "monthly",
    priority: 0.8,
  }));

  const serviciosLandingEn: SitemapEntry[] = landingEn.map((slug) => ({
    loc: `${root}/services/${slug}`,
    lastmod: now,
    changefreq: "monthly",
    priority: 0.85,
  }));

  const serviciosLandingEs: SitemapEntry[] = landingEs.map((slug) => ({
    loc: `${root}/es/servicios/${slug}`,
    lastmod: now,
    changefreq: "monthly",
    priority: 0.85,
  }));

  return [
    {
      loc: root,
      lastmod: now,
      changefreq: "weekly",
      priority: 1,
    },
    {
      loc: `${root}/es`,
      lastmod: now,
      changefreq: "weekly",
      priority: 1,
    },
    {
      loc: `${root}/services`,
      lastmod: now,
      changefreq: "weekly",
      priority: 0.85,
    },
    {
      loc: `${root}/es/servicios`,
      lastmod: now,
      changefreq: "weekly",
      priority: 0.85,
    },
    {
      loc: `${root}/case-studies`,
      lastmod: now,
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      loc: `${root}/es/case-studies`,
      lastmod: now,
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      loc: `${root}/privacy`,
      lastmod: now,
      changefreq: "yearly",
      priority: 0.4,
    },
    {
      loc: `${root}/es/privacy`,
      lastmod: now,
      changefreq: "yearly",
      priority: 0.4,
    },
    {
      loc: `${root}/llms.txt`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.3,
    },
    {
      loc: `${root}/es/llms.txt`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.3,
    },
    ...caseStudiesEn,
    ...caseStudiesEs,
    ...serviciosLandingEn,
    ...serviciosLandingEs,
  ];
}
