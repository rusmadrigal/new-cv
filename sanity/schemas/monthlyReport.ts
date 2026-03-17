import { defineField, defineType } from "sanity";
import { blockContent } from "./blockContent";

export const monthlyReport = defineType({
  name: "monthlyReport",
  title: "Monthly Report",
  type: "document",
  fields: [
    defineField({
      name: "client",
      type: "reference",
      title: "Client",
      to: [{ type: "client" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "e.g. March 2025 SEO Report",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "month",
      type: "string",
      title: "Month",
      description: "YYYY-MM for sorting (e.g. 2025-03)",
      validation: (Rule) => Rule.required().regex(/^\d{4}-\d{2}$/, "Use YYYY-MM"),
    }),
    defineField({
      name: "fileUrl",
      type: "url",
      title: "Report file URL",
      description: "Link to PDF or document (optional if using content)",
    }),
    defineField({
      name: "content",
      type: "blockContent",
      title: "Content",
      description: "Optional rich text summary instead of or in addition to file",
    }),
  ],
  orderings: [
    {
      title: "Month, newest first",
      name: "monthDesc",
      by: [{ field: "month", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", month: "month" },
    prepare({ title, month }) {
      return { title: title ?? "Report", subtitle: month };
    },
  },
});
