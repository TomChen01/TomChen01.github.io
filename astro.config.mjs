// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // 将这里换成你的 GitHub Pages 网址
  site: 'https://TomChen01.github.io',
  integrations: [tailwind()],
});