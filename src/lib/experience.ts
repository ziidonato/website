/**
 * Total months of experience, counting each calendar month once.
 *
 * Not a sum of role lengths: consecutive roles overlap by the month one ends
 * and the next begins (`2026-01` appears in two files), and summing would bill
 * that month twice. The union of covered months is the number that matches what
 * a reader means by "how long has he been working".
 */

/** Months since year zero, so ranges are plain arithmetic. */
const monthIndex = (ym: string, now: Date) => {
  if (ym === "present") return now.getFullYear() * 12 + now.getMonth()
  const [y, m] = ym.split("-").map(Number)
  return y * 12 + (m - 1)
}

export interface Span {
  start?: string
  end: string
}

export function monthsOfExperience(spans: Span[], now = new Date()): number {
  const covered = new Set<number>()
  for (const { start, end } of spans) {
    const from = start ? monthIndex(start, now) : monthIndex(end, now)
    const to = monthIndex(end, now)
    for (let m = from; m <= to; m++) covered.add(m)
  }
  return covered.size
}

/** Whole years, floored: "4 years" for anything from 48 to 59 months. */
export function yearsLabel(months: number): string {
  const years = Math.floor(months / 12)
  if (years < 1) return `${months} mo`
  return `${years} ${years === 1 ? "year" : "years"}`
}
