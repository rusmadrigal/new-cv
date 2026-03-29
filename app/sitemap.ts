import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { getCaseStudySlugs } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [slugsEn, slugsEs] = await Promise.all([
    getCaseStudySlugs("en"),
    getCaseStudySlugs("es"),
  ]);

  const caseStudiesEn: MetadataRoute.Sitemap = slugsEn.map((slug) => ({
    url: `${siteUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseStudiesEs: MetadataRoute.Sitemap = slugsEs.map((slug) => ({
    url: `${siteUrl}/es/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/es`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/es/case-studies`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: `${siteUrl}/es/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    ...caseStudiesEn,
    ...caseStudiesEs,
  ];
}
