{
  description = "electronics-ai dev environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    (flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
        };
        node = pkgs.nodejs_22;
        chromePath = "${pkgs.google-chrome}/bin/google-chrome-stable";
      in
      {
        devShells.default = pkgs.mkShell {

          packages = with pkgs; [
            node
            pnpm

            jq
            uv

            git
            biome

            google-chrome
          ];

          shellHook = ''
            CONFIG="$HOME/.claude.json"
            PROJECT="$PWD"
            CHROME="${chromePath}"
            if [ -f "$CONFIG" ]; then
              tmp="$(mktemp)"
              jq --arg project "$PROJECT" --arg chrome "$CHROME" \
                '.projects[$project].mcpServers.playwright.env.PLAYWRIGHT_MCP_EXECUTABLE_PATH = $chrome' \
                "$CONFIG" > "$tmp" && mv "$tmp" "$CONFIG"
              echo "set PLAYWRIGHT_MCP_EXECUTABLE_PATH for $PROJECT"
            fi
          '';
        };
      }
    ));
}
