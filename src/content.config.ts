import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every entry lives at <collection>/<locale>/<slug>.md; the id is "<locale>/<slug>".
const localized = (dir: string) => glob({ pattern: '*/*.md', base: `./src/content/${dir}` });

const products = defineCollection({
  loader: localized('products'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      order: z.number(),
      owner: z.string().length(3), // ISO 6346 owner code, the category letter "U" is added
      serial: z.string().length(6),
      status: z.enum(['live', 'development', 'paused']),
      summary: z.string(),
      cargo: z.array(z.string()),
      url: z.string().url().optional(),
      linkLabel: z.string().optional(),
      shot: image().optional(),
      shotAlt: z.string().optional(),
    }),
});

const services = defineCollection({
  loader: localized('services'),
  schema: z.object({
    order: z.number(),
    verb: z.string(),
    title: z.string(),
  }),
});

const experience = defineCollection({
  loader: localized('experience'),
  schema: z.object({
    order: z.number(),
    industry: z.string(),
    stack: z.array(z.string()).default([]),
  }),
});

const pillars = defineCollection({
  loader: localized('pillars'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
  }),
});

export const collections = { products, services, experience, pillars };
