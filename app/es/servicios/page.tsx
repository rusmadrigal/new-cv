import { EsServiciosIndexJsonLd } from "@/components/JsonLd";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiciosIndexView } from "@/components/ServiciosIndexView";
import {
  getLandingPages,
  getCaseStudies,
  getServiciosEsIndex,
} from "@/lib/sanity";
import { serviciosIndexCopy } from "@/lib/servicios-index-copy";
import { siteUrl, siteName, person } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata = {
  title: {
    absolute:
      "Servicios SEO en Latinoamérica | SEO Técnico y Estratégico",
  },
  description:
    "Servicios SEO para empresas en Latinoamérica. Estrategia, SEO técnico y contenido para crecer tráfico cualificado y escalar a nivel regional.",
  alternates: {
    canonical: `${siteUrl}/es/servicios`,
    languages: {
      en: `${siteUrl}/services`,
      es: `${siteUrl}/es/servicios`,
      "es-419": `${siteUrl}/es/servicios`,
      "es-CR": `${siteUrl}/es/servicios`,
      "x-default": `${siteUrl}/services`,
    },
  },
  openGraph: {
    url: `${siteUrl}/es/servicios`,
    title: "Servicios SEO en Latinoamérica | SEO Técnico y Estratégico",
    description:
      "Servicios SEO para empresas en Latinoamérica. Estrategia, SEO técnico y contenido para crecer tráfico cualificado y escalar a nivel regional.",
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
  twitter: {
    card: "summary_large_image",
    title: "Servicios SEO en Latinoamérica | SEO Técnico y Estratégico",
    description:
      "Servicios SEO para empresas en Latinoamérica. Estrategia, SEO técnico y contenido para crecer tráfico cualificado y escalar a nivel regional.",
    images: [`${siteUrl}${person.image}`],
  },
};

export default async function EsServiciosPage() {
  const [landingPages, caseStudies, serviciosEsDoc] = await Promise.all([
    getLandingPages("es"),
    getCaseStudies("es"),
    getServiciosEsIndex(),
  ]);
  const hasCaseStudies = caseStudies.length > 0;
  const fb = serviciosIndexCopy.es;
  const titleFromSanity = serviciosEsDoc?.seoSectionTitle?.trim();
  const parasFromSanity = (serviciosEsDoc?.seoSectionParagraphs ?? [])
    .map((p) => p.trim())
    .filter(Boolean);
  const seoSection = {
    title: titleFromSanity || fb.seoSectionTitle,
    paragraphs:
      parasFromSanity.length > 0 ? parasFromSanity : [...fb.seoSectionParagraphs],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <EsServiciosIndexJsonLd />
      <Navigation hasCaseStudies={hasCaseStudies} />
      <ServiciosIndexView
        locale="es"
        landingPages={landingPages}
        seoSection={seoSection}
      />
      <Footer locale="es" />
    </div>
  );
}
