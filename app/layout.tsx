import type { Metadata } from "next";
import "./globals.css";
import {
  siteUrl,
  siteName,
  siteTitle,
  siteTitleSuffix,
  siteDescription,
  person,
} from "@/lib/site";
import { CookieConsent } from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitleSuffix}`,
  },
  description: siteDescription,
  keywords: [
    "Technical SEO",
    "AI-Driven SEO",
    "Web Performance",
    "Core Web Vitals",
    "JavaScript SEO",
    "Organic Growth",
    "Rusben Madrigal",
    "SEO Consultant",
    "Costa Rica",
  ],
  authors: [{ name: person.name, url: siteUrl }],
  creator: person.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
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
    title: siteTitle,
    description: siteDescription,
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
    canonical: siteUrl,
    languages: { en: siteUrl, es: `${siteUrl}/es` },
  },
  verification: {
    // Añade aquí cuando tengas: google: "tu-codigo",
    // yandex: "tu-codigo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className="min-h-screen bg-black text-white overflow-x-hidden"
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-white focus:text-black focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Skip to main content
        </a>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
