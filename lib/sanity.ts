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

// Landing pages (servicios SEO)
export interface LandingPageServiceItem {
  title: string;
  description: string;
}

export interface LandingPageLocalBullet {
  text: string;
}

export interface LandingPageStat {
  value: string;
  label: string;
}

export interface LandingPageFaq {
  question: string;
  answer: string;
}

export interface LandingPage {
  _id: string;
  slug: string;
  country: string;
  countryLabel?: string | null;
  heroHeadline: string;
  heroSubheadline?: string | null;
  heroCtaText?: string | null;
  heroCtaHref?: string | null;
  heroTrustLine?: string | null;
  heroSecondaryCtaText?: string | null;
  heroSecondaryCtaHref?: string | null;
  stats?: LandingPageStat[] | null;
  introTitle?: string | null;
  introBody?: PortableTextBlock[] | null;
  differentiatorTitle?: string | null;
  differentiatorSubtitle?: string | null;
  differentiatorItems?: LandingPageServiceItem[] | null;
  seoEstrategicoTitle?: string | null;
  seoEstrategicoSubtitle?: string | null;
  seoEstrategicoServices?: LandingPageServiceItem[] | null;
  seoLocalTitle?: string | null;
  seoLocalSubtitle?: string | null;
  seoLocalBullets?: LandingPageLocalBullet[] | null;
  processTitle?: string | null;
  processSubtitle?: string | null;
  processSteps?: LandingPageServiceItem[] | null;
  faqTitle?: string | null;
  faqs?: LandingPageFaq[] | null;
  ctaHeadline?: string | null;
  ctaSubheadline?: string | null;
  ctaButtonText?: string | null;
  ctaButtonHref?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  ogImage?: string | null;
  /** BCP 47 p. ej. es-cr, es-mx; vacío → es o en según idioma del documento */
  hreflang?: string | null;
}

const landingPageListFields = `
  _id,
  "slug": slug.current,
  country,
  countryLabel,
  heroHeadline,
  order
`;

const landingPageFullFields = `
  _id,
  "slug": slug.current,
  country,
  countryLabel,
  heroHeadline,
  heroSubheadline,
  heroCtaText,
  heroCtaHref,
  heroTrustLine,
  heroSecondaryCtaText,
  heroSecondaryCtaHref,
  stats,
  introTitle,
  introBody,
  differentiatorTitle,
  differentiatorSubtitle,
  differentiatorItems,
  seoEstrategicoTitle,
  seoEstrategicoSubtitle,
  seoEstrategicoServices,
  seoLocalTitle,
  seoLocalSubtitle,
  seoLocalBullets,
  processTitle,
  processSubtitle,
  processSteps,
  faqTitle,
  faqs,
  ctaHeadline,
  ctaSubheadline,
  ctaButtonText,
  ctaButtonHref,
  seoTitle,
  seoDescription,
  "ogImage": ogImage.asset->url,
  hreflang
`;

const landingPageFilter = `_type == "landingPage" && published == true && language == $locale`;

export const landingPagesQuery = `*[${landingPageFilter}] | order(order asc, heroHeadline asc) {
  ${landingPageListFields}
}`;

export const landingPageBySlugQuery = `*[${landingPageFilter} && slug.current == $slug][0] {
  ${landingPageFullFields}
}`;

export const landingPageSlugsQuery = `*[${landingPageFilter}].slug.current`;

export async function getLandingPages(
  locale: Locale = "es",
): Promise<LandingPage[]> {
  const data = await client.fetch<LandingPage[]>(landingPagesQuery, {
    locale,
  });
  return data ?? [];
}

export async function getLandingPageBySlug(
  slug: string,
  locale: Locale = "es",
): Promise<LandingPage | null> {
  const data = await client.fetch<LandingPage | null>(landingPageBySlugQuery, {
    slug,
    locale,
  });
  return data ?? null;
}

export async function getLandingPageSlugs(
  locale: Locale = "es",
): Promise<string[]> {
  const data = await client.fetch<string[]>(landingPageSlugsQuery, {
    locale,
  });
  return data ?? [];
}

/** Bloque SEO de /es/servicios y /services (documentos en Sanity). */
export interface ServiciosIndexSeoDoc {
  seoSectionTitle?: string | null;
  seoSectionParagraphs?: string[] | null;
}

/** Compat: mismo shape que {@link ServiciosIndexSeoDoc}. */
export type ServiciosEsIndex = ServiciosIndexSeoDoc;

export const serviciosEsIndexQuery = `*[_type == "serviciosEsIndex"] | order(_updatedAt desc)[0] {
  seoSectionTitle,
  seoSectionParagraphs
}`;

export const serviciosEnIndexQuery = `*[_type == "serviciosEnIndex"] | order(_updatedAt desc)[0] {
  seoSectionTitle,
  seoSectionParagraphs
}`;

export async function getServiciosEsIndex(): Promise<ServiciosIndexSeoDoc | null> {
  const data = await client.fetch<ServiciosIndexSeoDoc | null>(
    serviciosEsIndexQuery,
  );
  return data ?? null;
}

export async function getServiciosEnIndex(): Promise<ServiciosIndexSeoDoc | null> {
  const data = await client.fetch<ServiciosIndexSeoDoc | null>(
    serviciosEnIndexQuery,
  );
  return data ?? null;
}

export type { PortableTextBlock };
