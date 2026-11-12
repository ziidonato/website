import { chromium } from "playwright"

const base = process.env.BASE_URL ?? "http://127.0.0.1:4321"
const routes = ["/", "/projects", "/blog"]

const browser = await chromium.launch({ channel: "chromium", headless: true })
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
})
const page = await context.newPage()

let failed = 0
for (const route of routes) {
  const response = await page.goto(`${base}${route}`, {
    waitUntil: "networkidle",
  })
  const status = response?.status()
  const title = await page.title()
  // Scope to <main> so Astro's dev toolbar (which renders its own headings into
  // the page) cannot supply the text we assert on.
  const main = page.locator("main")
  const heading = (
    (await main.locator("h1, h2").first().textContent()) ?? ""
  ).trim()
  const ok = status === 200 && title.length > 0
  if (!ok) failed++
  const tag = ok ? "ok  " : "FAIL"
  console.log(
    `${tag} ${route.padEnd(10)} ${status} title="${title}" heading="${heading.slice(0, 44)}"`
  )
}

await page.goto(base, { waitUntil: "networkidle" })
await page.screenshot({ path: "/tmp/home.png", fullPage: true })

const navLinks = await page.locator("nav a").count()
const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
console.log(
  `nav links: ${navLinks}  bodyScrollWidth: ${bodyWidth}  hOverflow: ${bodyWidth > 1280}`
)

await page.emulateMedia({ colorScheme: "dark" })
await page.screenshot({ path: "/tmp/home-dark.png", fullPage: true })

await browser.close()
console.log(failed === 0 ? "\nPASS" : `\nFAILED (${failed})`)
process.exit(failed === 0 ? 0 : 1)
