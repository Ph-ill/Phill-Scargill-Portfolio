// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: 'server', // Enable server-side rendering for admin panel and API
  vite: {
    plugins: [tailwindcss()],
  },
});
