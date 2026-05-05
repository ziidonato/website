---
title: "tracing-systemd"
summary: "A Rust tracing-subscriber layer that formats span chains on stdout and writes structured logs to the systemd journal."
end: "2023-12"
tech: ["Rust", "tracing", "systemd"]
links:
  - label: "crates.io"
    href: "https://crates.io/crates/tracing-systemd"
  - label: "docs.rs"
    href: "https://docs.rs/tracing-systemd"
  - label: "Source"
    href: "https://github.com/ziidonato/tracing-systemd"
featured: true
order: 2
draft: false
---

Logs to journald directly via `tracing-journald`. Color themes and
output writers are swappable, which keeps the formatter testable. 2,300+
downloads on crates.io.
