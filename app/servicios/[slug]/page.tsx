import { notFound } from "next/navigation";
import {
  getLandingPageBySlug,
  getLandingPageSlugs,
  getCaseStudies,
} from "@/lib/sanity";
import { siteUrl, siteName, person } from "@/lib/site";
import { getLandingCountryLabel } from "@/lib/landing-page";
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
  const lp = await getLandingPageBySlug(slug, "en");
  if (!lp) return {};

  const title = lp.seoTitle ?? lp.heroHeadline;
  const description =
    lp.seoDescription ??
    `${lp.heroHeadline}. Strategic and local SEO for businesses in ${getLandingCountryLabel(lp)}.`;
  const desc = description.slice(0, 155);
  const canonical = `${siteUrl}/servicios/${slug}`;
  const ogImage = lp.ogImage ?? `${siteUrl}${person.image}`;

  return {
    title,
    description: desc,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description: desc,
      siteName,
      images: [
        { url: ogImage, width: 1200, height: 630, alt: lp.heroHeadline },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
    },
    robots: { index: true, follow: true },
  };
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
    <SeoLandingPageView
      lp={lp}
      locale="en"
      hasCaseStudies={caseStudies.length > 0}
    />
  );
}
