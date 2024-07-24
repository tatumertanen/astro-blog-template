export const tags = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'GraphQL',
    'CSS',
    'HTML',
    'Web Development',
    'Frontend',
    'Backend',
    'Full Stack',
    'DevOps',
    'Testing',
    'Performance',
    'Security',
]

export const categories = [
    'Programming',
    'Web Development',
    'Mobile Development',
    'Data Science',
    'Machine Learning',
    'Cloud Computing',
    'DevOps',
    'Cybersecurity',
    'Blockchain',
    'IoT',
]

export const Tag = Object.fromEntries(tags.map(tag => [tag.replace(/\s+/g, ''), tag]))

export const Category = Object.fromEntries(categories.map(category => [category.replace(/\s+/g, ''), category]))

export type Tag = typeof Tag[keyof typeof Tag]
export type Category = typeof Category[keyof typeof Category]