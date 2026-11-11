# AGENTS.md

Guidance for coding agents (pi, Claude Code, or anything else reading `AGENTS.md`) working in this repository.

Personal site (Astro 5 + React 19 + Tailwind v4 + shadcn/ui). Package manager is **pnpm** (locked via `pnpm-lock.yaml`). Node 22 comes from the Nix flake — `nix develop` (or direnv via `.envrc`) is the intended way to enter the dev shell.

## Commands

- `pnpm dev` — start Astro dev server
- `pnpm build` — production build (output goes to `dist/`)
- `pnpm preview` — serve the built output
- `pnpm typecheck` — `astro check` (TS + `.astro` diagnostics; run this instead of `tsc`). **Currently unrunnable: `@astrojs/check` is not installed** — add `@astrojs/check` to `devDependencies` before trusting this script.
- `pnpm lint` — `biome check .` (lint + format check + import-order check, read-only)
- `pnpm lint:fix` — `biome check --write .` (apply Biome's safe fixes)
- `pnpm format` — Biome formats everything it owns, then Prettier handles `.astro` and Tailwind class sorting in `.ts`/`.tsx`
- `pnpm dlx shadcn@latest add <component>` — add a shadcn/ui component (writes to `src/components/ui/`)

## Testing

Playwright is the browser runner. It is configured to use the **system Chromium** (NixOS-patched), never its own download — see [Browser automation](#browser-automation).

- `pnpm smoke` — `scripts/smoke.mjs`: loads every route through Playwright, asserts HTTP 200 + a real in-`<main>` heading, checks for horizontal overflow, and writes `/tmp/home.png` + `/tmp/home-dark.png`. Needs a server already running (default `http://127.0.0.1:4321`, override with `BASE_URL`).
- `pnpm test` — the Playwright runner against `playwright.config.ts` and a `tests/` dir (both present; no specs written yet).

`scripts/smoke.mjs` scopes its heading lookup to `<main>` on purpose: Astro's dev toolbar injects its own markup into the page, and an unscoped `h1` selector picks up the toolbar's "No islands detected" text instead of site content.

## Architecture

**Astro 5 + React 19 islands.** `astro.config.mjs` registers `@astrojs/react`, so `.tsx` components hydrate as islands inside `.astro` pages/layouts. In practice almost everything here is static `.astro`; reach for React only when interactivity is required. `src/components/ui/` is the shadcn surface (`card`, `badge`, `button` so far), consumed from `.astro` sections.

**Content collections** (`src/content/config.ts`) are the data layer — three `type: "content"` collections with zod schemas:

| Collection | Dir | Notes |
| --- | --- | --- |
| `projects` | `src/content/projects/*.md` | `start`/`end` are `YYYY-MM` (`end` may be `"ongoing"`); `tech`, `links`, `featured`, `order`, `draft` |
| `experience` | `src/content/experience/*.md` | `end` may be `"present"`; `bullets`, `tech`, `link`, `draft` |
| `blog` | `src/content/blog/*.md` | `date` is coerced to `Date`; `draft` |

Drafts are filtered in production only (`import.meta.env.PROD` in `getStaticPaths`), so `pnpm dev` shows them.

**Tailwind v4 via the Vite plugin** (`@tailwindcss/vite`), not the classic PostCSS pipeline. There is no `tailwind.config.js` — theme tokens, custom variants, and the `dark` mode hook live in `src/styles/global.css` using `@theme inline` and `@custom-variant`. shadcn tokens are imported from `shadcn/tailwind.css`; `@tailwindcss/typography` is loaded as a plugin via `@plugin` for blog prose. Base color is `neutral`, font is Inter Variable, CSS variables drive all colors (oklch).

**Non-shadcn colors** live in `src/styles/pastels.css` — a single source of truth (`--accent-{red,orange,yellow,green,blue,purple}` and the `--accent-1..6` aliases), different in light and dark mode. Reach for those rather than inventing hex values in components.

**shadcn/ui config** (`components.json`): style `radix-vega`, `tsx: true`, `rsc: false`, icon library `phosphor` (`@phosphor-icons/react`). Path aliases — `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, `@/hooks` — are enforced by `tsconfig.json` (`paths: { "@/*": ["./src/*"] }`) and resolved by Vite/Astro automatically.

**Layout/styles entry point:** `src/layouts/main.astro` imports `@/styles/global.css` once and owns `<html>`, nav, footer, meta tags, and the inline no-flash theme script (`localStorage.theme`, falling back to `prefers-color-scheme`). Pages compose this layout rather than re-importing styles. Pages: `src/pages/index.astro` (sectioned landing page), `projects.astro`, `blog/index.astro`, `blog/[...slug].astro`.

**Hosting target: Cloudflare Workers (static assets).** `main` has **no** adapter — `astro build` emits a static `dist/`. The Cloudflare wiring exists as a separate, unmerged branch: `origin/cloudflare/workers-autoconfig` (commit `18b48c6`, bot-authored) adds `@astrojs/cloudflare` with `adapter: cloudflare()`, a `wrangler.jsonc`, `public/.assetsignore`, `preview` → `wrangler dev`, and `deploy`/`cf-typegen` scripts. `wrangler` is already a devDependency on `main`. Merging that branch (or redoing it deliberately) is what enables `pnpm deploy`; until then deployment is whatever serves `dist/`.

## Tooling

**Biome owns lint + format for JS/TS/JSON/CSS; Prettier only handles what Biome can't.**

- `biome.json` configures format (2-space, LF, 80 col, double quotes, no semis, ES5 trailing commas), the recommended lint set, and `organizeImports` as an assist action. CSS is parsed with `tailwindDirectives: true` so `@theme`, `@apply`, `@custom-variant`, etc. don't trip the parser. `.astro` files are explicitly excluded — Biome's experimental Astro support produces false positives (e.g. flagging template-only imports as unused), so Prettier owns them outright. `vcs.useIgnoreFile` is on, so `.gitignore` is respected.
- Prettier (`.prettierrc`) does two things Biome can't: format `.astro` via `prettier-plugin-astro`, and sort Tailwind class lists via `prettier-plugin-tailwindcss` (configured with `tailwindFunctions: ["cn", "cva"]` and `tailwindStylesheet: "src/styles/global.css"`). Style settings mirror Biome so the two passes are idempotent.
- TypeScript extends `astro/tsconfigs/strict`; JSX is `react-jsx` with `jsxImportSource: "react"`.
- **Biome is not an npm dependency** — `pnpm lint`/`pnpm format` run the `biome` binary supplied by the Nix dev shell, so they fail outside it.

## Nix dev shell

`flake.nix` provides exactly what the site needs to build and be driven in a browser: `nodejs_22`, `pnpm`, `biome`, and `chromium`. No unfree packages, no `shellHook`, no writes outside the repo — `direnv` (`use flake` in `.envrc`) enters the shell automatically.

## Browser automation

Playwright drives the **NixOS `chromium`**, because Playwright's own downloaded build is an unpatched upstream binary that cannot resolve its shared libraries here — `playwright install chromium` yields something that fails to launch.

Two mechanisms, both required and easy to mistake for redundancy:

1. **`channel: "chromium"`** in `playwright.config.ts` and in any launch call. This is what actually picks the system binary, and it also bypasses `chromium-headless-shell` (a *separate* binary that nixpkgs does not ship). Without the channel, headless launch fails with `Executable doesn't exist at …/chromium_headless_shell-*/…`.
2. **`scripts/pw-browsers.sh`** builds a symlink farm in `$PLAYWRIGHT_BROWSERS_PATH` (default `~/.cache/ms-playwright`) — `chromium-<revision>/chrome-linux64/chrome` → the Nix binary, plus `INSTALLATION_COMPLETE` and `DEPENDENCIES_VALIDATED` markers. This covers code paths that resolve through the registry rather than a channel; it asks `playwright install --dry-run` for the revision rather than hardcoding one, so a Playwright upgrade does not silently break it. Re-run it after any `nix flake update` that changes the Chromium store hash.

Neither mechanism writes to `~/.claude.json` or any other file outside the repo, which is what the previous Playwright-MCP setup did (a global `shellHook` rewriting a per-project key). Playwright **MCP is not used** — there is no `PLAYWRIGHT_MCP_EXECUTABLE_PATH` env var for the plain CLI, only for the MCP server.
