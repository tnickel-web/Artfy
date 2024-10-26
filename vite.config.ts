import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/Artfy/",
    plugins: [react()],
    build: {
        rollupOptions: {
            external: [], // Hier kannst du Module angeben, die extern sein sollen
        }
    },
});
