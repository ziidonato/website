---
title: "Game of Life"
summary: "Conway's Game of Life as a GUI app in C, built for fun and then optimized to see how fast it could run."
end: "2023-09"
tech: ["C", "raylib", "CMake", "ubench"]
links:
  - label: "Source"
    href: "https://github.com/ziidonato/game_of_life"
order: 6
draft: false
---

raylib handles the window with a separate life-engine module behind it.
ubench was wired in from day one so any change to the simulation loop
showed up as a real benchmark delta. The fun part was optimizing the
simulation to see how fast it could go.
