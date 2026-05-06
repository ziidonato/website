---
title: "Electrocaddy"
summary: "Turns long component datasheets into structured metadata, then uses that metadata to draft schematics for an electrical project."
start: "2026-01"
end: "2026-03"
tech: ["TypeScript", "Firebase", "Braintrust", "pnpm monorepo", "AI"]
links:
  - label: "Live"
    href: "https://electrocaddy.io"
  - label: "Source"
    href: "https://github.com/ziidonato/electronics-ai"
featured: true
order: 1
draft: false
---

pnpm workspace monorepo on Firebase, split into frontend, cloud
functions, and shared packages. The ingestion pipeline turns 150+ page
datasheet PDFs into typed component metadata. Braintrust runs the AI
evals and Firebase Monitoring covers the rest, so accuracy and token
costs are measurable.
