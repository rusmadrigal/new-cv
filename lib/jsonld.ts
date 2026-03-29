import type { LandingPage, Locale } from "@/lib/sanity";
import { siteUrl, person, businessPhone } from "@/lib/site";
import {
  getLandingCountryLabel,
  landingServicesBasePath,
} from "@/lib/landing-page";

function absoluteAssetUrl(
  pathOrUrl: string | null | undefined,
): string | undefined {
  const u = pathOrUrl?.trim();
  if (!u) return undefined;
  if (u.startsWith("http://") || u.startsWith("https://")) return u;
  return `${siteUrl}${u.startsWith("/") ? "" : "/"}${u}`;
}

/** Alineado con hreflang de Sanity (p. ej. es-cr); si vacío, es | en. */
function landingPageInLanguage(lp: LandingPage, locale: Locale): string {
  const h = lp.hreflang?.trim();
  if (h) return h.replace(/_/g, "-").toLowerCase();
  return locale === "es" ? "es" : "en";
}

/** Stable @id for global Person (referenced by WebSite, ProfessionalService, etc.) */
export const SITE_PERSON_ID = `${siteUrl}/#person`;

/** Stable @id for global WebSite */
export const SITE_WEBSITE_ID = `${siteUrl}/#website`;

/** Single root graph: Person + WebSite (no duplicate Person on /es). */
export function buildSiteJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": SITE_PERSON_ID,
        name: person.name,
        jobTitle: person.jobTitle,
        description:
          "Senior Technical SEO — Rusben Madrigal. Large-scale technical SEO, Core Web Vitals, JavaScript SEO, and organic growth. Based in San José, Costa Rica.",
        url: siteUrl,
        image: `${siteUrl}${person.image}`,
        email: person.email,
        sameAs: [
          person.linkedin,
          person.github,
          person.youtube.en,
          person.youtube.es,
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: person.location.locality,
          addressCountry: "CR",
        },
      },
      {
        "@type": "WebSite",
        "@id": SITE_WEBSITE_ID,
        name: person.name,
        description: `${person.jobTitle} | ${person.tagline}`,
        url: siteUrl,
        inLanguage: ["en", "es"],
        publisher: { "@id": SITE_PERSON_ID },
      },
    ],
  };
}

const landingBreadcrumbLabels = {
  es: { home: "Inicio", services: "Servicios de SEO" },
  en: { home: "Home", services: "SEO services" },
} as const;

/**
 * Nodos específicos de la landing (sin Person/WebSite).
 * Se combinan con el grafo global en {@link buildLandingPageJsonLd}.
 */
function buildLandingPageGraphNodes(params: {
  lp: LandingPage;
  locale: Locale;
  canonicalUrl: string;
}): unknown[] {
  const { lp, locale, canonicalUrl } = params;
  const countryLabel = getLandingCountryLabel(lp);
  const labels = landingBreadcrumbLabels[locale];
  const servicesListUrl = `${siteUrl}${landingServicesBasePath(locale)}`;
  const inLanguage = landingPageInLanguage(lp, locale);

  const description =
    lp.seoDescription?.trim() ||
    (locale === "es"
      ? `Consultoría SEO estratégica en ${countryLabel}. SEO técnico, contenido e IA para crecimiento orgánico sostenible.`
      : `Strategic SEO consulting in ${countryLabel}. Technical SEO, content, and AI for sustainable organic growth.`);

  const pageName = lp.seoTitle?.trim() || lp.heroHeadline;
  const serviceId = `${canonicalUrl}#professional-service`;
  const webpageId = `${canonicalUrl}#webpage`;
  const breadcrumbId = `${canonicalUrl}#breadcrumb`;
  const faqPageId = `${canonicalUrl}#faqpage`;

  const og = absoluteAssetUrl(lp.ogImage);

  const professionalService: Record<string, unknown> = {
    "@type": "ProfessionalService",
    "@id": serviceId,
    name: pageName,
    url: canonicalUrl,
    image: `${siteUrl}${person.image}`,
    description,
    inLanguage,
    email: person.email,
    telephone: businessPhone,
    address: {
      "@type": "PostalAddress",
      addressLocality: person.location.locality,
      addressCountry: "CR",
    },
    areaServed: {
      "@type": "Country",
      name: countryLabel,
    },
    provider: { "@id": SITE_PERSON_ID },
    founder: { "@id": SITE_PERSON_ID },
    sameAs: [person.linkedin, person.github],
  };

  const webPage: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": webpageId,
    url: canonicalUrl,
    name: pageName,
    description,
    inLanguage,
    isPartOf: { "@id": SITE_WEBSITE_ID },
    about: { "@id": serviceId },
    breadcrumb: { "@id": breadcrumbId },
  };

  if (og) {
    webPage.primaryImageOfPage = {
      "@type": "ImageObject",
      url: og,
    };
  }

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: labels.home,
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: labels.services,
        item: servicesListUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pageName,
        item: canonicalUrl,
      },
    ],
  };

  const graph: unknown[] = [professionalService, webPage, breadcrumbList];

  if (lp.processSteps && lp.processSteps.length > 0) {
    const howToName =
      lp.processTitle?.trim() ||
      (locale === "es" ? "Cómo trabajamos" : "How we work");
    const howTo: Record<string, unknown> = {
      "@type": "HowTo",
      "@id": `${canonicalUrl}#howto`,
      name: howToName,
      step: lp.processSteps.map((step, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: step.title,
        text: step.description,
      })),
    };
    const sub = lp.processSubtitle?.trim();
    if (sub) howTo.description = sub;
    graph.push(howTo);
  }

  if (lp.faqs && lp.faqs.length > 0) {
    webPage.mainEntity = { "@id": faqPageId };
    graph.push({
      "@type": "FAQPage",
      "@id": faqPageId,
      url: canonicalUrl,
      inLanguage,
      isPartOf: { "@id": SITE_WEBSITE_ID },
      mainEntity: lp.faqs.map((item) => ({
        "@type": "Question",
        name: item.question.trim(),
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer.trim(),
        },
      })),
    });
  }

  return graph;
}

/**
 * Grafo completo en un solo JSON-LD: Person + WebSite (sitio) + servicio + WebPage
 * + BreadcrumbList + HowTo (opc.) + FAQPage (opc.). Así las herramientas que solo
 * leen un bloque detectan breadcrumb, página y FAQs.
 */
export function buildLandingPageJsonLd(params: {
  lp: LandingPage;
  locale: Locale;
  canonicalUrl: string;
}) {
  const site = buildSiteJsonLdGraph() as {
    "@context": string;
    "@graph": unknown[];
  };
  const nodes = buildLandingPageGraphNodes(params);
  return {
    "@context": "https://schema.org",
    "@graph": [...site["@graph"], ...nodes],
  };
}
