export const MARQUEE_ITEMS = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'MongoDB',
    'PostgreSQL',
    'Firebase',
    'Git',
    'GitHub',
    'Figma',
    'Framer Motion',
    'Cursor',
    'Photoshop',
    'Illustrator',
    'Linear',
    'Notion'
] as const;

/** Slugs mapped to logos in `skill-icons.tsx` (SVGL via `@ridemountainpig/svgl-react`). */
export type SkillIconSlug =
    | 'javascript'
    | 'typescript'
    | 'react'
    | 'nextjs'
    | 'tailwind'
    | 'nodejs'
    | 'vite'
    | 'bun'
    | 'mongodb'
    | 'postgresql'
    | 'redis'
    | 'firebase'
    | 'prisma'
    | 'git'
    | 'github'
    | 'figma'
    | 'photoshop'
    | 'illustrator'
    | 'cursor'
    | 'linear'
    | 'notion'
    | 'biome'
    | 'openapi'
    | 'docker'
    | 'anthropic'
    | 'zod'
    | 'vitest'
    | 'playwright'
    | 'eslint'
    | 'sentry'
    | 'vercel'
    | 'reactquery'
    | 'pnpm';

export interface SkillItem {
    icons: readonly SkillIconSlug[];
    label: string;
}

export interface SkillGroup {
    items: SkillItem[];
    subtitle?: string;
    title: string;
}

export const SKILL_GROUPS: SkillGroup[] = [
    {
        title: 'Languages',
        subtitle: 'JavaScript & TypeScript in production',
        items: [
            { label: 'JavaScript', icons: ['javascript'] },
            { label: 'TypeScript', icons: ['typescript'] }
        ]
    },
    {
        title: 'Frameworks & runtime',
        subtitle: 'UI, bundlers, and the JS runtime',
        items: [
            { label: 'React', icons: ['react'] },
            { label: 'Next.js 16', icons: ['nextjs'] },
            { label: 'Tailwind CSS', icons: ['tailwind'] },
            { label: 'Node.js', icons: ['nodejs'] },
            { label: 'Vite', icons: ['vite'] },
            { label: 'Bun', icons: ['bun'] }
        ]
    },
    {
        title: 'Data & persistence',
        subtitle: 'Databases, cache, containers',
        items: [
            { label: 'MongoDB', icons: ['mongodb'] },
            { label: 'PostgreSQL', icons: ['postgresql'] },
            { label: 'Redis', icons: ['redis'] },
            { label: 'Firebase', icons: ['firebase'] },
            { label: 'Prisma', icons: ['prisma'] },
            { label: 'Docker', icons: ['docker'] }
        ]
    },
    {
        title: 'Testing & quality',
        subtitle: 'Schemas, tests, linting, observability',
        items: [
            { label: 'Zod', icons: ['zod'] },
            { label: 'Vitest', icons: ['vitest'] },
            { label: 'Playwright', icons: ['playwright'] },
            { label: 'ESLint', icons: ['eslint'] },
            { label: 'Biome', icons: ['biome'] },
            { label: 'Sentry', icons: ['sentry'] }
        ]
    },
    {
        title: 'Design & media',
        subtitle: 'How it looks and feels',
        items: [
            { label: 'Figma', icons: ['figma'] },
            { label: 'Photoshop', icons: ['photoshop'] },
            { label: 'Illustrator', icons: ['illustrator'] }
        ]
    },
    {
        title: 'Workflow, deploy & AI',
        subtitle: 'Ship, collaborate, automate',
        items: [
            { label: 'Git & GitHub', icons: ['git', 'github'] },
            { label: 'Vercel', icons: ['vercel'] },
            { label: 'pnpm', icons: ['pnpm'] },
            { label: 'TanStack Query', icons: ['reactquery'] },
            { label: 'Cursor', icons: ['cursor'] },
            { label: 'Linear', icons: ['linear'] },
            { label: 'Notion', icons: ['notion'] },
            { label: 'Apidog', icons: ['openapi'] },
            { label: 'Claude code', icons: ['anthropic'] }
        ]
    }
];

export interface TimelineItem {
    badge?: string;
    badgeVariant?: 'hot';
    date: string;
    description: string;
    featured?: boolean;
    /** Impact bullets for recruiters—concrete outcomes, not filler. */
    highlights?: string[];
    org: string;
    orgHref?: string;
    /** Quick scan: AI, frameworks, stack. */
    tags?: string[];
    title: string;
}

