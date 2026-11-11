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
        // CF Workers Builds caps fds at 1024, below Rollup's default 1000 ops.
        maxParallelFileOps: 64,
      },
    },
  },
  integrations: [react()],
  adapter: cloudflare(),
})
