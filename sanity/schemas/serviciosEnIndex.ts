import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Logical singleton: one document for the /services listing (English).
 */
export const serviciosEnIndex = defineType({
  name: "serviciosEnIndex",
  title: "Services page (EN) — /services",
  type: "document",
  description:
    "SEO block content below “How I work” on the English services page.",
  fields: [
    defineField({
      name: "seoSectionTitle",
      type: "string",
      title: "SEO block title",
      description: "e.g. SEO services for companies in Latin America",
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: "seoSectionParagraphs",
      type: "array",
      title: "Paragraphs",
      description: "One array item = one paragraph, in display order.",
      of: [
        defineArrayMember({
          type: "text",
          rows: 5,
        }),
      ],
      validation: (Rule) => Rule.max(8),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Services (EN) — index",
        subtitle: "/services",
      };
    },
  },
});
