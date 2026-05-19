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
  const slugs = await getLandingPageSlugs("es");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = await buildLandingSlugMetadata(slug, "es");
  return meta ?? {};
}

export default async function EsServicioLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [lp, caseStudies] = await Promise.all([
    getLandingPageBySlug(slug, "es"),
    getCaseStudies("es"),
  ]);

  if (!lp) notFound();

  return (
    <>
      <LandingPageJsonLd lp={lp} locale="es" />
      <SeoLandingPageView
        lp={lp}
        locale="es"
        hasCaseStudies={caseStudies.length > 0}
      />
    </>
  );
}
