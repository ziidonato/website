---
title: "Homelab"
summary: "Personal server cluster managed with NixOS flakes, running self-hosted services behind a Caddy reverse proxy that's gated by Tailscale."
end: "ongoing"
tech: ["NixOS", "Docker Compose", "Caddy", "Tailscale", "Linux"]
links: []
featured: true
order: 4
draft: false
---

NixOS flakes describe each machine and its role, Docker Compose runs the
services, and Caddy reverse-proxies in front (moved from Nginx for
cleaner config). Caddy rejects any request that isn't coming from the
Tailscale 100.0.0.0/8 subnet, so the services aren't reachable from
outside the network.
