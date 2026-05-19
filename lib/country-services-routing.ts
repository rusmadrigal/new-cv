import type { Locale } from "@/lib/sanity";
import { landingServicesBasePath } from "@/lib/landing-page";

/** ISO 3166-1 alpha-2 → clave `country` en Sanity (`landingPage.country`). */
export const ISO_TO_LANDING_COUNTRY: Record<string, string> = {
  CR: "costa-rica",
  MX: "mexico",
  ES: "espana",
  CO: "colombia",
  AR: "argentina",
  CL: "chile",
  PA: "panama",
};

export type LandingCountrySlug = {
  country: string;
  slug: string;
};

export function buildSlugByCountryKey(
  pages: readonly LandingCountrySlug[],
): Record<string, string> {
  const map: Record<string, string> = {};
  for (const page of pages) {
    map[page.country] = page.slug;
  }
  return map;
}

/**
 * Resuelve la URL del CTA «Servicios SEO» según el país del visitante.
 * Si no hay país, landing o slug publicado, devuelve el listado (`/es/servicios`).
 */
export function resolveLocalizedServicesHref(
  locale: Locale,
  countryIso: string | null | undefined,
  pages: readonly LandingCountrySlug[],
): string {
  const base = landingServicesBasePath(locale);
  const slugByCountry = buildSlugByCountryKey(pages);

  if (!countryIso?.trim()) {
    return base;
  }

  const countryKey = ISO_TO_LANDING_COUNTRY[countryIso.trim().toUpperCase()];
  if (!countryKey) {
    return base;
  }

  const slug = slugByCountry[countryKey];
  if (!slug) {
    return base;
  }

  return `${base}/${slug}`;
}

/** Cabeceras habituales en edge (Vercel, Cloudflare). */
export function getVisitorCountryIso(
  headers: Headers,
): string | null {
  return (
    headers.get("x-vercel-ip-country") ??
    headers.get("cf-ipcountry") ??
    null
  );
}
