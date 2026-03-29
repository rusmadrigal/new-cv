import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getLandingPages, getCaseStudies } from "@/lib/sanity";
import { siteUrl, siteName, person } from "@/lib/site";
import { getLandingCountryLabel } from "@/lib/landing-page";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

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
      <Navigation hasCaseStudies={hasCaseStudies} />
      <main id="main-content" className="pt-24 pb-24">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div
            className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[480px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[100px]"
            aria-hidden
          />
          <div className="relative mb-14 text-center">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-blue-400/90">
              <Sparkles className="h-3.5 w-3.5" />
              Services
            </p>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Strategic & local SEO by market
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-gray-400">
              Technical SEO consulting, audits, and organic growth for teams
              operating at scale. Pick your market below.
            </p>
          </div>

          {landingPages.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] py-16 text-center">
              <p className="text-gray-400">
                More markets coming soon. For now, reach out directly.
              </p>
              <a
                href="mailto:hello@rusmadrigal.com"
                className="mt-4 inline-block text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                hello@rusmadrigal.com
              </a>
            </div>
          ) : (
            <ul className="space-y-4">
              {landingPages.map((lp) => {
                const label = getLandingCountryLabel(lp);
                return (
                  <li key={lp._id}>
                    <Link
                      href={`/servicios/${lp.slug}`}
                      className="group flex items-center gap-4 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900/80 to-gray-900/40 p-5 transition hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-white transition group-hover:text-blue-200">
                          {lp.heroHeadline}
                        </p>
                        <p className="text-sm text-gray-500">{label}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 shrink-0 text-gray-600 transition group-hover:translate-x-0.5 group-hover:text-blue-400" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </main>
      <Footer locale="en" />
    </div>
  );
}
