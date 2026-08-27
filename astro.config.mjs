// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tomchen01.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
