// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // 将这里换成你的 GitHub Pages 网址
  site: 'https://TomChen01.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
