import { createClient } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "2za5lqrr";
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
}

export interface SanityImageAsset {
  url: string;
  alt?: string | null;
  caption?: string | null;
}

/** Full case study for single page: rich text (blocks), gallery, video, SEO overrides. */
export interface CaseStudyPage extends Omit<CaseStudy, "challenge" | "solution"> {
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

export const caseStudiesQuery = `*[_type == "caseStudy"] | order(order asc, title asc) {
  ${listFields}
}`;

export const featuredCaseStudiesQuery = `*[_type == "caseStudy" && featured == true] | order(order asc, title asc) {
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

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0] {
  ${pageFields}
}`;

export const caseStudySlugsQuery = `*[_type == "caseStudy"].slug.current`;

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const data = await client.fetch<CaseStudy[]>(caseStudiesQuery);
  return data ?? [];
}

export async function getFeaturedCaseStudies(): Promise<CaseStudy[]> {
  const data = await client.fetch<CaseStudy[]>(featuredCaseStudiesQuery);
  return data ?? [];
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudyPage | null> {
  const data = await client.fetch<CaseStudyPage | null>(caseStudyBySlugQuery, { slug });
  return data ?? null;
}

export async function getCaseStudySlugs(): Promise<string[]> {
  const data = await client.fetch<string[]>(caseStudySlugsQuery);
  return data ?? [];
}

export type { PortableTextBlock };
