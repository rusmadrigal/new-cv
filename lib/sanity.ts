import { createClient } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "2za5lqrr";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});

// Types matching Sanity schema
export interface CaseStudyResult {
  metric: string;
  value: string;
  change?: string;
}

export type Locale = "en" | "es";

/** Used for list (case studies, featured on home). challenge/solution are plain text from pt::text(). */
export interface CaseStudy {
  _id: string;
  title: string;
  slug: string;
  client: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[] | null;
  tags: string[] | null;
  icon: "zap" | "search" | "trendingUp";
  gradient: string;
  featured?: boolean;
  order?: number | null;
  language?: Locale;
}

export interface SanityImageAsset {
  url: string;
  alt?: string | null;
  caption?: string | null;
}

/** Full case study for single page: rich text (blocks), gallery, video, SEO overrides. */
export interface CaseStudyPage extends Omit<
  CaseStudy,
  "challenge" | "solution"
> {
  challenge: PortableTextBlock[];
  solution: PortableTextBlock[];
  body?: PortableTextBlock[] | null;
  gallery?: SanityImageAsset[] | null;
  videoUrl?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  ogImage?: string | null;
}

const listFields = `
  _id,
  title,
  "slug": slug.current,
  client,
  "challenge": pt::text(challenge),
  "solution": pt::text(solution),
  results,
  tags,
  icon,
  gradient,
  featured,
  order
`;

const languageFilter = `(language == $locale || (language == null && $locale == "en"))`;

export const caseStudiesQuery = `*[_type == "caseStudy" && ${languageFilter}] | order(order asc, title asc) {
  ${listFields}
}`;

export const featuredCaseStudiesQuery = `*[_type == "caseStudy" && featured == true && ${languageFilter}] | order(order asc, title asc) {
  ${listFields}
}`;

const pageFields = `
  _id,
  title,
  "slug": slug.current,
  client,
  challenge,
  solution,
  results,
  tags,
  icon,
  gradient,
  featured,
  order,
  body,
  "gallery": gallery[]{
    "url": asset->url,
    alt,
    caption
  },
  videoUrl,
  seoTitle,
  seoDescription,
  "ogImage": ogImage.asset->url
`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug && ${languageFilter}][0] {
  ${pageFields}
}`;

export const caseStudySlugsQuery = `*[_type == "caseStudy" && ${languageFilter}].slug.current`;

export async function getCaseStudies(
  locale: Locale = "en",
): Promise<CaseStudy[]> {
  const data = await client.fetch<CaseStudy[]>(caseStudiesQuery, { locale });
  return data ?? [];
}

export async function getFeaturedCaseStudies(
  locale: Locale = "en",
): Promise<CaseStudy[]> {
  const data = await client.fetch<CaseStudy[]>(featuredCaseStudiesQuery, {
    locale,
  });
  return data ?? [];
}

export async function getCaseStudyBySlug(
  slug: string,
  locale: Locale = "en",
): Promise<CaseStudyPage | null> {
  const data = await client.fetch<CaseStudyPage | null>(caseStudyBySlugQuery, {
    slug,
    locale,
  });
  return data ?? null;
}

export async function getCaseStudySlugs(
  locale: Locale = "en",
): Promise<string[]> {
  const data = await client.fetch<string[]>(caseStudySlugsQuery, { locale });
  return data ?? [];
}

export type { PortableTextBlock };
