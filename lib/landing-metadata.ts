import type { Metadata } from "next";
import { getLandingPageBySlug } from "@/lib/sanity";
import type { LandingPage, Locale } from "@/lib/sanity";
import { siteUrl, siteName, person, siteRobots } from "@/lib/site";
import { getLandingCountryLabel } from "@/lib/landing-page";

/** Meta descriptions fijas por slug (ES) cuando el copy en código es la fuente de verdad. */
const ES_LANDING_DESCRIPTION_OVERRIDES: Record<string, string> = {
  "seo-costa-rica":
    "Consultor SEO en Costa Rica. Estrategia, SEO técnico y AI Search para empresas que buscan crecimiento orgánico sostenible y visibilidad digital.",
};

/** Normaliza a minúsculas (BCP 47 en HTML suele usarse en minúsculas, p. ej. es-cr). */
function hreflangKey(lp: LandingPage | null, fallback: "es" | "en"): string {
  const raw = lp?.hreflang?.trim();
  if (!raw) return fallback;
  return raw.toLowerCase();
}

/**
 * Hreflang para landings. Las claves de `languages` salen del campo
 * `hreflang` en Sanity (p. ej. es-cr); si está vacío: es / en según documento.
 */
export async function buildLandingSlugMetadata(
  slug: string,
  locale: Locale,
): Promise<Metadata | null> {
  const [lpEs, lpEn] = await Promise.all([
    getLandingPageBySlug(slug, "es"),
    getLandingPageBySlug(slug, "en"),
  ]);

  const lp = locale === "es" ? lpEs : lpEn;
  if (!lp) return null;

  const urlEs = `${siteUrl}/es/servicios/${slug}`;
  const urlEn = `${siteUrl}/services/${slug}`;

  const languages: Record<string, string> = {};
  if (lpEs) languages[hreflangKey(lpEs, "es")] = urlEs;
  if (lpEn) languages[hreflangKey(lpEn, "en")] = urlEn;
  if (lpEs && lpEn) {
    languages["x-default"] = urlEn;
  } else if (lpEs) {
    languages["x-default"] = urlEs;
  } else if (lpEn) {
    languages["x-default"] = urlEn;
  }

  const pageUrl = locale === "es" ? urlEs : urlEn;

  const title = lp.seoTitle ?? lp.heroHeadline;
  const description =
    (locale === "es" ? ES_LANDING_DESCRIPTION_OVERRIDES[slug] : undefined) ??
    lp.seoDescription ??
    (locale === "es"
      ? `${lp.heroHeadline}. Servicios de SEO estratégico y local para empresas en ${getLandingCountryLabel(lp)}.`
      : `${lp.heroHeadline}. Strategic and local SEO for businesses in ${getLandingCountryLabel(lp)}.`);
  const desc = description.slice(0, 155);
  const ogImage = lp.ogImage ?? `${siteUrl}${person.image}`;

  return {
    title,
    description: desc,
    alternates: {
      languages,
    },
    openGraph: {
      type: "website",
      url: pageUrl,
      title,
      description: desc,
      siteName,
      images: [
        { url: ogImage, width: 1200, height: 630, alt: lp.heroHeadline },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
    },
    robots: siteRobots,
  };
}
