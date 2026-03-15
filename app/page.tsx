import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { VideoSection } from "@/components/VideoSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { ToolsSection } from "@/components/ToolsSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { EducationSection } from "@/components/EducationSection";
import { RecommendationsSection } from "@/components/RecommendationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { getCaseStudies } from "@/lib/sanity";

export default async function Home() {
  const allCaseStudies = await getCaseStudies();
  const hasCaseStudies = allCaseStudies.length > 0;
  const featuredCaseStudies = allCaseStudies.filter((s) => s.featured);

  return (
    <>
      <Navigation hasCaseStudies={hasCaseStudies} />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <VideoSection />
        <SkillsSection />
        <ExperienceSection />
        {hasCaseStudies && (
          <CaseStudiesSection caseStudies={featuredCaseStudies} />
        )}
        <ToolsSection />
        <ExpertiseSection />
        <EducationSection />
        <RecommendationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
