import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { getCaseStudySlugs, getLandingPageSlugs } from "@/lib/sanity";

const base = () => siteUrl.replace(/\/$/, "");

/** sitemap.xml dinámico: home, servicios, case studies, landings por idioma, legal, llms. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const root = base();
  const now = new Date();

  const [slugsEn, slugsEs, landingEn, landingEs] = await Promise.all([
    getCaseStudySlugs("en"),
    getCaseStudySlugs("es"),
    getLandingPageSlugs("en"),
    getLandingPageSlugs("es"),
  ]);

  const caseStudiesEn: MetadataRoute.Sitemap = slugsEn.map((slug) => ({
    url: `${root}/case-studies/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseStudiesEs: MetadataRoute.Sitemap = slugsEs.map((slug) => ({
    url: `${root}/es/case-studies/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const serviciosLandingEn: MetadataRoute.Sitemap = landingEn.map((slug) => ({
    url: `${root}/servicios/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const serviciosLandingEs: MetadataRoute.Sitemap = landingEs.map((slug) => ({
    url: `${root}/es/servicios/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: root,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { en: root, es: `${root}/es` } },
    },
    {
      url: `${root}/es`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { en: root, es: `${root}/es` } },
    },
    {
      url: `${root}/servicios`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        languages: { en: `${root}/servicios`, es: `${root}/es/servicios` },
      },
    },
    {
      url: `${root}/es/servicios`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        languages: { en: `${root}/servicios`, es: `${root}/es/servicios` },
      },
    },
    {
      url: `${root}/case-studies`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${root}/case-studies`,
          es: `${root}/es/case-studies`,
        },
      },
    },
    {
      url: `${root}/es/case-studies`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${root}/case-studies`,
          es: `${root}/es/case-studies`,
        },
      },
    },
    {
      url: `${root}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
      alternates: {
        languages: { en: `${root}/privacy`, es: `${root}/es/privacy` },
      },
    },
    {
      url: `${root}/es/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
      alternates: {
        languages: { en: `${root}/privacy`, es: `${root}/es/privacy` },
      },
    },
    {
      url: `${root}/llms.txt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
      alternates: {
        languages: { en: `${root}/llms.txt`, es: `${root}/es/llms.txt` },
      },
    },
    {
      url: `${root}/es/llms.txt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
      alternates: {
        languages: { en: `${root}/llms.txt`, es: `${root}/es/llms.txt` },
      },
    },
    ...caseStudiesEn,
    ...caseStudiesEs,
    ...serviciosLandingEn,
    ...serviciosLandingEs,
  ];
}
