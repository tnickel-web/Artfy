import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
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
