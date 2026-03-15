import { siteUrl, person } from "@/lib/site";

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
