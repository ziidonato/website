import { defineCollection, z } from "astro:content"

const yearMonth = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, "Use YYYY-MM format")

const projects = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string(),
      summary: z.string(),
      // A year, not a range. The old `start`/`end` pair rendered two different
      // kinds of claim from one slot — a span where both months were known, a
      // point where only the end was — and `end: "ongoing"` doubled as a sort
      // key, which is what reordered the page. One year answers the question a
      // reader actually has (current or historical) and cannot disagree with
      // itself. Ordering stays `order` alone.
      year: z.number().int().min(1970).max(2100).optional(),
      // Optional by design: covers are still being shot, so a card must read as
      // complete without one. Paths are relative to /public (e.g. "/covers/x.png").
      cover: z.string().optional(),
      coverAlt: z.string().optional(),
      gallery: z
        .array(
          z.object({
            src: z.string(),
            alt: z.string(),
          })
        )
        .default([]),
      // One concrete outcome, rendered as the opening emphasis of the summary:
      // "10,000+ crates.io downloads". Whether a project is finished belongs
      // here, as an outcome, not in a state badge.
      highlight: z.string().optional(),
      tech: z.array(z.string()).default([]),
      links: z
        .array(
          z.object({
            label: z.string(),
            href: z.string().url(),
          })
        )
        .default([]),
      // Required and unique in practice: this is the site's only project ranking,
      // and the homepage slice is the top of it. A default would silently put a
      // new project at rank 0, so a missing rank fails the build instead.
      order: z.number().int(),
      draft: z.boolean().default(false),
    })
    .refine((data) => !data.cover || Boolean(data.coverAlt?.trim()), {
      message: "coverAlt is required when cover is set",
      path: ["coverAlt"],
    }),
})

const experience = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    title: z.string(),
    location: z.string().optional(),
    start: yearMonth,
    end: yearMonth.or(z.literal("present")),
    bullets: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
})

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
})

export const collections = { projects, experience, blog }
