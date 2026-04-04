import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { NotFoundContent } from "@/components/NotFoundContent";
import { getCaseStudies } from "@/lib/sanity";
import { siteTitleSuffix } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `Página no encontrada | ${siteTitleSuffix}` },
  description:
    "La página que buscas no existe o se ha movido. Vuelve al inicio o escríbeme.",
  robots: { index: false, follow: true },
};

export default async function EsNotFound() {
  const caseStudies = await getCaseStudies("es");
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation hasCaseStudies={caseStudies.length > 0} />
      <NotFoundContent locale="es" />
      <Footer locale="es" />
    </div>
  );
}
