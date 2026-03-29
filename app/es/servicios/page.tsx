import { SiteJsonLdGraph } from "@/components/JsonLd";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiciosIndexView } from "@/components/ServiciosIndexView";
import { getLandingPages, getCaseStudies } from "@/lib/sanity";
import { siteUrl, siteName, person } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Servicios de SEO",
  description:
    "Servicios de SEO estratégico y local por país. Consultoría y auditorías técnicas para empresas que buscan crecimiento orgánico.",
  alternates: {
    canonical: `${siteUrl}/es/servicios`,
    languages: {
      en: `${siteUrl}/servicios`,
      es: `${siteUrl}/es/servicios`,
      "x-default": `${siteUrl}/servicios`,
    },
  },
  openGraph: {
    url: `${siteUrl}/es/servicios`,
    title: `Servicios de SEO | ${siteName}`,
    description:
      "Servicios de SEO estratégico y local por país. Consultoría técnica y crecimiento orgánico.",
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

export default async function EsServiciosPage() {
  const [landingPages, caseStudies] = await Promise.all([
    getLandingPages("es"),
    getCaseStudies("es"),
  ]);
  const hasCaseStudies = caseStudies.length > 0;

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteJsonLdGraph />
      <Navigation hasCaseStudies={hasCaseStudies} />
      <ServiciosIndexView locale="es" landingPages={landingPages} />
      <Footer locale="es" />
    </div>
  );
}
