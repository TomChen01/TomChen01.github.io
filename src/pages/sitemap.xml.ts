import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const site = import.meta.env.SITE;

export const GET: APIRoute = async () => {
  const notes = (await getCollection('notes')).filter((note) => note.data.published);
  const paths = [
    { path: '/' },
    { path: '/about/' },
    { path: '/projects/' },
    { path: '/notes/' },
    ...notes.map((note) => ({
      path: `/notes/${note.id}/`,
      lastmod: note.data.pubDate.toISOString().slice(0, 10),
    })),
  ];
  const urls = paths
    .map(({ path, lastmod }) => `<url><loc>${new URL(path, site).toString()}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`)
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
