import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.string(),
    repoUrl: z.url().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string(),
      sourceUrl: z.url(),
    }).optional(),
    publishDate: z.coerce.date(),
    published: z.boolean().default(true),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    courseCode: z.string(),
    courseName: z.string(),
    institution: z.string(),
    term: z.string(),
    seoTitle: z.string().optional(),
    seoKeywords: z.array(z.string()).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    description: z.string(),
    tags: z.array(z.string()),
    pdfUrl: z.string().optional(),
    sourceUrl: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = { projects, notes };
