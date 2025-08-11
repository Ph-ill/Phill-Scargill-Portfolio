// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server', // Enable server-side rendering for admin panel and API
  adapter: node({
    mode: 'standalone',
    port: 90,
    host: '0.0.0.0'
  }),
  server: {
    port: 90,
    host: '0.0.0.0'
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
