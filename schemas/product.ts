import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Product Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Apparel", "Gear", "Accessories"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "price", title: "Price (KSh)", type: "number", validation: (r) => r.required().min(0) }),
    defineField({ name: "originalPrice", title: "Original Price (KSh) — for sale items", type: "number" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "sizes",
      title: "Available Sizes",
      type: "array",
      of: [{ type: "string" }],
      options: { list: ["XS", "S", "M", "L", "XL", "XXL"] },
      description: "Leave empty for non-apparel items",
    }),
    defineField({ name: "inStock", title: "In Stock", type: "boolean", initialValue: true }),
    defineField({ name: "featured", title: "Featured in Merch Preview", type: "boolean", initialValue: false }),
    defineField({ name: "image", title: "Product Image", type: "image", options: { hotspot: true } }),
  ],
  preview: {
    select: { title: "name", subtitle: "category", media: "image" },
  },
});
