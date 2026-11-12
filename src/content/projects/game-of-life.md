---
title: "Game of Life"
summary:
  "Conway's Game of Life as a GUI app in C, built for fun and then optimized to
  see how fast it could run."
year: 2023
tech: ["C", "raylib", "CMake", "ubench"]
links:
  - label: "Source"
    href: "https://github.com/ziidonato/game_of_life"
highlight: "An exploration in optimization"
order: 7
draft: false
---

While I was in college, when I wasn't in class or studying, participating in
Formula SAE, or playing basketball at the rec, I still wanted to learn and hone
my skills in programming. So, I would work on projects that could be easy to
implement, but hard to really optimize for.

One of these projects is Conway's Game of Life. On the surface, it's easy enough
to implement: 3 neighbors = cell becomes alive, 2-3 and it stays alive, 4+ and
the cell dies. The fun part was trying to make it efficient. How many cells can
we have on the grid? How long does it take to run an iteration? How many
iterations can we run per frame? How can we optimize for sparse matrices, like
the ones a person would draw in CGOL? These questions led me down a rabbit hole
of profiling and optimization that taught me heaps about how computers work.

Firstly, I had to make a GUI for it, so I used raylib. I built out the GUI, then
the controls, then it was time to build the engine. My first iteration sort of
welded the frontend and backend together, forcing the raylib dependency, and I
ran everything on one thread, so when the GUI took its time to render, the
engine would stop. A quick flamegraph showed that rendering was taking up an
immense amount of time, and while experimenting with something like OpenGL or
Vulkan seems incredibly fun (and is still on my programming bucket list), going
down that rabbit hole seemed like too long of a detour.

So, I decided to separate the engine from the GUI by putting it on a different
thread. I had not taken my C programming class yet, so I was unfamiliar with
pthreads, but a quick read on them got me up to speed, enough to get to work. I
separated the logic, made a struct for the sim data, and what I would do is have
the GUI thread copy the values into its own buffer so the engine can still go
while the GUI rendered whatever was in its buffer now. This increased iterations
per frame drastically (that was the property I measured as a benchmark), and
reduced the amount of visible "hiccups".

But, I ran into a bug. Sometimes, the GUI would render cells that on the next
render were supposed to be alive, but wouldn't show it for a frame or two, then
would appear back. Some people can immediately see what bug caused this, and
luckily, after remembering the challenge I was given when interviewing at
Compuweigh, I knew exactly what the problem was. Basically, the GUI thread would
start copying the values while the engine was writing them into the buffer. This
would result in the GUI rendering a partial iteration. I fixed that by adding a
mutex, which would pause the engine while the GUI copied its values, meaning the
GUI would always get a complete render.

After another round of profiling, I saw that the copy itself would take up most
of the time, especially as grid sizes grew. So, I had to figure out a way to
reduce that inefficiency. Pretty soon, I came up with the tried-and-true
double-buffer technique, where you store two pointers: a rendering buffer, and a
simulation buffer, and once the engine finishes an iteration, it switches the
buffer so the GUI can render while the engine keeps working.

Here's the real beauty of that solution: the engine already needs two buffers.
You can't run the simulation on the same buffer, because you would be doing
calculations on a partially-filled board (let's say a neighbor cell came alive
in this generation, but you're simulating the cell next to it, now it sees an
alive cell instead of a dead cell like it should). So the buffer switch fixed
all problems: the engine would have its current working buffer and a completed
buffer, and when it finished, it would swap them and start calculating the new
iteration. When the GUI thread wanted a buffer, it would lock the mutex
associated with the completed buffer, memcpy that one (you can't just swap the
rendering buffer and completed buffer, since the engine is still using it to
calculate), and render it. And since rendering takes up much more time than
copying the buffer, I accepted that.

After that I started playing around with data structures, for example my first
iteration was a double-pointer array (array of pointers to arrays) which sort of
spread the graph around the heap, so I decided to fix that by using one pointer
and doing pointer arithmetic. Another idea I had was to represent the alive
cells as coordinates or a hashmap somehow, so that sparse matrices are easier to
copy, and we could potentially skip a lot of cells that didn't need to be
processed.

Ultimately, other projects and opportunities took priority over this one, but I
still look back on it as one of the more fun projects I did, and one that taught
me a lot about how to spot and remedy inefficiencies in the code.
