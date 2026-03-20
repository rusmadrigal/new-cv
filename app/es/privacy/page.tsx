import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { siteUrl, siteName, person } from "@/lib/site";
import { getPrivacyContent } from "@/lib/privacy-content";

const baseUrlEs = `${siteUrl}/es`;

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad y uso de cookies de www.rusmadrigal.com.",
  alternates: {
    canonical: `${baseUrlEs}/privacy`,
    languages: { en: `${siteUrl}/privacy`, es: `${baseUrlEs}/privacy` },
  },
  openGraph: {
    url: `${baseUrlEs}/privacy`,
    title: `Política de privacidad | ${siteName}`,
    description:
      "Política de privacidad y uso de cookies de www.rusmadrigal.com.",
    siteName,
    images: [
      {
        url: `${siteUrl}${person.image}`,
        width: 1200,
        height: 630,
        alt: `${person.name} - ${siteName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Política de privacidad | ${siteName}`,
    description:
      "Política de privacidad y uso de cookies de www.rusmadrigal.com.",
  },
};

export default function PrivacyPageEs() {
  const content = getPrivacyContent("es");

  return (
    <>
      <Navigation hasCaseStudies />
      <main
        id="main-content"
        className="min-h-screen bg-black text-white pt-24 pb-12 sm:pb-16"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/es"
            className="inline-block text-sm text-gray-500 hover:text-white transition-colors mb-6 sm:mb-8"
          >
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {content.title}
          </h1>
          <p className="text-gray-500 text-sm mb-8">{content.lastUpdated}</p>

          <div className="space-y-8">
            {content.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl font-semibold text-white mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>

          <p className="mt-10 text-gray-500 text-sm">
            Contacto:{" "}
            <a
              href={`mailto:${person.email}`}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              {person.email}
            </a>
          </p>
        </div>
      </main>
      <Footer locale="es" />
    </>
  );
}
