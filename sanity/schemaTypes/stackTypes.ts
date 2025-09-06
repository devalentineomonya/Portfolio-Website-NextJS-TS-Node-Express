import { defineType, defineField } from "sanity";

export const stackTypes = defineType({
  name: "stack",
  title: "Stack",
  type: "document",
  fields: [
    defineField({
      name: "name",

      type: "string",
    }),
    defineField({
      name: "image",

      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "link",

      type: "url",
    }),
  ],
});
