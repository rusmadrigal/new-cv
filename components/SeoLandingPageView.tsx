"use client";

import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PortableText } from "@/components/PortableText";
import type { LandingPage, Locale } from "@/lib/sanity";
import {
  getLandingCountryLabel,
  landingServicesBasePath,
} from "@/lib/landing-page";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Mail,
  Search,
  MapPin,
  CheckCircle2,
  BarChart3,
  Sparkles,
  Route,
  ChevronDown,
} from "lucide-react";

const COPY: Record<
  Locale,
  {
    back: string;
    strategicDefault: string;
    localDefault: string;
    ctaDefault: string;
    contactDefault: string;
  }
> = {
  es: {
    back: "Servicios",
    strategicDefault: "SEO estratégico",
    localDefault: "SEO local",
    ctaDefault: "¿Listo para mejorar tu visibilidad orgánica?",
    contactDefault: "Contactar",
  },
  en: {
    back: "SEO services",
    strategicDefault: "Strategic SEO",
    localDefault: "Local SEO",
    ctaDefault: "Ready to grow your organic visibility?",
    contactDefault: "Get in touch",
  },
};

function faqJsonLd(faqs: NonNullable<LandingPage["faqs"]>) {
  const mainEntity = faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  });
}

export function SeoLandingPageView({
  lp,
  locale,
  hasCaseStudies,
}: {
  lp: LandingPage;
  locale: Locale;
  hasCaseStudies: boolean;
}) {
  const t = COPY[locale];
  const basePath = landingServicesBasePath(locale);
  const countryLabel = getLandingCountryLabel(lp);
  const heroCtaHref = lp.heroCtaHref ?? "mailto:hello@rusmadrigal.com";
  const heroCtaText = lp.heroCtaText ?? (locale === "es" ? "Consultar" : "Book a call");
  const ctaButtonHref = lp.ctaButtonHref ?? "mailto:hello@rusmadrigal.com";
  const ctaButtonText = lp.ctaButtonText ?? t.contactDefault;

  const hasIntro =
    Boolean(lp.introTitle) ||
    Boolean(lp.introBody && lp.introBody.length > 0);

  return (
    <div className="min-h-screen bg-black text-white">
      {lp.faqs && lp.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: faqJsonLd(lp.faqs),
          }}
        />
      )}
      <Navigation hasCaseStudies={hasCaseStudies} />

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.25),transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
            <Link
              href={basePath}
              className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.back}
            </Link>

            <div className="mx-auto max-w-4xl text-center">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-blue-300/90"
              >
                <MapPin className="h-3.5 w-3.5" />
                {countryLabel}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-balance bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-4xl font-semibold leading-tight tracking-tight text-transparent sm:text-5xl md:text-6xl"
              >
                {lp.heroHeadline}
              </motion.h1>
              {lp.heroSubheadline && (
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-gray-400 sm:text-xl"
                >
                  {lp.heroSubheadline}
                </motion.p>
              )}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <a
                  href={heroCtaHref}
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:from-blue-500 hover:to-blue-400 sm:w-auto"
                >
                  <Mail className="h-4 w-4" />
                  {heroCtaText}
                </a>
                {lp.heroSecondaryCtaText && lp.heroSecondaryCtaHref && (
                  <a
                    href={lp.heroSecondaryCtaHref}
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10 sm:w-auto"
                  >
                    {lp.heroSecondaryCtaText}
                  </a>
                )}
              </motion.div>
              {lp.heroTrustLine && (
                <p className="mt-8 text-sm text-gray-500">{lp.heroTrustLine}</p>
              )}
            </div>
          </div>
        </section>

        {/* Stats */}
        {lp.stats && lp.stats.length > 0 && (
          <section className="border-y border-white/10 bg-gradient-to-b from-gray-950 to-black py-12">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6">
              {lp.stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gray-500 sm:text-sm sm:normal-case sm:tracking-normal">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Intro */}
        {hasIntro && (
          <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-24">
            {lp.introTitle && (
              <h2 className="mb-8 text-2xl font-semibold text-white md:text-3xl">
                {lp.introTitle}
              </h2>
            )}
            {lp.introBody && lp.introBody.length > 0 && (
              <div className="max-w-none text-base">
                <PortableText value={lp.introBody} />
              </div>
            )}
          </section>
        )}

        {/* Differentiator */}
        {lp.differentiatorItems && lp.differentiatorItems.length > 0 && (
          <section className="border-t border-white/10 bg-gray-950/40 py-20 md:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="mx-auto mb-14 max-w-2xl text-center">
                <span className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-violet-400">
                  <Sparkles className="h-4 w-4" />
                  {locale === "es" ? "Enfoque" : "Approach"}
                </span>
                {lp.differentiatorTitle && (
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">
                    {lp.differentiatorTitle}
                  </h2>
                )}
                {lp.differentiatorSubtitle && (
                  <p className="mt-4 text-gray-400">
                    {lp.differentiatorSubtitle}
                  </p>
                )}
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {lp.differentiatorItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-6"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SEO Estratégico */}
        {lp.seoEstrategicoServices && lp.seoEstrategicoServices.length > 0 && (
          <section
            id="servicios-estrategicos"
            className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28"
          >
            <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <span className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-blue-400">
                  <Search className="h-4 w-4" />
                  {locale === "es" ? "Servicios" : "Services"}
                </span>
                <h2 className="text-3xl font-semibold text-white md:text-4xl">
                  {lp.seoEstrategicoTitle ?? t.strategicDefault}
                </h2>
                {lp.seoEstrategicoSubtitle && (
                  <p className="mt-4 text-gray-400">
                    {lp.seoEstrategicoSubtitle}
                  </p>
                )}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {lp.seoEstrategicoServices.map((srv, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 p-6 transition hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition group-hover:bg-blue-500/20" />
                  <div className="relative">
                    <span className="mb-3 inline-block rounded-md bg-blue-500/15 px-2 py-0.5 text-xs font-mono text-blue-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {srv.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {srv.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* SEO Local */}
        {lp.seoLocalBullets && lp.seoLocalBullets.length > 0 && (
          <section
            id="seo-local"
            className="relative overflow-hidden border-y border-emerald-500/20 py-20 md:py-28"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-black to-black" />
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <span className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
                    <MapPin className="h-4 w-4" />
                    {locale === "es" ? "Presencia local" : "Local presence"}
                  </span>
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">
                    {lp.seoLocalTitle ?? t.localDefault}
                  </h2>
                  {lp.seoLocalSubtitle && (
                    <p className="mt-4 text-gray-400">{lp.seoLocalSubtitle}</p>
                  )}
                </div>
                <ul className="space-y-4">
                  {lp.seoLocalBullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                      <span className="text-gray-300">{b.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Process */}
        {lp.processSteps && lp.processSteps.length > 0 && (
          <section id="proceso" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-amber-400/90">
                <Route className="h-4 w-4" />
                {locale === "es" ? "Metodología" : "Method"}
              </span>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                {lp.processTitle ?? (locale === "es" ? "Cómo trabajamos" : "How we work")}
              </h2>
              {lp.processSubtitle && (
                <p className="mt-4 text-gray-400">{lp.processSubtitle}</p>
              )}
            </div>
            <div className="relative mx-auto max-w-3xl">
              <div
                className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/50 via-white/20 to-transparent md:block"
                aria-hidden
              />
              <ol className="space-y-10">
                {lp.processSteps.map((step, i) => (
                  <li key={i} className="relative flex gap-6 md:gap-8">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 text-sm font-bold text-blue-300 md:relative md:z-10">
                      {i + 1}
                    </div>
                    <div className="flex-1 rounded-2xl border border-white/10 bg-gray-900/50 p-6">
                      <h3 className="text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* FAQ */}
        {lp.faqs && lp.faqs.length > 0 && (
          <section id="faq" className="border-t border-white/10 bg-gray-950/60 py-20 md:py-28">
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <h2 className="mb-10 text-center text-3xl font-semibold text-white md:text-4xl">
                {lp.faqTitle ?? (locale === "es" ? "Preguntas frecuentes" : "Frequently asked questions")}
              </h2>
              <div className="space-y-3">
                {lp.faqs.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-white/10 bg-black/40 open:border-white/20 open:bg-white/[0.04]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-medium text-white transition hover:bg-white/[0.03] [&::-webkit-details-marker]:hidden">
                      <span>{item.question}</span>
                      <ChevronDown className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <div className="border-t border-white/5 px-5 pb-5">
                      <p className="pt-4 text-sm leading-relaxed text-gray-400 whitespace-pre-line">
                        {item.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-24 pt-8 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-950/80 via-gray-900 to-violet-950/50 px-8 py-14 text-center shadow-2xl shadow-blue-500/10 md:px-16 md:py-16">
            <div className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
            <h2 className="relative text-2xl font-semibold text-white md:text-3xl">
              {lp.ctaHeadline ?? t.ctaDefault}
            </h2>
            {lp.ctaSubheadline && (
              <p className="relative mx-auto mt-4 max-w-lg text-gray-300">
                {lp.ctaSubheadline}
              </p>
            )}
            <a
              href={ctaButtonHref}
              className="relative mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-100"
            >
              <Mail className="h-4 w-4" />
              {ctaButtonText}
            </a>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
