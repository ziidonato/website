import { defineCollection, z } from "astro:content"

const yearMonth = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, "Use YYYY-MM format")

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    start: yearMonth.optional(),
    end: yearMonth.or(z.literal("ongoing")),
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
    // One concrete outcome, shown on the card: "10,000+ downloads", "Live".
    highlight: z.string().optional(),
    status: z.enum(["live", "wip", "archived"]).optional(),
    tech: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string().url(),
        })
      )
      .default([]),
    featured: z.boolean().default(false),
    order: z.number().int().default(0),
    draft: z.boolean().default(false),
  }).refine((data) => !data.cover || Boolean(data.coverAlt?.trim()), {
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
