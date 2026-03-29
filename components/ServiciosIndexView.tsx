"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Layers,
  MapPin,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";
import type { LandingPage, Locale } from "@/lib/sanity";
import { getLandingCountryLabel, landingServicesBasePath } from "@/lib/landing-page";
import { serviciosIndexCopy, UPCOMING_MARKET_COUNTRIES } from "@/lib/servicios-index-copy";
import { SeoContactModal } from "@/components/SeoContactModal";

const STEP_ICONS = [Search, Layers, Zap, Activity] as const;

type ServiciosIndexViewProps = {
  locale: Locale;
  landingPages: LandingPage[];
};

export function ServiciosIndexView({ locale, landingPages }: ServiciosIndexViewProps) {
  const t = serviciosIndexCopy[locale];
  const basePath = landingServicesBasePath(locale);
  const [contactOpen, setContactOpen] = useState(false);

  const publishedCountrySet = useMemo(
    () => new Set(landingPages.map((lp) => lp.country)),
    [landingPages],
  );

  const placeholders = useMemo(
    () =>
      UPCOMING_MARKET_COUNTRIES.filter((p) => !publishedCountrySet.has(p.country)),
    [publishedCountrySet],
  );

  const cardDescription = (lp: LandingPage) => {
    const sub = lp.heroSubheadline?.trim();
    if (sub) return sub;
    return locale === "es"
      ? "SEO estratégico y local para tu mercado."
      : "Strategic and local SEO for your market.";
  };

  return (
    <>
      <SeoContactModal
        open={contactOpen}
        onOpenChange={setContactOpen}
        locale={locale}
      />

      <main
        id="main-content"
        className="pb-14 pt-14 sm:pt-16 md:pt-20 sm:pb-16"
      >
        {/* Hero: pt 80–100px below nav clearance for premium breathing room */}
        <section className="relative overflow-hidden pb-8 pt-[5rem] sm:pb-10 sm:pt-[5.5rem] lg:pt-[6.25rem]">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.28),transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-[40%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/12 blur-[90px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_30%,black,transparent)]"
            aria-hidden
          />

          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
            <p className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-blue-400/90 sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              {t.heroKicker}
            </p>
            {/* 24–40px between kicker and H1 for clearer hierarchy */}
            <h1 className="mt-7 text-balance text-3xl font-semibold tracking-tight text-white sm:mt-8 md:mt-10 md:text-4xl">
              {t.heroTitle}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-[#D1D5DB] sm:mt-5 sm:text-base">
              {t.heroLead}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-xs text-gray-500 sm:text-sm">
              {t.heroContext}
            </p>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-y border-white/[0.07] bg-white/[0.02] py-3.5 sm:py-4">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 sm:gap-x-8 sm:px-6">
            {t.trust.map((item) => (
              <span
                key={item}
                className="text-[13px] font-medium tracking-tight text-gray-400 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Markets grid */}
        <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-12">
          {landingPages.length === 0 ? (
            <div className="mb-8 text-center">
              <p className="text-sm leading-relaxed text-gray-500">{t.emptyTitle}</p>
              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="mt-4 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
              >
                {t.emptyCta}
              </button>
            </div>
          ) : null}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {landingPages.map((lp) => {
              const label = getLandingCountryLabel(lp);
              return (
                <Link
                  key={lp._id}
                  href={`${basePath}/${lp.slug}`}
                  className="group relative flex min-h-[140px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-gray-900/60 to-black/50 p-6 shadow-sm shadow-black/30 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-blue-500/45 hover:shadow-[0_20px_48px_-24px_rgba(59,130,246,0.45)] md:p-7"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition duration-300 group-hover:bg-blue-500/20" />
                  <div className="relative flex flex-1 flex-col">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/20 transition duration-300 group-hover:bg-blue-500/25 group-hover:ring-blue-400/30">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <ArrowRight className="h-5 w-5 shrink-0 text-gray-500 transition duration-300 ease-out group-hover:translate-x-1 group-hover:text-blue-400" />
                    </div>
                    <p className="text-lg font-semibold leading-snug text-white transition duration-300 group-hover:text-blue-100">
                      {lp.heroHeadline}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-blue-400/80">
                      {label}
                    </p>
                    <p className="mt-3 line-clamp-1 text-sm leading-relaxed text-gray-400">
                      {cardDescription(lp)}
                    </p>
                  </div>
                </Link>
              );
            })}

            {placeholders.map((p) => {
              const fakeLp = { country: p.country, countryLabel: null };
              const label = getLandingCountryLabel(fakeLp);
              return (
                <div
                  key={p.country}
                  className="relative flex min-h-[140px] flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-gray-950/80 to-black/60 p-6 opacity-[0.55] md:p-7"
                  aria-disabled
                >
                  <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_8px,rgba(255,255,255,0.02)_8px,rgba(255,255,255,0.02)_9px)]" />
                  <div className="relative flex flex-1 flex-col">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] text-gray-600">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                        {t.upcomingLabel}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-gray-500">{label}</p>
                    <p className="mt-3 text-sm text-gray-600">{t.upcomingHint}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </section>

        <div className="mx-auto mt-10 max-w-5xl border-t border-white/[0.07] px-4 sm:px-6" />

        {/* How I work */}
        <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-12">
          <h2 className="mb-6 text-center text-lg font-semibold tracking-tight text-white sm:text-xl">
            {t.howTitle}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {t.howSteps.map((step, i) => {
              const Icon = STEP_ICONS[i % STEP_ICONS.length];
              return (
                <div
                  key={step.title}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-4 text-center transition duration-200 hover:border-white/15 hover:bg-white/[0.05] sm:px-4"
                >
                  <div className="mx-auto mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400/90">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="mt-1 text-[11px] leading-snug text-gray-500 sm:text-xs">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <div className="mx-auto mt-10 max-w-5xl border-t border-white/[0.07] px-4 sm:px-6" />

        {/* Mini CTA */}
        <section className="mx-auto max-w-5xl px-4 pb-4 pt-10 sm:px-6 sm:pt-12">
          <div className="rounded-2xl border border-blue-500/25 bg-gradient-to-br from-blue-950/40 via-black/40 to-violet-950/20 px-6 py-8 text-center shadow-[0_0_0_1px_rgba(59,130,246,0.12)] sm:px-10 sm:py-10">
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              {t.ctaTitle}
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#D1D5DB]">
              {t.ctaSubtitle}
            </p>
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="mt-6 inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-xl border-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(37,99,235,0.55)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_-12px_rgba(37,99,235,0.6)]"
            >
              {t.ctaButton}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
