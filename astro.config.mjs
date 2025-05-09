import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://prohack001.github.io',
  base: '/portfolio', // Change this to your repository name
  integrations: [tailwind()]
});