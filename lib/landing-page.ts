import type { Locale } from "@/lib/sanity";

export const LANDING_COUNTRY_LABELS: Record<string, string> = {
  "costa-rica": "Costa Rica",
  mexico: "México",
  espana: "España",
  colombia: "Colombia",
  argentina: "Argentina",
  chile: "Chile",
  panama: "Panamá",
};

export function getLandingCountryLabel(lp: {
  country: string;
  countryLabel?: string | null;
}) {
  if (lp.country === "otro" && lp.countryLabel) return lp.countryLabel;
  return LANDING_COUNTRY_LABELS[lp.country] ?? lp.country;
}

export function landingServicesBasePath(locale: Locale) {
  return locale === "es" ? "/es/servicios" : "/servicios";
}
