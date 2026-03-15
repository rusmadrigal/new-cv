/**
 * Site config for SEO, canonical URLs, and social sharing.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.rusmadrigal.com).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rusmadrigal.com";

export const siteName = "Rusben Madrigal";
export const siteTitle = "Rusben Madrigal | Senior Technical SEO | AI-Driven SEO & Growth";
export const siteDescription =
  "Senior Technical SEO with 10+ years driving growth for large websites. Expert in AI-driven SEO, Core Web Vitals optimization, and JavaScript SEO.";

export const siteTitleEs = "Rusben Madrigal | SEO Técnico Senior | SEO con IA y Growth";
export const siteDescriptionEs =
  "SEO Técnico Senior con 10+ años impulsando crecimiento en sitios web grandes. Experto en SEO con IA, Core Web Vitals y optimización JavaScript SEO.";

/** Keywords for Spanish version (meta keywords). */
export const siteKeywordsEs = [
  "SEO técnico",
  "SEO con IA",
  "Rendimiento web",
  "Core Web Vitals",
  "JavaScript SEO",
  "Crecimiento orgánico",
  "Rusben Madrigal",
  "Consultor SEO",
  "Costa Rica",
];

export const person = {
  name: "Rusben Madrigal",
  jobTitle: "Senior Technical SEO",
  tagline: "AI-Driven SEO, Web Performance & Growth",
  email: "rusbenmadrigal@gmail.com",
  image: "/rusben.jpg",
  linkedin: "https://www.linkedin.com/in/rusmadrigal/",
  github: "https://github.com/rusmadrigal",
  location: { locality: "San Jose", country: "Costa Rica" },
};
