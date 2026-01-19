import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      },
      webp: {
        lossless: false,
        quality: 75,
      },
      avif: {
        lossless: false,
        quality: 70,
      },
    }),
  ],
  build: {
    rollupOptions: {
      external: [],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  define: {
    "import.meta.env.VITE_SERVICE_ID": JSON.stringify(
      process.env.VITE_SERVICE_ID,
    ),
    "import.meta.env.VITE_TEMPLATE_ID": JSON.stringify(
      process.env.VITE_TEMPLATE_ID,
    ),
    "import.meta.env.VITE_OPTIONS": JSON.stringify(process.env.VITE_OPTIONS),
  },
});
