import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
    repoUrl: z.url().optional(),
    publishDate: z.coerce.date(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()),
    pdfUrl: z.string().optional(),
    sourceUrl: z.string().optional(),
  }),
});

export const collections = { projects, notes };
