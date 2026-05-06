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

export const collections = { projects, experience }
