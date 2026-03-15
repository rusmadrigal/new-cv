import { createClient } from "next-sanity";

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

const caseStudyFields = `
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
  order
`;

export const caseStudiesQuery = `*[_type == "caseStudy"] | order(order asc, title asc) {
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
  order
}`;

export const featuredCaseStudiesQuery = `*[_type == "caseStudy" && featured == true] | order(order asc, title asc) {
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
  order
}`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0] {
  ${caseStudyFields}
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

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const data = await client.fetch<CaseStudy | null>(caseStudyBySlugQuery, { slug });
  return data ?? null;
}

export async function getCaseStudySlugs(): Promise<string[]> {
  const data = await client.fetch<string[]>(caseStudySlugsQuery);
  return data ?? [];
}
