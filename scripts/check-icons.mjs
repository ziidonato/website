#!/usr/bin/env node
/**
 * Phosphor exports every icon twice: a bare name (`ArrowLeft`, deprecated) and
 * an `Icon`-suffixed one (`ArrowLeftIcon`). Only the suffixed name is stable, and
 * Biome cannot enforce this because it excludes `.astro` files outright — which
 * is where every icon here is used.
 */
import { readdirSync, readFileSync, statSync } from "node:fs"
import { join } from "node:path"

const ROOT = "src"
const SKIP = new Set(["node_modules", "dist", ".astro", ".git"])
const IMPORT = /import\s*\{([^}]*)\}\s*from\s*["']@phosphor-icons\/react["']/g

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP.has(entry)) continue
    const path = join(dir, entry)
    if (statSync(path).isDirectory()) yield* walk(path)
    else if (/\.(astro|tsx?|jsx?)$/.test(path)) yield path
  }
}

const problems = []
for (const file of walk(ROOT)) {
  const source = readFileSync(file, "utf8")
  for (const [, body] of source.matchAll(IMPORT)) {
    for (const spec of body.split(",")) {
      const name = spec
        .trim()
        .split(/\s+as\s+/)
        .pop()
      if (name && !name.endsWith("Icon")) {
        problems.push(`${file}: "${name}" — import the "${name}Icon" alias`)
      }
    }
  }
}

if (problems.length) {
  console.error(problems.join("\n"))
  process.exit(1)
}
console.log("icons: all phosphor imports use the Icon suffix")
