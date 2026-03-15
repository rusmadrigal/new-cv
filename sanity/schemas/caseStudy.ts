import { defineField, defineType } from "sanity";

// Result item: igual que en el home (metric, value, change)
export const caseStudyResult = defineType({
  name: "caseStudyResult",
  type: "object",
  title: "Result",
  fields: [
    defineField({
      name: "metric",
      type: "string",
      title: "Metric",
      description: "Ej: LCP Improvement, Organic Traffic, Pages in Top 10",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "value",
      type: "string",
      title: "Value",
      description: "Ej: 3.2s → 1.8s, +127%, +89%",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "change",
      type: "string",
      title: "Change",
      description: "Ej: +44%, 6 months, 12 months, resolved",
    }),
  ],
  preview: {
    select: { metric: "metric", value: "value" },
    prepare({ metric, value }) {
      return { title: metric, subtitle: value };
    },
  },
});

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "styling", title: "Styling" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      group: "content",
      description: "Título principal del case study (ej: E-commerce Platform Core Web Vitals Optimization)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "URL Slug",
      group: "content",
      description: "Para la URL: /case-studies/[slug]. Genera desde el título o edita a mano.",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "client",
      type: "string",
      title: "Client",
      group: "content",
      description: "Nombre del cliente (ej: Global Fashion Retailer, B2B SaaS Company)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "challenge",
      type: "text",
      title: "Challenge",
      group: "content",
      description: "Texto que se muestra como “Challenge” en el home y en la página del case study.",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "solution",
      type: "text",
      title: "Solution",
      group: "content",
      description: "Texto que se muestra como “Solution” en el home y en la página del case study.",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "results",
      type: "array",
      title: "Results",
      group: "content",
      description: "Métricas (metric, value, change). Se muestran en la sección “Results” igual que en el home.",
      of: [{ type: "caseStudyResult" }],
      validation: (Rule) => Rule.min(0).max(6),
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      group: "content",
      description: "Etiquetas debajo del bloque (ej: Core Web Vitals, Next.js, Performance).",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "icon",
      type: "string",
      title: "Icon",
      group: "styling",
      description: "Icono del card en el home: Zap, Search o Trending Up.",
      options: {
        list: [
          { title: "Zap (rayo)", value: "zap" },
          { title: "Search (lupa)", value: "search" },
          { title: "Trending Up (tendencia)", value: "trendingUp" },
        ],
        layout: "radio",
      },
      initialValue: "zap",
    }),
    defineField({
      name: "gradient",
      type: "string",
      title: "Gradient",
      group: "styling",
      description: "Colores del icono y de los valores en Results. Mismo aspecto que en el home.",
      options: {
        list: [
          { title: "Blue → Cyan", value: "from-blue-500 to-cyan-500" },
          { title: "Purple → Pink", value: "from-purple-500 to-pink-500" },
          { title: "Orange → Red", value: "from-orange-500 to-red-500" },
          { title: "Green → Emerald", value: "from-green-500 to-emerald-500" },
        ],
        layout: "radio",
      },
      initialValue: "from-blue-500 to-cyan-500",
    }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Mostrar en el home",
      group: "content",
      description: "Si está activo, aparece en la sección Case Studies del home.",
      initialValue: true,
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Order",
      group: "content",
      description: "Orden en home y en lista (número menor = primero).",
    }),
  ],
  orderings: [
    { title: "Order (asc)", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
    { title: "Order (desc)", name: "orderDesc", by: [{ field: "order", direction: "desc" }] },
    { title: "Title", name: "titleAsc", by: [{ field: "title", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", client: "client" },
    prepare({ title, client }) {
      return {
        title,
        subtitle: client,
      };
    },
  },
});
