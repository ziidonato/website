{
  description = "Personal website dev environment";

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
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22
            pnpm
            biome

            # Playwright drives this instead of its own downloaded build, which
            # cannot resolve its shared libraries on NixOS. Reached via
            # `channel: "chromium"` and the symlink farm in scripts/pw-browsers.sh.
            chromium
          ];
        };
      }
    ));
}
