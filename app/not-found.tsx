import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { NotFoundContent } from "@/components/NotFoundContent";
import { getCaseStudies } from "@/lib/sanity";
import { siteTitleSuffix } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `Page not found | ${siteTitleSuffix}` },
  description:
    "The page you are looking for does not exist or has been moved. Return to the home page or get in touch.",
  robots: { index: false, follow: true },
};

export default async function NotFound() {
  const caseStudies = await getCaseStudies("en");
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation hasCaseStudies={caseStudies.length > 0} />
      <NotFoundContent locale="en" />
      <Footer locale="en" />
    </div>
  );
}
