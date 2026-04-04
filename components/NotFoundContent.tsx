import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import type { Locale } from "@/lib/sanity";
import { notFoundCopy } from "@/lib/not-found-copy";

export function NotFoundContent({ locale }: { locale: Locale }) {
  const t = notFoundCopy[locale];
  const homeHref = locale === "es" ? "/es" : "/";
  const contactHref = `${homeHref}#contact`;
  const privacyHref = locale === "es" ? "/es/privacy" : "/privacy";

  return (
    <main
      id="main-content"
      className="relative flex min-h-[calc(100dvh-5rem)] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-24 sm:pt-28 md:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_40%,black,transparent)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-lg text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400/90">
          {t.eyebrow}
        </p>
        <p
          className="mt-6 bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-7xl font-bold leading-none tracking-tight text-transparent sm:text-8xl md:text-9xl"
          aria-hidden
        >
          404
        </p>
        <h1 className="mt-4 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {t.title}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-base leading-[1.7] text-[#D1D5DB]">
          {t.description}
        </p>

        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href={homeHref}
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(37,99,235,0.55)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_-12px_rgba(37,99,235,0.6)]"
          >
            <Home className="h-4 w-4 shrink-0" aria-hidden />
            {t.backHome}
          </Link>
          <Link
            href={contactHref}
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-8 text-sm font-semibold text-white transition duration-200 hover:border-white/25 hover:bg-white/[0.07]"
          >
            {t.contact}
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          <Link
            href={privacyHref}
            className="text-gray-400 underline-offset-4 transition hover:text-gray-300 hover:underline"
          >
            {t.privacy}
          </Link>
        </p>
      </div>
    </main>
  );
}
