import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fuehrerscheinklassen-rechner-wohnmobil-anhaenger.de',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});