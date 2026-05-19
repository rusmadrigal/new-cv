import type { Locale } from "@/lib/sanity";

/** Copy for `/services` (EN) y `/es/servicios` (ES). */
export const serviciosIndexCopy: Record<
  Locale,
  {
    heroTitle: string;
    /** Subtitle (strong line under H1); empty = omit */
    heroSubheading: string;
    /** Optional single supporting line; empty = omit */
    heroSupportingLine: string;
    /** Fallback del bloque SEO (debajo de «Cómo trabajo» / How I work) si Sanity está vacío */
    seoSectionTitle: string;
    seoSectionParagraphs: readonly string[];
    trust: readonly string[];
    howTitle: string;
    howSteps: readonly { title: string; desc: string }[];
    upcomingLabel: string;
    upcomingHint: string;
    emptyTitle: string;
    emptyCta: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  }
> = {
  es: {
    heroTitle: "Servicios SEO en Latinoamérica",
    heroSubheading:
      "Consultoría SEO técnica y estratégica para crecer en mercados LATAM",
    heroSupportingLine: "",
    seoSectionTitle: "Servicios SEO para empresas en Latinoamérica",
    seoSectionParagraphs: [
      "Trabajar en Latinoamérica implica coordinar múltiples mercados, idiomas y criterios de negocio. Ofrezco servicios SEO Latinoamérica para equipos que necesitan gobernanza técnica, priorización y ejecución con impacto medible: arquitectura, rendimiento, indexación y contenido orientado a demanda cualificada, alineado a sprint y prioridades reales.",
      "Los servicios SEO LATAM que diseño combinan diagnóstico, roadmap y seguimiento, sin listas de tareas desconectadas del P&L. La consultoría SEO LATAM apunta a tráfico que sostiene conversión y expansión controlada cuando el foco es SEO para empresas en LATAM con operaciones multi‑mercado: más volumen con intención, no solo métricas de vanidad.",
      "Como consultor SEO Latinoamérica, integro SEO técnico LATAM y criterio comercial para que escalar no signifique duplicar esfuerzo a ciegas, sino replicar procesos con control de calidad y señales claras de rendimiento cuando la presencia debe sostenerse en varios países.",
    ],
    trust: [
      "10+ años",
      "SEO técnico LATAM",
      "Proyectos a gran escala",
      "IA + automatización",
    ],
    howTitle: "Cómo trabajo",
    howSteps: [
      {
        title: "Diagnóstico",
        desc: "Auditoría técnica, datos y priorización.",
      },
      {
        title: "Estrategia",
        desc: "Roadmap alineado a negocio y recursos.",
      },
      {
        title: "Ejecución",
        desc: "Implementación, contenido y medición.",
      },
      {
        title: "Seguimiento",
        desc: "Iteración y reporting claro.",
      },
    ],
    upcomingLabel: "Próximamente",
    upcomingHint: "Activá otro mercado en el roadmap.",
    emptyTitle: "Próximamente más mercados. Escribime y definimos el alcance.",
    emptyCta: "Agendar consulta",
    ctaTitle: "¿No estás seguro qué necesitas?",
    ctaSubtitle: "Te ayudo a definir la mejor estrategia para tu contexto.",
    ctaButton: "Agendar consulta",
  },
  en: {
    heroTitle: "SEO services in Latin America",
    heroSubheading:
      "Technical and strategic SEO consulting for growth in LATAM markets",
    heroSupportingLine: "",
    seoSectionTitle: "SEO services for companies in Latin America",
    seoSectionParagraphs: [
      "Operating across Latin America means coordinating multiple markets, languages, and business constraints. I deliver SEO for Latin America with technical governance, prioritization, and measurable execution: architecture, performance, indexing, and content aligned to qualified demand and real sprint priorities.",
      "The regional SEO programs I design combine diagnosis, roadmap, and follow-through—not disconnected task lists. Strategic SEO consulting for LATAM is aimed at traffic that supports conversion and controlled expansion when you run multi-country operations: more volume with intent, not vanity metrics alone.",
      "As an SEO consultant for Latin America, I combine technical SEO across LATAM with commercial judgment so scaling doesn’t mean blind duplication, but repeatable processes with quality control and clear performance signals when your presence must hold up across countries.",
    ],
    trust: [
      "10+ years",
      "Technical SEO",
      "Large-scale projects",
      "AI + automation",
    ],
    howTitle: "How I work",
    howSteps: [
      { title: "Diagnosis", desc: "Technical audit, data, prioritization." },
      { title: "Strategy", desc: "Roadmap aligned to business and resources." },
      { title: "Execution", desc: "Implementation, content, measurement." },
      { title: "Follow-up", desc: "Iteration and clear reporting." },
    ],
    upcomingLabel: "Coming soon",
    upcomingHint: "More markets on the roadmap.",
    emptyTitle:
      "More markets coming soon. Reach out and we’ll scope what fits.",
    emptyCta: "Book a consultation",
    ctaTitle: "Not sure what you need?",
    ctaSubtitle:
      "I’ll help you define the right strategy for your context and market.",
    ctaButton: "Book a consultation",
  },
};

/** Future markets (Sanity `country` keys). Shown as disabled until a landing exists. */
export const UPCOMING_MARKET_COUNTRIES: readonly {
  country: string;
}[] = [
  { country: "mexico" },
  { country: "colombia" },
  { country: "argentina" },
  { country: "chile" },
];
