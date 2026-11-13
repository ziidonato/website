---
title: "tracing-systemd"
summary:
  "A Rust tracing-subscriber layer that formats span chains on stdout and writes
  structured logs to the systemd journal."
year: 2023
tech: ["Rust", "tracing", "systemd"]
links:
  - label: "crates.io"
    href: "https://crates.io/crates/tracing-systemd"
  - label: "docs.rs"
    href: "https://docs.rs/tracing-systemd"
  - label: "Source"
    href: "https://github.com/ziidonato/tracing-systemd"
highlight: "11,000+ crates.io downloads"
order: 2
draft: false
---

While making my algorithmic trading bot, I came across a bit of a problem of
logging: I using logs for debugging purposes, not data collection purposes, so I
didn't really want to set up a whole backend stack or even pay to have these
logs collected. The easiest place I knew to get logs was the systemd journal
using `journalctl`, and I wanted my app to use that. My implementation at the
time relied heavily on the `tracing` crate, which would allow you to set up
subscribers (outputs for your logs), then logging was as easy as using macros
like they were print statements.

I started by using the default subscriber which logs to `stdout`/`stderr`, and
that worked fine for debugging my app to get it working, but if I wanted
something durable, I would have to set up a systemd service to watch a directory
and configure my release build to put the executable in that same spot every
time (so new builds actually restarted the service instead of keeping old builds
running). That's definitely possible (that's how docker containers are usually
set up), but at the time I wanted to use a process manager, like `pm2` (or later
`pueue`) to handle the service. So initially, I wrote a layer that used
`systemd-cat` to force the logs to appear in the systemd journal and published
it as `v0.1.0`.

That crate helped me do my project, but it had a problem: a dependency on
`libsystemd-dev` if you wanted to log to the journal. I eventually came back to
this library and saw that as unacceptable, so I sought out to eliminate that
external dependency and replace it with something made in pure-rust. I landed on
`tracing-journald`, which is a crate maintained by the creators of `tracing`
(and also the creators of`tokio`). That worked fine, but it sort of discarded
the formatting since it would pollute the systemd journal, but I accepted it for
a while. This was the version that got the most usage, with 11,000 downloads so
far.

I have recently released `v0.4.2`, which removes the journald dependency, opting
to write to the file descriptor itself, fixes formatting for journald, and
introduces formatting strings, further increasing customizability. The goal with
these format strings is to eventually be able to represent any format you'd like
using them, reducing the need for multiple subscribers.
