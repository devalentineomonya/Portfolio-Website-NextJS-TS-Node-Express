import { defineType, defineField } from "sanity";

export const productTypes = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: (doc) => `${doc._id}-${doc.name}`,
        maxLength: 96,
      },
    }),
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (rule) => rule.required().min(10),
    }),
    defineField({
      name: "isAvailable",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "price",
      type: "number",
      validation: (rule) => rule.required().min(1).positive(),
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "sizes",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: ["XS", "S", "M", "L", "XL"],
      },
    }),
  ],
});
