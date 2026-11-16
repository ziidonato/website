import { chromium } from "playwright"
const b = await chromium.launch({ channel: "chromium" })
const p = await b.newPage()
const bases = process.argv.slice(2)
for (const base of bases) {
  try {
    await p.goto(`${base}/blog`, { waitUntil: "load", timeout: 20000 })
    const a = p.locator('a:has-text("AI-assisted PCB")')
    const n = await a.count()
    console.log(base, "count=", n, n ? await a.first().getAttribute("href") : "-")
    if (n) { await a.first().click(); await p.waitForLoadState("load"); console.log("   ->", p.url()) }
  } catch (e) { console.log(base, "ERR", e.message.slice(0,140)) }
}
await b.close()
