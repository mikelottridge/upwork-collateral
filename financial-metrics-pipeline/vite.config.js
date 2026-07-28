import { defineConfig } from "vite";

function enforceCanonicalRevealStyle() {
  return {
    name: "canonical-reveal-style",
    enforce: "pre",
    transform(code, id) {
      const normalized = id.replaceAll("\\", "/");
      if (!normalized.includes("/node_modules/reveal.js/dist/reveal.css")) return null;
      return {
        code: code
          .replace(/text-shadow\s*:[^;}]+;?/gi, "")
          .replace(/box-shadow\s*:[^;}]+;?/gi, ""),
        map: null,
      };
    },
  };
}

export default defineConfig({
  base: "./",
  publicDir: false,
  plugins: [enforceCanonicalRevealStyle()],
  build: {
    outDir: "site",
    emptyOutDir: true,
  },
});
