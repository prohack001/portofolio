import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    technologies: z.array(z.string()),
    status: z.string(),
    url: z.string().optional(),
    featured: z.boolean().optional().default(false),
    date: z.date().optional(),
  }),
});

// Optional blog collection
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'blog': blogCollection,
};