import { defineConfig } from "playwright/test"

// Headless runs use `channel: "chromium"`, which makes Playwright resolve the
// system chromium instead of its own chromium-headless-shell download. On
// NixOS the system browser is the patched one and actually launches; the
// downloaded build cannot find its shared libraries. See scripts/pw-browsers.sh.
export default defineConfig({
  testDir: "tests",
  use: {
    baseURL: process.env.BASE_URL ?? "http://127.0.0.1:4321",
    channel: "chromium",
    headless: true,
  },
})
