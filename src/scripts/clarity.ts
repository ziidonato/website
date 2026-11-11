const CLARITY_SRC = "https://www.clarity.ms/tag/"

function dntEnabled() {
  return (
    navigator.doNotTrack === "1" ||
    (window as { doNotTrack?: string }).doNotTrack === "1" ||
    (navigator as { msDoNotTrack?: string }).msDoNotTrack === "1"
  )
}

/**
 * Clarity records sessions; Do Not Track is a person declining to be measured,
 * so the tag is never even fetched when it is set.
 */
export function initClarity(id: string) {
  const w = window as { clarity?: unknown }
  if (w.clarity || dntEnabled()) return

  w.clarity = (...args: unknown[]) => {
    const self = w.clarity as { q?: unknown[] }
    if (!self.q) self.q = []
    self.q.push(args)
  }

  const tag = document.createElement("script")
  tag.async = true
  tag.src = CLARITY_SRC + id
  document.head.appendChild(tag)
}

// define:vars cannot travel through a bundled script, so the id rides on the
// mount element instead.
const mount = document.getElementById("clarity-mount")
const id = mount?.dataset.id
if (id) initClarity(id)
