import type { Metadata } from "next";
import {
  siteUrl,
  siteName,
  siteTitleEs,
  siteDescriptionEs,
  siteKeywordsEs,
  person,
} from "@/lib/site";
const baseUrlEs = `${siteUrl}/es`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitleEs,
    template: `%s | ${siteName}`,
  },
  description: siteDescriptionEs,
  keywords: siteKeywordsEs,
  authors: [{ name: person.name, url: siteUrl }],
  creator: person.name,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: baseUrlEs,
    siteName,
    title: siteTitleEs,
    description: siteDescriptionEs,
    images: [
      {
        url: `${siteUrl}${person.image}`,
        width: 1200,
        height: 630,
        alt: `${person.name} - ${person.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitleEs,
    description: siteDescriptionEs,
    images: [`${siteUrl}${person.image}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: baseUrlEs,
    languages: { en: siteUrl, es: baseUrlEs },
  },
  verification: {
    // Mismo que en inglés cuando tengas: google: "tu-codigo", yandex: "tu-codigo"
  },
};

export default function EsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
