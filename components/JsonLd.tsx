import { siteUrl, person } from "@/lib/site";

const baseUrlEs = `${siteUrl}/es`;

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    description: `${person.jobTitle} | ${person.tagline}. 10+ years experience with large-scale sites, Core Web Vitals & JavaScript SEO.`,
    url: siteUrl,
    image: `${siteUrl}${person.image}`,
    email: person.email,
    sameAs: [person.linkedin, person.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: person.location.locality,
      addressCountry: person.location.country,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: person.name,
    description: `${person.jobTitle} | ${person.tagline}`,
    url: siteUrl,
    publisher: {
      "@type": "Person",
      name: person.name,
      jobTitle: person.jobTitle,
      url: siteUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** Spanish version: Person schema with inLanguage and Spanish description (for /es). */
export function PersonJsonLdEs() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    description: `${person.jobTitle} | SEO con IA, rendimiento web y crecimiento. +10 años de experiencia en sitios a gran escala, Core Web Vitals y JavaScript SEO.`,
    url: siteUrl,
    inLanguage: "es",
    image: `${siteUrl}${person.image}`,
    email: person.email,
    sameAs: [person.linkedin, person.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: person.location.locality,
      addressCountry: person.location.country,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** Spanish version: WebSite schema for /es with inLanguage and Spanish description. */
export function WebSiteJsonLdEs() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: person.name,
    description: `${person.jobTitle} | SEO con IA, rendimiento web y crecimiento.`,
    url: baseUrlEs,
    inLanguage: "es",
    publisher: {
      "@type": "Person",
      name: person.name,
      jobTitle: person.jobTitle,
      url: siteUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
