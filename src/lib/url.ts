/** Prefix a root-relative path with the configured base (e.g. "/davidsonbush.com" on GitHub Pages). */
export const u = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
