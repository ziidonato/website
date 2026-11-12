---
title: "Homelab"
summary:
  "Personal server cluster managed with NixOS flakes, running self-hosted
  services behind a Caddy reverse proxy that's gated by Tailscale."
tech: ["NixOS", "Docker Compose", "Caddy", "Tailscale", "Linux"]
links: []
highlight:
  "Configured developer tooling without needing install scripts or steps"
order: 4
draft: false
---

I have a lot of computers and VPS instances that I manage as a sort of homelab.
Sometimes I find myself setting up new instances, trying out new providers,
linux distributions, maybe going back to windows for a time, etc. And usually,
every time someone wants to do something like that, they need to set up/download
their own software, maybe clone a dotfiles repo and move it to the right spot,
set up authorization & keys on many of their favorite applications, a whole host
of stuff that makes switching a bit cumbersome.

Because of this, I eventually landed myself at Nix (and NixOS), a declarative
ecosystem that lets you define packages, symlinks, setup scripts, and virtually
endless configuration and customization options that can get you going with just
a build. With Nix flakes, I can specify exactly what I need to get a repo ready
to go, and with just a build I can make I like NixOS especially because if I
ever mess up royally, I can revert back to a previous generation (generations
are stored by default) and go from there.

So now I have all my configuration in a repo that's managed by Nix: the packages
I need, the CLI tools I like, the aliases I use, my zsh config (including my
custom prompt), my neovim config and any plugins, preferred developer tools,
etc. I even helped people at Numeral migrate their setups to Nix, so when they
got new laptops, they were able to easily port their apps, configs, etc.
