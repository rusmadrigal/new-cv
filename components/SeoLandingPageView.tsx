"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PortableText } from "@/components/PortableText";
import type { LandingPage, Locale } from "@/lib/sanity";
import {
  getLandingCountryLabel,
  landingServicesBasePath,
} from "@/lib/landing-page";
import { AnimatePresence, motion } from "motion/react";
import { SeoContactModal } from "@/components/SeoContactModal";
import {
  ArrowLeft,
  Mail,
  Search,
  MapPin,
  CheckCircle2,
  Sparkles,
  Route,
  ChevronDown,
  Award,
  Gauge,
  TrendingUp,
  Building2,
  Shield,
  Layers,
  Cpu,
} from "lucide-react";

const COPY: Record<
  Locale,
  {
    back: string;
    strategicDefault: string;
    localDefault: string;
    ctaDefault: string;
    contactDefault: string;
    ctaMicrocopy: string;
    ctaButtonLabel: string;
  }
> = {
  es: {
    back: "Servicios",
    strategicDefault: "SEO estratégico",
    localDefault: "SEO local",
    ctaDefault: "¿Listo para mejorar tu visibilidad orgánica?",
    contactDefault: "Agendar consulta",
    ctaMicrocopy: "Respuesta en menos de 24h · Sin compromiso",
    ctaButtonLabel: "Agendar consulta",
  },
  en: {
    back: "SEO services",
    strategicDefault: "Strategic SEO",
    localDefault: "Local SEO",
    ctaDefault: "Ready to grow your organic visibility?",
    contactDefault: "Book a consultation",
    ctaMicrocopy: "Reply within 24h · No obligation",
    ctaButtonLabel: "Book a consultation",
  },
};

const STAT_ICONS = [Award, Gauge, TrendingUp, Building2] as const;
const DIFF_ICONS = [Shield, Layers, Cpu] as const;

