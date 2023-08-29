import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/styles/variables.scss';`,
        },
      },
    },
  },
  compressHTML: true,
});
