// @ts-check

import cloudflare from "@astrojs/cloudflare"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        // Cloudflare Workers Builds hard-caps open files at 1024 (ulimit -n
        // can't be raised there), and Rollup defaults to 1000 concurrent file
        // ops — with pnpm's symlinked store that tips over into EMFILE
        // mid-build.
        maxParallelFileOps: 64,
      },
    },
  },
  integrations: [react()],
  adapter: cloudflare(),
})
