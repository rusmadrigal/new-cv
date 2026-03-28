import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getLandingPages, getCaseStudies } from "@/lib/sanity";
import { siteUrl, siteName, person } from "@/lib/site";
import { ArrowRight, MapPin } from "lucide-react";

const COUNTRY_LABELS: Record<string, string> = {
  "costa-rica": "Costa Rica",
  mexico: "México",
  espana: "España",
  colombia: "Colombia",
  argentina: "Argentina",
  chile: "Chile",
  panama: "Panamá",
};

function getCountryLabel(lp: {
  country: string;
  countryLabel?: string | null;
}) {
  if (lp.country === "otro" && lp.countryLabel) return lp.countryLabel;
  return COUNTRY_LABELS[lp.country] ?? lp.country;
}

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Servicios de SEO",
  description:
    "Servicios de SEO estratégico y local por país. Consultoría y auditorías técnicas para empresas que buscan crecimiento orgánico.",
  alternates: {
    canonical: `${siteUrl}/es/servicios`,
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
  robots: {
    index: true,
    follow: true,
  },
};

export default async function EsServiciosPage() {
  const [landingPages, caseStudies] = await Promise.all([
    getLandingPages("es"),
    getCaseStudies("es"),
  ]);
  const hasCaseStudies = caseStudies.length > 0;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation hasCaseStudies={hasCaseStudies} />
      <main id="main-content" className="pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
              Servicios
            </p>
            <h1 className="text-2xl md:text-3xl text-gray-300 font-light">
              SEO estratégico y local por país
            </h1>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              Consultoría y auditorías técnicas para empresas que buscan
              visibilidad orgánica. Disponible en distintos mercados.
            </p>
          </div>

          {landingPages.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-gray-500">
                Próximamente más mercados. Por ahora, escríbeme directamente
                para consultas.
              </p>
              <a
                href="mailto:hello@rusmadrigal.com"
                className="inline-block mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                hello@rusmadrigal.com
              </a>
            </div>
          ) : (
            <ul className="space-y-3">
              {landingPages.map((lp) => {
                const label = getCountryLabel(lp);
                return (
                  <li key={lp._id}>
                    <Link
                      href={`/es/servicios/${lp.slug}`}
                      className="group flex items-center justify-between gap-4 py-3 px-4 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-gray-500 shrink-0">
                          <MapPin className="w-4 h-4" />
                        </span>
                        <span className="text-gray-300 group-hover:text-white transition-colors truncate">
                          {lp.heroHeadline}
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm shrink-0">
                        {label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </main>
      <Footer locale="es" />
    </div>
  );
}
