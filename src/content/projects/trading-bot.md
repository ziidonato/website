---
title: "Algorithmic Paper-Trading Bot"
summary: "Algorithmic paper-trading bot running on Alpaca and Tradier, ported across several runtimes over the years."
start: "2023-04"
end: "ongoing"
tech: ["Rust", "Go", "C++", "ESP32", "Alpaca", "Tradier"]
links: []
order: 8
draft: false
---

Started on an ESP32 in embedded C, then moved to Rust, then Go, then
back to Rust. Every port was really an excuse to learn the runtime.
Trades on Alpaca and Tradier using common technical indicators, with
broker, indicator, and runtime kept swappable so the strategy can stay
put.
