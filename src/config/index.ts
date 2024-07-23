import type { Site, Nav } from '@/types'

export const site: Site = {
    name: "Astro Boilerplate",
    description: "Astro Boilerplate with basic integrations including TailwindCSS",
}

export const nav: Nav = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Blog",
        path: "/blog"
    },
    {
        name: "Contact",
        path: "/contact"
    }
]