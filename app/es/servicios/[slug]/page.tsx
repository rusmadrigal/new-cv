import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  getLandingPageBySlug,
  getLandingPageSlugs,
  getCaseStudies,
} from "@/lib/sanity";
import { siteUrl, siteName, person } from "@/lib/site";
import {
  ArrowLeft,
  Mail,
  Search,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const COUNTRY_LABELS: Record<string, string> = {
  "costa-rica": "Costa Rica",
  mexico: "México",
  espana: "España",
  colombia: "Colombia",
  argentina: "Argentina",
  chile: "Chile",
  panama: "Panamá",
};

function getCountryLabel(lp: { country: string; countryLabel?: string | null }) {
  if (lp.country === "otro" && lp.countryLabel) return lp.countryLabel;
  return COUNTRY_LABELS[lp.country] ?? lp.country;
}

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
  const lp = await getLandingPageBySlug(slug, "es");
  if (!lp) return {};

  const title = lp.seoTitle ?? lp.heroHeadline;
  const description =
    lp.seoDescription ??
    `${lp.heroHeadline}. Servicios de SEO estratégico y local para empresas en ${getCountryLabel(lp)}.`;
  const desc = description.slice(0, 155);
  const canonical = `${siteUrl}/es/servicios/${slug}`;
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
      images: [{ url: ogImage, width: 1200, height: 630, alt: lp.heroHeadline }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
    },
    robots: { index: true, follow: true },
  };
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

  const hasCaseStudies = caseStudies.length > 0;
  const countryLabel = getCountryLabel(lp);
  const heroCtaHref = lp.heroCtaHref ?? "mailto:hello@rusmadrigal.com";
  const heroCtaText = lp.heroCtaText ?? "Consultar";
  const ctaButtonHref = lp.ctaButtonHref ?? "mailto:hello@rusmadrigal.com";
  const ctaButtonText = lp.ctaButtonText ?? "Contactar";

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation hasCaseStudies={hasCaseStudies} />
      <main id="main-content" className="pt-24 pb-24">
        {/* Back link - discreet */}
        <div className="max-w-4xl mx-auto px-6 mb-8">
          <Link
            href="/es/servicios"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Servicios
          </Link>
        </div>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <div className="text-center">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
              {countryLabel}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
              {lp.heroHeadline}
            </h1>
            {lp.heroSubheadline && (
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                {lp.heroSubheadline}
              </p>
            )}
            <a
              href={heroCtaHref}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg text-white font-medium transition-all shadow-lg shadow-blue-500/20"
            >
              <Mail className="w-4 h-4" />
              {heroCtaText}
            </a>
          </div>
        </section>

        {/* SEO Estratégico */}
        {lp.seoEstrategicoServices && lp.seoEstrategicoServices.length > 0 && (
          <section className="max-w-4xl mx-auto px-6 mb-20">
            <div className="border-t border-gray-800 pt-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2 rounded-lg bg-blue-500/10">
                  <Search className="w-5 h-5 text-blue-400" />
                </span>
                <h2 className="text-xl font-medium text-white">
                  {lp.seoEstrategicoTitle ?? "SEO Estratégico"}
                </h2>
              </div>
              {lp.seoEstrategicoSubtitle && (
                <p className="text-gray-400 mb-10 max-w-2xl">
                  {lp.seoEstrategicoSubtitle}
                </p>
              )}
              <div className="grid gap-6 sm:grid-cols-2">
                {lp.seoEstrategicoServices.map((srv, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl border border-gray-800 bg-gray-900/50"
                  >
                    <h3 className="text-white font-medium mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SEO Local */}
        {lp.seoLocalBullets && lp.seoLocalBullets.length > 0 && (
          <section className="max-w-4xl mx-auto px-6 mb-20">
            <div className="border-t border-gray-800 pt-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2 rounded-lg bg-emerald-500/10">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </span>
                <h2 className="text-xl font-medium text-white">
                  {lp.seoLocalTitle ?? "SEO Local"}
                </h2>
              </div>
              {lp.seoLocalSubtitle && (
                <p className="text-gray-400 mb-8 max-w-2xl">
                  {lp.seoLocalSubtitle}
                </p>
              )}
              <ul className="space-y-3">
                {lp.seoLocalBullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* CTA final */}
        <section className="max-w-4xl mx-auto px-6">
          <div className="border-t border-gray-800 pt-16 text-center">
            <h2 className="text-2xl font-light text-white mb-4">
              {lp.ctaHeadline ?? "¿Listo para mejorar tu visibilidad orgánica?"}
            </h2>
            {lp.ctaSubheadline && (
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                {lp.ctaSubheadline}
              </p>
            )}
            <a
              href={ctaButtonHref}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg text-white font-medium transition-all"
            >
              <Mail className="w-4 h-4" />
              {ctaButtonText}
            </a>
          </div>
        </section>
      </main>
      <Footer locale="es" />
    </div>
  );
}
