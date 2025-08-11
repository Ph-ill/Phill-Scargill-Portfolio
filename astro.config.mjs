// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server', // Enable server-side rendering for admin panel and API
  adapter: node({
    mode: 'standalone'
  }),
  vite: {
    plugins: [tailwindcss()],
    define: {
      'process.env.ADMIN_PASSWORD': JSON.stringify(process.env.ADMIN_PASSWORD)
    }
  }
});
