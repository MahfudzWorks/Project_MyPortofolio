import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Project_MyPortofolio/", // 👈 ini penting untuk GitHub Pages
  plugins: [react(), tailwindcss()],
});
