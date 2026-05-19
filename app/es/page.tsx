import { headers } from "next/headers";
import { SiteJsonLdGraph } from "@/components/JsonLd";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { HomeBelowFold } from "@/components/HomeBelowFold";
import { Footer } from "@/components/Footer";
import {
  getVisitorCountryIso,
  resolveLocalizedServicesHref,
} from "@/lib/country-services-routing";
import { getCaseStudies, getLandingPages } from "@/lib/sanity";

export default async function EsHome() {
  const [allCaseStudies, landingPages] = await Promise.all([
    getCaseStudies("es"),
    getLandingPages("es"),
  ]);
  const hasCaseStudies = allCaseStudies.length > 0;
  const featuredCaseStudies = allCaseStudies.filter((s) => s.featured);

  const headersList = await headers();
  const countryIso = getVisitorCountryIso(headersList);
  const servicesHref = resolveLocalizedServicesHref(
    "es",
    countryIso,
    landingPages,
  );

  return (
    <>
      <SiteJsonLdGraph />
      <Navigation hasCaseStudies={hasCaseStudies} />
      <main id="main-content">
        <HeroSection locale="es" servicesHref={servicesHref} />
        <HomeBelowFold
          locale="es"
          hasCaseStudies={hasCaseStudies}
          featuredCaseStudies={featuredCaseStudies}
        />
      </main>
      <Footer locale="es" />
    </>
  );
}
