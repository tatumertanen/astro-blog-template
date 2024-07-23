import { defineCollection } from 'astro:content'
import { blogSchema, authorSchema } from '@/schemas'

export const collections = {
    'blog': defineCollection({
        type: 'content',
        schema: blogSchema,
    }),
    'authors': defineCollection({
        type: 'data',
        schema: authorSchema,
    })
}
