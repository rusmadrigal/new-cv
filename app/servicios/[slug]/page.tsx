import { notFound } from "next/navigation";
import {
  getLandingPageBySlug,
  getLandingPageSlugs,
  getCaseStudies,
} from "@/lib/sanity";
import { buildLandingSlugMetadata } from "@/lib/landing-metadata";
import { LandingPageJsonLd } from "@/components/LandingPageJsonLd";
import { SeoLandingPageView } from "@/components/SeoLandingPageView";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const slugs = await getLandingPageSlugs("en");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = await buildLandingSlugMetadata(slug, "en");
  return meta ?? {};
}

export default async function EnServicioLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [lp, caseStudies] = await Promise.all([
    getLandingPageBySlug(slug, "en"),
    getCaseStudies("en"),
  ]);

  if (!lp) notFound();

  return (
    <>
      <LandingPageJsonLd lp={lp} locale="en" />
      <SeoLandingPageView
        lp={lp}
        locale="en"
        hasCaseStudies={caseStudies.length > 0}
      />
    </>
  );
}
