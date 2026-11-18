// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH let the same code deploy to the real domain (defaults)
// or to a GitHub Pages project URL like https://<user>.github.io/<repo>/.
export default defineConfig({
  site: process.env.SITE_URL || 'https://davidsonbush.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
