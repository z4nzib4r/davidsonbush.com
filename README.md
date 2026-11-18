# davidsonbush.com

Website for **Davidson-Bush Inc.**, plumbing, heating, cooling and boilers in Athens, Ohio. Built with [Astro](https://astro.build) as a fully static site.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
npm run preview  # serve the built site
```

Requires Node 22.23.4 or newer.

## Where things live

- `src/data/site.ts`: business info (phone, license, mailing address), services and team. Edit this file to update content across the site.
- `src/pages/`: Home, Services, Our Team, Contact, 404
- `src/components/`: header, footer, call-to-action band, mobile call button, icons
- `src/assets/`: mascot, fleet photo and team photos (optimized to WebP at build time)
- `src/styles/global.css`: design tokens and shared styles

## Deploy

### Preview on GitHub Pages

Every push to `main` builds and deploys a preview with `.github/workflows/pages.yml`. The workflow sets `BASE_PATH` so the site works at `https://<user>.github.io/davidsonbush.com/`, and adds a `noindex` tag so the preview stays out of search results.

One-time setup: in the repo go to **Settings → Pages → Build and deployment → Source** and pick **GitHub Actions**.

### Production

`npm run build` produces plain static files in `dist/`, so any static host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or a regular web server).
