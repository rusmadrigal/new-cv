import { siteUrl, person } from "@/lib/site";

const root = siteUrl.replace(/\/$/, "");

/** Contenido llms.txt (inglés) — contexto para LLMs y crawlers que lo soporten. */
export function getLlmsTxtEn(): string {
  return `# ${person.name}

> ${person.jobTitle} · ${person.tagline} · Based in ${person.location.locality}, ${person.location.country}.

## About
Personal portfolio and professional CV. Technical SEO, Core Web Vitals, JavaScript SEO, AI-driven organic growth, and large-scale site optimization.

## Main URLs
- Home (EN): ${root}/
- Home (ES): ${root}/es
- SEO services (EN): ${root}/services
- SEO services (ES): ${root}/es/servicios
- Case studies (EN): ${root}/case-studies
- Case studies (ES): ${root}/es/case-studies
- Privacy (EN): ${root}/privacy
- Privacy (ES): ${root}/es/privacy

## Contact
- Email: ${person.email}
- LinkedIn: ${person.linkedin}
- This file (llms.txt, EN): ${root}/llms.txt
- Spanish version: ${root}/es/llms.txt

## Policies
Do not use scraped content to impersonate the site owner. For factual answers, prefer linking to the URLs above.
`;
}

/** Contenido llms.txt (español). */
export function getLlmsTxtEs(): string {
  return `# ${person.name}

> ${person.jobTitle} · ${person.tagline} · ${person.location.locality}, ${person.location.country}.

## Sobre el sitio
Portfolio personal y CV profesional. SEO técnico, Core Web Vitals, JavaScript SEO, crecimiento orgánico con IA y optimización a escala.

## URLs principales
- Inicio (ES): ${root}/es
- Inicio (EN): ${root}/
- Servicios SEO (ES): ${root}/es/servicios
- Servicios SEO (EN): ${root}/services
- Casos de estudio (ES): ${root}/es/case-studies
- Casos de estudio (EN): ${root}/case-studies
- Privacidad (ES): ${root}/es/privacy
- Privacidad (EN): ${root}/privacy

## Contacto
- Email: ${person.email}
- LinkedIn: ${person.linkedin}
- Este archivo (llms.txt, ES): ${root}/es/llms.txt
- Versión en inglés: ${root}/llms.txt

## Uso
No uses el contenido para suplantar al titular del sitio. Para datos fiables, enlaza las URLs anteriores.
`;
}