export const EXPERIENCE_ITEMS: TimelineItem[] = [
    {
        date: 'APR 2020 — PRESENT',
        title: 'Software Developer',
        org: 'Astra Security',
        orgHref: 'https://getastra.com/',
        description:
            'Building AI-powered pentesting agents and customer-facing tools in a security product org—where the UI has to keep up with fast-moving agentic workflows.',
        featured: true,
        highlights: [
            'Ship and iterate on AI-powered pentesting agents—reasoning over attack surfaces, not just scripted scans—alongside product and security stakeholders.',
            'Own planning and execution for upgrading core front-end frameworks and shared libraries: sequencing risk, rollouts, and regression coverage so the product keeps shipping.',
            'Partner across the org to land stack updates without freezing the roadmap—translating technical debt into a plan people can commit to.'
        ],
        tags: ['AI agents', 'Framework upgrades', 'Product UI', 'Security'],
        badge: 'Full-time',
        badgeVariant: 'hot'
    },
    {
        date: 'AUG 2023 — DEC 2024',
        title: 'Software Developer',
        org: 'Dimension64',
        orgHref: 'https://dimension64.com/',
        description:
            'Product engineering in a fast-moving team—shipping features while modernizing how the codebase kept pace with the roadmap.',
        highlights: [
            'Owned heavy lifting on updating and migrating core frameworks and shared libraries (React / Angular ecosystem)—from audit through rollout, with clear ownership of regressions.',
            'Drove planning and execution across squads so upgrades landed on a schedule stakeholders could trust, not as surprise fire drills.',
            'Shipped customer-facing capabilities on top of a cleaner, more maintainable stack—less glue code, clearer boundaries between modules.'
        ],
        tags: ['Angular', 'React', 'Platform', 'Migrations'],
        badge: 'Full-time',
        badgeVariant: 'hot'
    },
    {
        date: 'FEB 2023 — AUG 2023',
        title: 'Software Development Intern',
        org: 'EXL Service',
        orgHref: 'https://www.exlservice.com/',
        description:
            'Owned the Hirelink hiring portal end to end in a short window—backend business rules, responsive UI, and alignment with HR stakeholders.',
        highlights: [
            'Implemented .NET Core MVC services and Tailwind-backed UI for applicant tracking and recruiter workflows—production-bound, not a demo.',
            'Translated messy requirements into shippable milestones; paired with senior devs on patterns that would survive the next hire on the project.'
        ],
        tags: ['.NET Core', 'Tailwind', 'MVC', 'Delivery'],
        badge: 'Internship'
    }
];

export const EDUCATION_ITEMS: TimelineItem[] = [
    {
        date: 'FEB 2022 — MAY 2023',
        title: 'Master of Computer Applications',
        org: 'PES University',
        orgHref: 'https://pes.edu/',
        description:
            'Specialization in Web Technologies. Deepened expertise in modern web architectures, algorithms, and software engineering practices. Aggregate CGPA: 8.2'
    }
];

export interface Project {
    description: string;
    featured?: boolean;
    links: { label: string; href: string }[];
    placeholder: string;
    tags: string[];
    title: string;
}

export const PROJECTS: Project[] = [
    {
        featured: true,
        placeholder: 'TRIBOON',
        title: 'Triboon — Project Management',
        description:
            'A full-featured, responsive project management solution powered by ReactJS and Firebase. Real-time collaboration, task tracking, and team dashboards — all in one place.',
        tags: ['React', 'Firebase', 'Tailwind'],
        links: [{ label: 'Live ↗', href: 'https://triboon.web.app/' }]
    },
    {
        placeholder: 'RAPIDLOGR',
        title: 'RapidLogr',
        description:
            'A dynamic log exploration tool with robust search and analysis. Navigate logs effortlessly, uncover insights, and troubleshoot at speed.',
        tags: ['React', 'Search'],
        links: [{ label: 'Live ↗', href: 'https://rapidlogr.vercel.app/' }]
    },
    {
        placeholder: 'GITFINDER',
        title: 'Git Finder',
        description:
            'Search GitHub users and explore profiles — repos, followers, and contributions — built with Angular and Tailwind CSS.',
        tags: ['Angular 16', 'GitHub API', 'Tailwind'],
        links: [{ label: 'Live ↗', href: 'https://fyle-internship-challenge-23.vercel.app/' }]
    },
    {
        placeholder: 'HIRELINK',
        title: 'Hirelink',
        description:
            'A hiring portal that streamlines applicant tracking and candidate evaluation — built during my internship at EXL Service using .NET Core MVC and Tailwind.',
        tags: ['.NET Core', 'Tailwind', 'MVC'],
        links: [{ label: 'GitHub ↗', href: 'https://github.com/othegagan/hirelink' }]
    },
    {
        placeholder: 'CARBON CELL',
        title: 'Carbon Cell Dashboard',
        description:
            'Clean analytics dashboard with live Cryptocurrency pricing and US Population analysis charts — intuitive and information-dense.',
        tags: ['React', 'Charts', 'API'],
        links: [{ label: 'Live ↗', href: 'https://carbon-cell-dashboard.vercel.app/' }]
    },
    {
        placeholder: 'C19',
        title: 'Covid Vaccination Platform',
        description:
            'A dynamic web solution for COVID vaccination services and pharmacy store management — built for real-world healthcare workflow needs.',
        tags: ['Web App', 'Healthcare'],
        links: [{ label: 'GitHub ↗', href: 'https://github.com/othegagan/project-c19' }]
    }
];

export const RESUME_URL = 'https://thegagan-portfolio.vercel.app/Gagan_Kumar_Resume.pdf' as const;
