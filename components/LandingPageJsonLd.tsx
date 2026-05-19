import type { LandingPage, Locale } from "@/lib/sanity";
import { buildLandingPageJsonLd } from "@/lib/jsonld";
import { siteUrl } from "@/lib/site";
import { landingServicesBasePath } from "@/lib/landing-page";

/** Server-rendered JSON-LD so crawlers always see the full graph in initial HTML. */
export function LandingPageJsonLd({
  lp,
  locale,
}: {
  lp: LandingPage;
  locale: Locale;
}) {
  const canonicalUrl = `${siteUrl}${landingServicesBasePath(locale)}/${lp.slug}`;
  const json = JSON.stringify(
    buildLandingPageJsonLd({ lp, locale, canonicalUrl }),
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
