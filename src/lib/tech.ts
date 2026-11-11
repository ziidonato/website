/**
 * Tags are one flat list in frontmatter, but they are not one kind of thing:
 * `Rust` is a technology, `PCB Design` is a discipline the project exercised.
 * Listing them together reads as noise, so this splits the one list into two
 * groups without asking the author to duplicate the taxonomy in every file.
 *
 * The split is a curated set rather than a heuristic — anything not named here
 * is a technology. Editing the set is the whole cost of maintaining it.
 */
const DISCIPLINES = new Set([
  "PCB Design",
  "Firmware",
  "Mechanical",
  "Embedded",
  "Benchmarking",
])

export interface TechGroup {
  label: string
  items: string[]
}

export const groupTech = (tags: string[]): TechGroup[] => {
  const disciplines = tags.filter((t) => DISCIPLINES.has(t))
  const stack = tags.filter((t) => !DISCIPLINES.has(t))

  return [
    disciplines.length > 0 && { label: "Discipline", items: disciplines },
    stack.length > 0 && { label: "Stack", items: stack },
  ].filter((g): g is TechGroup => Boolean(g))
}
