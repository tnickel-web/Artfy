import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [react()],
    build: {
        rollupOptions: {
            external: [], // Hier kannst du Module angeben, die extern sein sollen
        }
    },
    resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),  // Alias für den src-Ordner
        },
      },
});
