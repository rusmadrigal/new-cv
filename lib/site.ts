/**
 * Site config for SEO and social sharing.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.rusmadrigal.com).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rusmadrigal.com";

export const siteName = "Rusben Madrigal";

/** Sufijo del `<title>` cuando una página define `title` (metadata template). */
export const siteTitleSuffix = "Rus Madrigal";
export const siteTitle =
  "Rusben Madrigal | Senior Technical SEO | AI-Driven SEO, Web Performance & Growth";
export const siteDescription =
  "Senior SEO professional with 10+ years specializing in Technical SEO for large-scale international websites. Expert in JavaScript SEO, Core Web Vitals, log analysis, structured data, and AI-assisted workflows.";

export const siteTitleEs =
  "Consultor SEO Profesional en Costa Rica | Rusben Madrigal";
export const siteDescriptionEs =
  "Más que una agencia SEO: consultoría SEO estratégica en Costa Rica con enfoque técnico, contenido e IA. Más de 10 años de experiencia.";

export const person = {
  name: "Rusben Madrigal",
  jobTitle: "Senior Technical SEO",
  tagline: "AI-Driven SEO, Web Performance & Growth",
  email: "rusbenmadrigal@gmail.com",
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

/** Single CV PDF served for EN and ES download buttons. */
export const resumePdfUrl = "/resume.pdf";
export const resumeDownloadFilename = "Rusben_Madrigal_CV.pdf";

/** Global robots policy — site is not indexed by search engines. */
export const siteRobots = {
  index: false,
  follow: true,
  googleBot: {
    index: false,
    follow: true,
  },
} as const;
