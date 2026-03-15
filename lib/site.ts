/**
 * Site config for SEO, canonical URLs, and social sharing.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://rusbenmadrigal.com).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rusbenmadrigal.com";

export const siteName = "Rusben Madrigal";
export const siteTitle = "Rusben Madrigal | Senior Technical SEO | AI-Driven SEO & Growth";
export const siteDescription =
  "Senior Technical SEO. AI-driven SEO, web performance & growth. 10+ years, large-scale sites, Core Web Vitals & JS SEO. Costa Rica.";

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
