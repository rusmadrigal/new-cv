import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { VideoSection } from "./components/VideoSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { ToolsSection } from "./components/ToolsSection";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <SkillsSection />
      <ExperienceSection />
      <CaseStudiesSection />
      <ToolsSection />
      <ExpertiseSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
