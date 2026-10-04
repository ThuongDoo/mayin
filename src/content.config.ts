import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const faq = z.array(z.object({ q: z.string(), a: z.string() })).default([]);

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    publishDate: z.coerce.date(),
    cover: z.string().nullish(),
    tags: z.array(z.string()).default([]),
    updatedDate: z.coerce.date().nullish(),
    draft: z.boolean().default(false),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().default(''),
    description: z.string().default(''),
    shortDesc: z.string().default(''),
    icon: z.string().default('printer'),
    priceFrom: z.string().default(''),
    order: z.number().nullish(),
    faq,
  }),
});

const areas = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/areas' }),
  schema: z.object({
    name: z.string(),
    description: z.string().default(''),
    intro: z.string().default(''),
    travelTime: z.string().default(''),
    wards: z.array(z.string()).default([]),
    landmarks: z.string().default(''),
  }),
});

const cartridges = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/cartridges' }),
  schema: z.object({
    name: z.string(),
    code: z.string().default(''),
    brand: z.string().default('HP'),
    printers: z.array(z.string()).default([]),
    yield: z.string().default(''),
    price: z.string().default(''),
    description: z.string().default(''),
    faq,
  }),
});

export const collections = { blog, services, areas, cartridges };
