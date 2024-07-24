import { z, reference } from 'astro:content'
import { tags, categories } from './config/frontmatter';

export const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: reference('authors'),
    image: z.object({
        url: z.string(),
        alt: z.string()
    }).optional(),
    tags: z.array(z.enum(tags as [string, ...string[]])),
    category: z.enum(categories as [string, ...string[]]),
    relatedPosts: z.array(reference('blog')).optional()
});

export const authorSchema = z.object({
    name: z.string(),
    avatar: z.string().optional(),
    bio: z.string().optional()
});