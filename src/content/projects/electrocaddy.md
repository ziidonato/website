---
title: "Electrocaddy"
summary:
  "Component datasheets are read into structured data, then a deterministic
  engine checks a whole schematic or PCB against rules derived from them."
year: 2026
tech: ["TypeScript", "Firebase", "Braintrust", "AI"]
links:
  - label: "Live"
    href: "https://electrocaddy.io"
  - label: "Source"
    href: "https://github.com/ziidonato/electronics-ai"
highlight: "Datasheets turned into rules an engine can check"
order: 1
draft: false
---

I have always had an interest in electronics that rivals (or complements) my
interest in computers. Taking electricity from a source such as a battery and
making it do anything you need it to is something I find extremely satisfying,
which is why I spend a good chunk of my time building circuit boards and other
projects that include them.

While building circuit boards, one thing that pops out is the dependence on
datasheet specifications. Datasheets tell you everything you need to know about
the part: what voltage to give a pin, what passives are needed to make it
function, conditions in which the part operates normally vs starts deteriorating
in performance, bit registers, communication protocols, I could go on. It
follows that virtually all routing and placement decisions must originate from
somewhere in that part's datasheet, and failure to respect that origin leads to
potentially costly mistakes (think about ordering a board from China with all
the parts assembled, waiting for that delivery, only to find out you missed a
crucial part of a component or specced out the wrong part).

So, I set out to make an assistant that processes these datasheets into
structured data, then uses that data to verify the soundness of a circuit. My
first iteration focused more on the storage side of things and was able to get a
good level of detail from the datasheet, but the rules were still markdown files
that an AI would parse, meaning there was no determinism, no guarantee that
"these rules were applied to these parts and have passed or failed at (X, Y)."
My second iteration (WIP) focuses more on a rules-based model, where specs are
stored as implementations of a general "rule" and a deterministic engine runs
its checks over a whole schematic or PCB, leading to:

- shortening turn-around times
- minimizing cost
- increasing consistency, and
- increasing adaptability, allowing users to specify their own rules over one or
  more parts, traces depending on their properties, board stackup (layers &
  copper pours), and even interference from B fields on traces where signal
  integrity is important.

Stay tuned for the second iteration, and a write-up of alternatives!
