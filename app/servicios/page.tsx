import { SiteJsonLdGraph } from "@/components/JsonLd";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiciosIndexView } from "@/components/ServiciosIndexView";
import { getLandingPages, getCaseStudies } from "@/lib/sanity";
import { siteUrl, siteName, person } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "SEO services",
  description:
    "Strategic and local SEO services by market. Technical consulting and audits for companies focused on organic growth.",
  alternates: {
    canonical: `${siteUrl}/servicios`,
    languages: {
      en: `${siteUrl}/servicios`,
      es: `${siteUrl}/es/servicios`,
      "x-default": `${siteUrl}/servicios`,
    },
  },
  openGraph: {
    url: `${siteUrl}/servicios`,
    title: `SEO services | ${siteName}`,
    description:
      "Strategic and local SEO by country. Technical consulting and organic growth.",
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

export default async function EnServiciosPage() {
  const [landingPages, caseStudies] = await Promise.all([
    getLandingPages("en"),
    getCaseStudies("en"),
  ]);
  const hasCaseStudies = caseStudies.length > 0;

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteJsonLdGraph />
      <Navigation hasCaseStudies={hasCaseStudies} />
      <ServiciosIndexView locale="en" landingPages={landingPages} />
      <Footer locale="en" />
    </div>
  );
}
