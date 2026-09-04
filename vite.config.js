import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// abcworking.github.io is a user/org Pages site, served from the domain
// root, so no base path juggling is needed for project-page subpaths.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
