import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Project_MyPortofolio/",
  plugins: [react(), tailwindcss()],
});
