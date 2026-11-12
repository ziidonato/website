import type { CollectionEntry } from "astro:content"

/**
 * There is one ordered list of projects, and both pages read it.
 *
 * `featured` used to be an independent flag that each page combined with a
 * different second key — the homepage sorted the flag's members by `order`,
 * `/projects` sorted by end date — so the same four projects appeared in two
 * different sequences a click apart. The homepage slice is now derived from
 * the ranking rather than stored beside it.
 */
export const FEATURED_COUNT = 4

export type Project = CollectionEntry<"projects">

/** The only sort key on either page. */
const byOrder = (a: Project, b: Project) => a.data.order - b.data.order

export const orderProjects = (projects: Project[]) =>
  [...projects].sort(byOrder)

/** Highest-ranked `FEATURED_COUNT`, then everything else, both in rank order. */
export function splitProjects(projects: Project[]) {
  const ordered = orderProjects(projects)
  return {
    featured: ordered.slice(0, FEATURED_COUNT),
    rest: ordered.slice(FEATURED_COUNT),
  }
}
