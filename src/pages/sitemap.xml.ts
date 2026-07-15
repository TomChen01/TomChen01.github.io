import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const site = 'https://tomchen01.github.io';

export const GET: APIRoute = async () => {
  const notes = await getCollection('notes');
  const paths = ['/', '/about/', '/projects/', '/notes/', ...notes.map((note) => `/notes/${note.id}/`)];
  const urls = paths
    .map((path) => `<url><loc>${new URL(path, site).toString()}</loc></url>`)
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
