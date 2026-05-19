"use client";

import dynamic from "next/dynamic";
import type { CaseStudy, Locale } from "@/lib/sanity";

/**
 * Secciones bajo el hero con import dinámico: menos JS inicial (INP/TBT) y mismos chunks
 * en / y /es. El HTML sigue generándose en el servidor (ssr por defecto).
 */
const AboutSection = dynamic(() =>
  import("./AboutSection").then((m) => ({ default: m.AboutSection })),
);
const VideoSection = dynamic(() =>
  import("./VideoSection").then((m) => ({ default: m.VideoSection })),
);
const SkillsSection = dynamic(() =>
  import("./SkillsSection").then((m) => ({ default: m.SkillsSection })),
);
const ExperienceSection = dynamic(() =>
  import("./ExperienceSection").then((m) => ({ default: m.ExperienceSection })),
);
const CaseStudiesSection = dynamic(() =>
  import("./CaseStudiesSection").then((m) => ({ default: m.CaseStudiesSection })),
);
const ToolsSection = dynamic(() =>
  import("./ToolsSection").then((m) => ({ default: m.ToolsSection })),
);
const ExpertiseSection = dynamic(() =>
  import("./ExpertiseSection").then((m) => ({ default: m.ExpertiseSection })),
);
const EducationSection = dynamic(() =>
  import("./EducationSection").then((m) => ({ default: m.EducationSection })),
);
const RecommendationsSection = dynamic(() =>
  import("./RecommendationsSection").then((m) => ({
    default: m.RecommendationsSection,
  })),
);
const ContactSection = dynamic(() =>
  import("./ContactSection").then((m) => ({ default: m.ContactSection })),
);

export function HomeBelowFold({
  locale = "en",
  hasCaseStudies,
  featuredCaseStudies,
}: {
  locale?: Locale;
  hasCaseStudies: boolean;
  featuredCaseStudies: CaseStudy[];
}) {
  return (
    <>
      <AboutSection locale={locale} />
      <VideoSection locale={locale} />
      <SkillsSection locale={locale} />
      <ExperienceSection locale={locale} />
      {hasCaseStudies ? (
        <CaseStudiesSection
          caseStudies={featuredCaseStudies}
          locale={locale}
        />
      ) : null}
      <ToolsSection locale={locale} />
      <ExpertiseSection locale={locale} />
      <EducationSection locale={locale} />
      <RecommendationsSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
