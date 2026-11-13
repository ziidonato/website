---
title: "Algorithmic Paper-Trading Bot"
summary:
  "A trading bot that started on an ESP32 in C++ and was ported through Rust,
  Go, and eventually Python, each rewrite an excuse to learn the runtime."
tech: ["Rust", "Go", "C++", "Python", "Alpaca", "AlphaVantage"]
links: []
highlight: "A durable 1.8 Sharpe ratio, in backtests"
order: 6
draft: false
---

I've always been interested in the finance industry, especially securities. This
trading bot was the first project I did just for fun, not even as a portfolio
project. I first wrote it in C++ for an ESP32 because I was starting to become
interested in MCUs and embedded architecture in general, and I thought a good
way to learn both at once would be to make a trading bot that ran on an ESP32.
It was a simple loop that used AlphaVantage to get the data and alpaca.markets
to trade stocks using a basic formula that tracked the RSI and the MACD.

I eventually moved it over to a VPS, and decided on Rust as the implementation,
because, well, I wanted to learn Rust. It was the new thing, it was supposed to
be workable in all areas, frontend, backend, CLI, desktop, embedded, and it was
"like C but memory-safe".

So I rewrote my application, using the same formula, but I sort of hardcoded the
algorithm into the code, and made it very hard to customize, add indicators,
change logic, etc. Typical of an application designed to solve one problem,
without considering the possibility of others. Some might say that's due to bad
design, while others might say I avoided pre-optimization.

Either way, I ended up rewriting the app to be more extensible, using interfaces
and mapping a config file to which algorithm to run, weights, stop losses, etc.
In the process, I rewrote the program to Go, because I had just finished an
internship with Capital One where we mainly used Go, and I wanted to keep that
momentum going, since I kind of liked the language. Soon enough though, I had my
grievances with Go, and decided that it was time for another rewrite.

I started rewriting it in Rust again, with the knowledge I gained from the Go
implementation, but then I decided that if I wanted to really be serious about
backtesting, simulation, risk calculation, etc., I should probably use something
that's reasonably popular in the finance industry. So, I decided to use Python,
which already had sophisticated ecosystems for gathering data, running tests,
simulations, visualization, logging, etc. Doing this, I was able to put more
effort into developing strategies and creating a portfolio that actually
achieved a durable 1.8 Sharpe ratio, albeit in backtests. I'm currently running
it on paper money, aware that a result tuned against one period is a hypothesis
rather than a track record.
