export type Site = {
    name: string
    description: string
}

export type NavItem = {
    name: string
    path: string
}

export type Nav = NavItem[]

export type HomeConfig = {
    hero: {
        title: string
        subtitle: string
        description: string
    }
    feature: {
        title: string
        feature_1: {
            title: string
            description: string
        }
        feature_2: {
            title: string
            description: string
        }
        feature_3: {
            title: string
            description: string
        }
        feature_4: {
            title: string
            description: string
        }
    }
    cta: {
        text: string
        subtext: string
    }
    testimonial: {
        title: string
        testimonial_1: {
            quote: string
            author: string
        }
        testimonial_2: {
            quote: string
            author: string
        }
        testimonial_3: {
            quote: string
            author: string
        }
    }
    benefits: {
        title: string
        benefit_1: string
        benefit_2: string
        benefit_3: string
        benefit_4: string
    }
    featuredPosts: {
        title: string
        post_1: {
            title: string
            excerpt: string
            author: string
            date: string
        }
        post_2: {
            title: string
            excerpt: string
            author: string
            date: string
        }
        post_3: {
            title: string
            excerpt: string
            author: string
            date: string
        }
    }
    categories: {
        title: string
        category_1: string
        category_2: string
        category_3: string
        category_4: string
        category_5: string
        category_6: string
    }
    tags: {
        title: string
        tag_1: string
        tag_2: string
        tag_3: string
        tag_4: string
        tag_5: string
        tag_6: string
        tag_7: string
        tag_8: string
    }
    footer: {
        text: string
        copyright: string
        links: {
            privacy: string
            terms: string
            contact: string
        }
    }
}