function LandingFaqList({
  items,
}: {
  items: NonNullable<LandingPage["faqs"]>;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3.5">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ease-out ${
              isOpen
                ? "border-blue-500/45 bg-gradient-to-b from-blue-500/[0.08] to-black/40 shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_40px_-12px_rgba(59,130,246,0.25)]"
                : "border-white/10 bg-black/40 hover:border-white/18"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-5 min-h-[56px]"
              aria-expanded={isOpen}
            >
              <span
                className={`pr-2 text-[15px] font-semibold leading-snug sm:text-base ${
                  isOpen ? "text-white" : "text-gray-100"
                }`}
              >
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-blue-400/80 transition-transform duration-300 ease-out ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden border-t border-white/10"
                >
                  <p className="whitespace-pre-line px-5 pb-6 pt-5 text-[15px] leading-[1.7] text-[#D1D5DB] sm:px-7 sm:pb-7 sm:pt-6">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
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
  const heroCtaText = lp.heroCtaText ?? t.ctaButtonLabel;
  const ctaButtonText = lp.ctaButtonText ?? t.contactDefault;

  const [contactOpen, setContactOpen] = useState(false);

  const hasIntro =
    Boolean(lp.introTitle) || Boolean(lp.introBody && lp.introBody.length > 0);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation hasCaseStudies={hasCaseStudies} />
      <SeoContactModal
        open={contactOpen}
        onOpenChange={setContactOpen}
        locale={locale}
      />

      <main id="main-content" className="pt-14 sm:pt-16 md:pt-20">
        {/* Hero — alineado con listado de servicios: aire bajo nav + pt hero 80–100px */}
        <section className="relative overflow-hidden bg-black pb-14 pt-[5rem] sm:pb-16 sm:pt-[5.5rem] lg:pb-20 lg:pt-[6.25rem]">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(59,130,246,0.35),transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-[35%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[100px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-600/12 blur-[100px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_25%,black,transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.04),transparent_40%)]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
            <Link
              href={basePath}
              className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-gray-200 sm:mb-10"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.back}
            </Link>

            <div className="mx-auto max-w-4xl text-center">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-blue-300/90"
              >
                <MapPin className="h-3.5 w-3.5" />
                {countryLabel}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="mt-7 text-balance bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-4xl font-bold leading-[1.1] tracking-tight text-transparent sm:mt-8 md:mt-10 sm:text-5xl md:text-6xl"
              >
                {lp.heroHeadline}
              </motion.h1>
              {lp.heroSubheadline && (
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mx-auto mt-5 max-w-[42rem] text-pretty text-base leading-[1.7] text-[#D1D5DB] sm:mt-6 sm:text-lg"
                >
                  {lp.heroSubheadline}
                </motion.p>
              )}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4"
              >
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 px-9 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(59,130,246,0.4),0_0_40px_-4px_rgba(59,130,246,0.55),0_16px_40px_-12px_rgba(37,99,235,0.45)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.55),0_0_48px_-4px_rgba(59,130,246,0.65),0_20px_44px_-12px_rgba(37,99,235,0.5)] active:translate-y-0 sm:w-auto"
                >
                  <Mail className="h-4 w-4" />
                  {heroCtaText}
                </button>
                {lp.heroSecondaryCtaText && lp.heroSecondaryCtaHref && (
                  <a
                    href={lp.heroSecondaryCtaHref}
                    className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg border border-white/10 bg-transparent px-6 py-2.5 text-sm font-medium text-[#D1D5DB] transition-colors hover:border-white/20 hover:text-white sm:w-auto"
                  >
                    {lp.heroSecondaryCtaText}
                  </a>
                )}
              </motion.div>
              {lp.heroTrustLine && (
                <p className="mt-7 text-sm leading-relaxed text-gray-400 sm:mt-8">
                  {lp.heroTrustLine}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Stats */}
        {lp.stats && lp.stats.length > 0 && (
          <section className="border-t border-white/10 bg-gradient-to-b from-[#0a1020] to-black py-12 sm:py-16">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:px-6">
              {lp.stats.map((stat, i) => {
                const Icon = STAT_ICONS[i % STAT_ICONS.length];
                return (
                  <div
                    key={i}
                    className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] py-6 pl-5 pr-5 shadow-sm shadow-black/20 sm:text-left"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2.5 text-[15px] font-medium leading-snug text-gray-300">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Intro */}
        {hasIntro && (
          <section className="bg-black px-4 py-28 sm:px-6 md:py-36">
            <div className="mx-auto max-w-[42rem]">
              {lp.introTitle && (
                <h2 className="mb-10 text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {lp.introTitle}
                </h2>
              )}
              {lp.introBody && lp.introBody.length > 0 && (
                <div className="max-w-none text-base">
                  <PortableText value={lp.introBody} />
                </div>
              )}
            </div>
          </section>
        )}

        {/* Differentiator */}
        {lp.differentiatorItems && lp.differentiatorItems.length > 0 && (
          <section className="border-t border-white/10 bg-[#050910] py-28 md:py-36">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="mx-auto mb-20 max-w-[42rem] text-center">
                <span className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-violet-400">
                  <Sparkles className="h-4 w-4" />
                  {locale === "es" ? "Enfoque" : "Approach"}
                </span>
                {lp.differentiatorTitle && (
                  <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    {lp.differentiatorTitle}
                  </h2>
                )}
                {lp.differentiatorSubtitle && (
                  <p className="mt-6 text-base leading-[1.7] text-[#D1D5DB]">
                    {lp.differentiatorSubtitle}
                  </p>
                )}
              </div>
              <div className="grid gap-7 md:grid-cols-3 md:gap-8">
                {lp.differentiatorItems.map((item, i) => {
                  const Icon = DIFF_ICONS[i % DIFF_ICONS.length];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="group flex min-h-[200px] flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-500/25 hover:shadow-lg hover:shadow-violet-500/10"
                    >
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300 ring-1 ring-violet-400/20 transition group-hover:bg-violet-500/30">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold leading-snug text-white">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-[15px] leading-[1.7] text-gray-300">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* SEO Estratégico */}
        {lp.seoEstrategicoServices && lp.seoEstrategicoServices.length > 0 && (
          <section
            id="servicios-estrategicos"
            className="mx-auto max-w-6xl bg-black px-4 py-28 sm:px-6 md:py-36"
          >
            <div className="mb-20 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-[42rem]">
                <span className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-blue-400">
                  <Search className="h-4 w-4" />
                  {locale === "es" ? "Servicios" : "Services"}
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {lp.seoEstrategicoTitle ?? t.strategicDefault}
                </h2>
                {lp.seoEstrategicoSubtitle && (
                  <p className="mt-6 text-base leading-[1.7] text-[#D1D5DB]">
                    {lp.seoEstrategicoSubtitle}
                  </p>
                )}
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-7">
              {lp.seoEstrategicoServices.map((srv, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.05 }}
                  className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/15"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition group-hover:bg-blue-500/25" />
                  <div className="relative flex flex-1 flex-col">
                    <span className="mb-4 inline-block w-fit rounded-md bg-blue-500/15 px-2 py-0.5 text-xs font-mono text-blue-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold leading-snug text-white">
                      {srv.title}
                    </h3>
                    <p className="mt-4 flex-1 text-[15px] leading-[1.7] text-gray-300">
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
            className="relative overflow-hidden border-y border-emerald-500/20 bg-black py-28 md:py-36"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-black to-black" />
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <span className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
                    <MapPin className="h-4 w-4" />
                    {locale === "es" ? "Presencia local" : "Local presence"}
                  </span>
                  <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    {lp.seoLocalTitle ?? t.localDefault}
                  </h2>
                  {lp.seoLocalSubtitle && (
                    <p className="mt-6 max-w-[42rem] text-base leading-[1.7] text-[#D1D5DB]">
                      {lp.seoLocalSubtitle}
                    </p>
                  )}
                </div>
                <ul className="space-y-4">
                  {lp.seoLocalBullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                      <span className="leading-[1.7] text-[#D1D5DB]">
                        {b.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Process */}
        {lp.processSteps && lp.processSteps.length > 0 && (
          <section
            id="proceso"
            className="mx-auto max-w-6xl bg-[#050910] px-4 py-28 sm:px-6 md:py-36"
          >
            <div className="mx-auto mb-20 max-w-[42rem] text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-amber-400/90">
                <Route className="h-4 w-4" />
                {locale === "es" ? "Metodología" : "Method"}
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                {lp.processTitle ??
                  (locale === "es" ? "Cómo trabajamos" : "How we work")}
              </h2>
              {lp.processSubtitle && (
                <p className="mt-6 text-base leading-[1.7] text-[#D1D5DB]">
                  {lp.processSubtitle}
                </p>
              )}
            </div>
            <div className="relative mx-auto max-w-3xl">
              <div
                className="absolute left-[23px] top-0 hidden h-[calc(100%-2rem)] w-[3px] rounded-full bg-gradient-to-b from-blue-500/80 via-blue-400/40 to-white/10 md:block"
                aria-hidden
              />
              <ol className="space-y-12 md:space-y-14">
                {lp.processSteps.map((step, i) => (
                  <li key={i} className="relative flex gap-6 md:gap-8">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-blue-500/60 bg-gradient-to-br from-blue-600/40 to-blue-900/30 text-base font-bold text-white shadow-[0_0_20px_-4px_rgba(59,130,246,0.5)] md:relative md:z-10">
                      {i + 1}
                    </div>
                    <div className="flex-1 rounded-2xl border border-white/10 bg-gray-900/50 p-6 md:p-7">
                      <h3 className="text-lg font-bold leading-snug text-white">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-[15px] leading-[1.7] text-gray-300">
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
          <section
            id="faq"
            className="border-t border-white/10 bg-black py-28 md:py-36"
          >
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <h2 className="mb-14 text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
                {lp.faqTitle ??
                  (locale === "es"
                    ? "Preguntas frecuentes"
                    : "Frequently asked questions")}
              </h2>
              <LandingFaqList items={lp.faqs} />
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl bg-black px-4 pb-32 pt-16 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/40 bg-gradient-to-br from-blue-600/25 via-blue-950/90 to-violet-950/50 px-8 py-16 text-center shadow-[0_0_0_1px_rgba(59,130,246,0.2),0_24px_80px_-20px_rgba(37,99,235,0.45)] md:px-16 md:py-20">
            <div className="pointer-events-none absolute -left-24 top-0 h-px w-[60%] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
            <div className="pointer-events-none absolute -left-20 top-0 h-48 w-48 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />
            <h2 className="relative text-2xl font-bold tracking-tight text-white md:text-3xl">
              {lp.ctaHeadline ?? t.ctaDefault}
            </h2>
            {lp.ctaSubheadline && (
              <p className="relative mx-auto mt-6 max-w-[42rem] text-base leading-[1.7] text-[#E5E7EB]">
                {lp.ctaSubheadline}
              </p>
            )}
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="relative mt-10 inline-flex min-h-[56px] cursor-pointer items-center justify-center gap-2 rounded-xl border-0 bg-white px-10 py-4 text-base font-semibold text-black shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] active:translate-y-0"
            >
              <Mail className="h-5 w-5" />
              {ctaButtonText}
            </button>
            <p className="relative mt-4 text-sm font-medium text-blue-100/80">
              {t.ctaMicrocopy}
            </p>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
