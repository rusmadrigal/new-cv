import { SiteJsonLdGraph } from "@/components/JsonLd";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { HomeBelowFold } from "@/components/HomeBelowFold";
import { Footer } from "@/components/Footer";
import { getCaseStudies } from "@/lib/sanity";

export default async function Home() {
  const allCaseStudies = await getCaseStudies();
  const hasCaseStudies = allCaseStudies.length > 0;
  const featuredCaseStudies = allCaseStudies.filter((s) => s.featured);

  return (
    <>
      <SiteJsonLdGraph />
      <Navigation hasCaseStudies={hasCaseStudies} />
      <main id="main-content">
        <HeroSection />
        <HomeBelowFold
          hasCaseStudies={hasCaseStudies}
          featuredCaseStudies={featuredCaseStudies}
        />
      </main>
      <Footer />
    </>
  );
}
