# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (locked via `pnpm-lock.yaml`). Node 22 is provided through the Nix flake — `nix develop` (or direnv via `.envrc`) is the intended way to enter the dev shell.

- `pnpm dev` — start Astro dev server
- `pnpm build` — production build (output goes to `dist/`)
- `pnpm preview` — serve the built output
- `pnpm typecheck` — `astro check` (TS + `.astro` diagnostics; run this instead of `tsc`)
- `pnpm lint` — `biome check .` (lint + format check + import-order check, read-only)
- `pnpm lint:fix` — `biome check --write .` (apply Biome's safe fixes)
- `pnpm format` — Biome formats everything it owns, then Prettier handles `.astro` and Tailwind class sorting in `.ts`/`.tsx`
- `pnpm dlx shadcn@latest add <component>` — add a shadcn/ui component (writes to `src/components/ui/`)

There is no test runner configured.

## Architecture

**Astro 5 + React 19 islands.** `astro.config.mjs` registers `@astrojs/react`, so `.tsx` components hydrate as islands inside `.astro` pages/layouts. Default to static `.astro`; reach for React only when interactivity is required.

**Tailwind v4 via the Vite plugin** (`@tailwindcss/vite`), not the classic PostCSS pipeline. There is no `tailwind.config.js` — theme tokens, custom variants, and the `dark` mode hook live in `src/styles/global.css` using `@theme inline` and `@custom-variant`. shadcn tokens are imported from `shadcn/tailwind.css`. Base color is `neutral`, font is Inter Variable, and CSS variables drive all colors (oklch).

**shadcn/ui config** (`components.json`): style `radix-vega`, `tsx: true`, `rsc: false`, icon library `phosphor` (`@phosphor-icons/react`). Path aliases — `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, `@/hooks` — are enforced by `tsconfig.json` (`paths: { "@/*": ["./src/*"] }`) and resolved by Vite/Astro automatically.

**Layout/styles entry point:** `src/layouts/main.astro` imports `@/styles/global.css` once. Pages should compose this layout rather than re-importing styles.

**Hosting target: Cloudflare.** No Astro adapter is installed yet — Cloudflare deployment will need `@astrojs/cloudflare` plus an `output`/`adapter` block in `astro.config.mjs`. Until then, `astro build` produces a static site.

## Tooling

**Biome owns lint + format for JS/TS/JSON/CSS; Prettier only handles what Biome can't.**

- `biome.json` configures format (2-space, LF, 80 col, double quotes, no semis, ES5 trailing commas), the recommended lint set, and `organizeImports` as an assist action. CSS is parsed with `tailwindDirectives: true` so `@theme`, `@apply`, `@custom-variant`, etc. don't trip the parser. `.astro` files are explicitly excluded — Biome's experimental Astro support produces false positives (e.g. flagging template-only imports as unused), so Prettier owns them outright.
- Prettier (`.prettierrc`) does two things Biome can't: format `.astro` via `prettier-plugin-astro`, and sort Tailwind class lists via `prettier-plugin-tailwindcss` (configured with `tailwindFunctions: ["cn", "cva"]` and `tailwindStylesheet: "src/styles/global.css"`). Style settings mirror Biome so the two passes are idempotent.
- TypeScript extends `astro/tsconfigs/strict`; JSX is `react-jsx` with `jsxImportSource: "react"`.

## Nix dev shell

`flake.nix` provides `nodejs_22`, `pnpm`, `biome`, `jq`, `uv`, and `google-chrome`. The `shellHook` patches `~/.claude.json` to point the Playwright MCP server at the Nix-provided Chrome — expect this to run on shell entry.
