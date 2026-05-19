/**
 * Site config for SEO, canonical URLs, and social sharing.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.rusmadrigal.com).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rusmadrigal.com";

export const siteName = "Rusben Madrigal";

/** Sufijo del `<title>` cuando una página define `title` (metadata template). */
export const siteTitleSuffix = "Rus Madrigal";
export const siteTitle =
  "Rusben Madrigal | Senior Technical SEO | AI & Growth Strategy";
export const siteDescription =
  "Senior Technical SEO with 10+ years driving growth for large websites. Expert in AI-driven SEO, Core Web Vitals optimization, and JavaScript SEO.";

export const siteTitleEs =
  "Consultor SEO Profesional en Costa Rica | Rusben Madrigal";
export const siteDescriptionEs =
  "Más que una agencia SEO: consultoría SEO estratégica en Costa Rica con enfoque técnico, contenido e IA. Más de 10 años de experiencia.";

/** Keywords for Spanish version (meta keywords). */
export const siteKeywordsEs = [
  "consultor SEO Costa Rica",
  "consultoría SEO Costa Rica",
  "consultoría SEO profesional Costa Rica",
  "SEO estratégico Costa Rica",
  "agencia SEO Costa Rica",
  "SEO para empresas Costa Rica",
  "Core Web Vitals",
  "JavaScript SEO",
  "Rusben Madrigal",
];

export const person = {
  name: "Rusben Madrigal",
  jobTitle: "Senior Technical SEO",
  tagline: "AI & Growth Strategy",
  email: "hello@rusmadrigal.com",
  image: "/rusben.jpg",
  linkedin: "https://www.linkedin.com/in/rusmadrigal/",
  github: "https://github.com/rusmadrigal",
  /** Locale-specific YouTube channel (Spanish vs English content). */
  youtube: {
    en: "https://www.youtube.com/@rusmadrigalen",
    es: "https://www.youtube.com/@rusmadrigal",
  },
  location: { locality: "San Jose", country: "Costa Rica" },
};

/** E.164 phone for JSON-LD / contact (Costa Rica). */
export const businessPhone = "+50687773420";
