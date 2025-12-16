// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://bigcitylife.netlify.app",
  output: 'static',
  integrations: [mdx(), sitemap(), icon(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
