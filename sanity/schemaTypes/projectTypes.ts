import { defineField, defineType } from "sanity";


export const projectTypes = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "link",
      type: "url",
      validation: (rule) =>
        rule.uri({ allowRelative: true, scheme: ["http", "https"] }).required(),
    }),
    defineField({
      name: "year",
      type: "string",
      validation: (rule) => rule.length(4).required(),
    }),
    defineField({
      name: "image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
  ],
});
