import { defineField, defineType } from "sanity";

export const seoTask = defineType({
  name: "seoTask",
  title: "SEO Task",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
    defineField({
      name: "status",
      type: "string",
      title: "Status",
      options: {
        list: [
          { title: "In progress", value: "in_progress" },
          { title: "Completed", value: "completed" },
        ],
        layout: "radio",
      },
      initialValue: "in_progress",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "completedAt",
      type: "datetime",
      title: "Completed at",
      description: "When the task was completed (optional)",
      hidden: ({ document }) => document?.status !== "completed",
    }),
  ],
  orderings: [
    {
      title: "Status, then completed date",
      name: "statusAndCompleted",
      by: [
        { field: "status", direction: "asc" },
        { field: "completedAt", direction: "desc" },
      ],
    },
  ],
  preview: {
    select: { title: "title", status: "status" },
    prepare({ title, status }) {
      return {
        title: title ?? "Task",
        subtitle: status === "completed" ? "Completed" : "In progress",
      };
    },
  },
});
