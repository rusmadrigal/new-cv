import { SiteJsonLdGraph } from "@/components/JsonLd";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiciosIndexView } from "@/components/ServiciosIndexView";
import {
  getLandingPages,
  getCaseStudies,
  getServiciosEnIndex,
} from "@/lib/sanity";
import { serviciosIndexCopy } from "@/lib/servicios-index-copy";
import { siteUrl, siteName, person } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "SEO services",
  description:
    "Strategic and local SEO services by market. Technical consulting and audits for companies focused on organic growth.",
  alternates: {
    canonical: `${siteUrl}/services`,
    languages: {
      en: `${siteUrl}/services`,
      es: `${siteUrl}/es/servicios`,
      "es-419": `${siteUrl}/es/servicios`,
      "es-CR": `${siteUrl}/es/servicios`,
      "x-default": `${siteUrl}/services`,
    },
  },
  openGraph: {
    url: `${siteUrl}/services`,
    title: `SEO services | ${siteName}`,
    description:
      "Strategic and technical SEO for teams in Latin America. Consulting and organic growth by market.",
    siteName,
    images: [
      {
        url: `${siteUrl}${person.image}`,
        width: 1200,
        height: 630,
        alt: person.name,
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default async function EnServicesPage() {
  const [landingPages, caseStudies, serviciosEnDoc] = await Promise.all([
    getLandingPages("en"),
    getCaseStudies("en"),
    getServiciosEnIndex(),
  ]);
  const hasCaseStudies = caseStudies.length > 0;
  const fb = serviciosIndexCopy.en;
  const titleFromSanity = serviciosEnDoc?.seoSectionTitle?.trim();
  const parasFromSanity = (serviciosEnDoc?.seoSectionParagraphs ?? [])
    .map((p) => p.trim())
    .filter(Boolean);
  const seoSection = {
    title: titleFromSanity || fb.seoSectionTitle,
    paragraphs:
      parasFromSanity.length > 0
        ? parasFromSanity
        : [...fb.seoSectionParagraphs],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteJsonLdGraph />
      <Navigation hasCaseStudies={hasCaseStudies} />
      <ServiciosIndexView
        locale="en"
        landingPages={landingPages}
        seoSection={seoSection}
      />
      <Footer locale="en" />
    </div>
  );
}
