import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  // Add your website's URL here
  site: 'https://daily-basis.netlify.app',

  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
});