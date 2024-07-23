import { z, reference } from 'astro:content'

export const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: reference('authors'),
    image: z.object({
        url: z.string(),
        alt: z.string()
    }).optional(),
    tags: z.array(z.string()).optional(),
    relatedPosts: z.array(reference('blog')).optional()
});

export const authorSchema = z.object({
    name: z.string(),
    avatar: z.string().optional(),
    bio: z.string().optional()
});