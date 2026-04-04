import { SiteJsonLdGraph } from "@/components/JsonLd";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { HomeBelowFold } from "@/components/HomeBelowFold";
import { Footer } from "@/components/Footer";
import { getCaseStudies } from "@/lib/sanity";

export default async function EsHome() {
  const allCaseStudies = await getCaseStudies("es");
  const hasCaseStudies = allCaseStudies.length > 0;
  const featuredCaseStudies = allCaseStudies.filter((s) => s.featured);

  return (
    <>
      <SiteJsonLdGraph />
      <Navigation hasCaseStudies={hasCaseStudies} />
      <main id="main-content">
        <HeroSection locale="es" />
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
