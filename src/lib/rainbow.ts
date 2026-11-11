/* The accent sequence, in the same order as `.rainbow-bar` in Nav.astro.
 *
 * Two things share this palette but not the same cursor:
 *
 *   headings — advance down the page: Experience red, Skills orange, Projects
 *              yellow, About green, Contact blue. This is the page's own
 *              sequence, the one hue that says where you are.
 *   lists    — walk the palette from the hue their own heading uses. A section
 *              whose heading is orange therefore lists orange, yellow, green…
 *              so the list reads as a continuation of its heading rather than
 *              as a second, unrelated rainbow starting at red again.
 */
export const RAINBOW = [
  "var(--accent-red)",
  "var(--accent-orange)",
  "var(--accent-yellow)",
  "var(--accent-green)",
  "var(--accent-blue)",
  "var(--accent-purple)",
] as const

/**
 * The hue at `index` steps past `start`, wrapping around the palette.
 *
 * `start` is the section's own hue (its position in the page's sequence), so a
 * list always opens on the colour of the heading above it.
 */
export const rainbowAt = (index: number, start = 0) =>
  RAINBOW[(start + index) % RAINBOW.length]
