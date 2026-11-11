---
title: "Electrocaddy"
summary: "Turns long component datasheets into structured metadata, then uses that metadata to draft schematics for an electrical project."
start: "2026-01"
end: "2026-03"
tech: ["TypeScript", "Firebase", "Braintrust", "AI"]
links:
  - label: "Live"
    href: "https://electrocaddy.io"
  - label: "Source"
    href: "https://github.com/ziidonato/electronics-ai"
highlight: "150+ page datasheet processing"
status: "wip"
featured: true
order: 1
draft: false
---

Runs on Firebase: server-less functions handle ingestion and generation, Firestore
holds the extracted metadata. Braintrust evaluations drive prompt engineering and
observability.
