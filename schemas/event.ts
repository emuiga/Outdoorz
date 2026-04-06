import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Event Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "trail", title: "Trail / Location", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "activityType",
      title: "Activity Type",
      type: "string",
      options: { list: ["Hiking", "Cycling", "Walk", "Camping"] },
    }),
    defineField({
      name: "difficulty",
      title: "Difficulty",
      type: "string",
      options: { list: ["Easy", "Moderate", "Challenging"] },
    }),
    defineField({ name: "date", title: "Date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "time", title: "Meeting Time", type: "string", description: "e.g. 6:00 AM" }),
    defineField({ name: "meetingPoint", title: "Meeting Point", type: "string", description: "Where participants should meet" }),
    defineField({ name: "priceKsh", title: "Price (KSh)", type: "number", validation: (r) => r.required().min(0) }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
      description: "Key things to look forward to",
    }),
    defineField({
      name: "whatToBring",
      title: "What to Bring",
      type: "array",
      of: [{ type: "string" }],
      description: "Gear and items participants should carry",
    }),
    defineField({
      name: "includedInPrice",
      title: "Included in Price",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "notIncluded",
      title: "Not Included",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "guide", title: "Lead Guide", type: "string" }),
    defineField({ name: "image", title: "Event Image", type: "image", options: { hotspot: true } }),
  ],
  preview: {
    select: { title: "title", subtitle: "date", media: "image" },
  },
  orderings: [{ title: "Date (Upcoming)", name: "dateAsc", by: [{ field: "date", direction: "asc" }] }],
});
