import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { getCaseStudySlugs } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getCaseStudySlugs();

  const caseStudyEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${siteUrl}/case-studies/${slug}`,
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
    ...caseStudyEntries,
  ];
}
