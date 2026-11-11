#!/usr/bin/env bash
# Point Playwright at the NixOS Chromium from the dev shell.
#
# Playwright's own browser download is an unpatched upstream build that cannot
# find its shared libraries on NixOS, so `pnpm dlx playwright install` produces a
# binary that fails to launch. NixOS's `chromium` is patched and works.
#
# Playwright only looks inside $PLAYWRIGHT_BROWSERS_PATH, in a directory named
# "<browser>-<revision>" and expects the binary at "chrome-linux64/chrome" (see
# EXECUTABLE_PATHS in playwright-core's registry). We cannot know the revision
# Playwright wants from a shell script without invoking it, so we ask it:
# `playwright install --dry-run` prints the target install location. We then
# build a symlink farm there pointing at the Nix Chromium and drop the
# INSTALLATION_COMPLETE marker the registry checks for.
#
# The farm lives in $PLAYWRIGHT_BROWSERS_PATH, not in the repo and not in
# ~/.claude.json, so `nix flake update` cannot orphan it: re-running this script
# re-points every link at whatever `chromium` currently resolves to.
set -euo pipefail

src="${CHROMIUM_BIN:-$(command -v chromium || true)}"
if [[ -z "$src" ]]; then
  echo "error: chromium not found on PATH (is the dev shell active?)" >&2
  exit 1
fi

target_root="${PLAYWRIGHT_BROWSERS_PATH:-$HOME/.cache/ms-playwright}"
export PLAYWRIGHT_BROWSERS_PATH="$target_root"
mkdir -p "$target_root"

# Playwright prints "Install location: <path>" per browser. We only care about
# the full chromium build; the headless-shell variant is a separate binary that
# Nix does not ship, and pointing it at chromium would defeat its purpose.
# Invoked through pnpm exec because playwright's bin is not on PATH in the shell.
pw() { pnpm exec playwright "$@"; }
mapfile -t dirs < <(
  pw install chromium --dry-run 2>/dev/null |
    sed -n 's/^[[:space:]]*Install location:[[:space:]]*//p' |
    grep -E '/chromium-[0-9]+$' || true
)

if [[ ${#dirs[@]} -eq 0 ]]; then
  echo "error: could not determine the Playwright chromium directory." >&2
  echo "       Is playwright installed? (pnpm add -D playwright)" >&2
  exit 1
fi

for dir in "${dirs[@]}"; do
  mkdir -p "$dir/chrome-linux64"
  ln -sfn "$src" "$dir/chrome-linux64/chrome"
  touch "$dir/INSTALLATION_COMPLETE"
  echo "linked $dir/chrome-linux64/chrome -> $src"
done

# Playwright also validates host requirements once per browser dir and caches the
# result under this marker. Touching it stops `playwright install` from trying to
# re-validate against the (absent) upstream payload.
for dir in "${dirs[@]}"; do
  touch "$dir/DEPENDENCIES_VALIDATED"
done
