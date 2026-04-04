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
        date: 'JAN 2025 — PRESENT',
        title: 'Frontend Engineer · AI Tooling',
        org: 'Astra Security',
        orgHref: 'https://getastra.com/',
        description:
            'Building AI-powered pentesting agents and customer-facing tools in a security product org—where the UI has to keep up with fast-moving agentic workflows.',
        featured: true,
        highlights: [
            'Built real-time agentic workflow UIs that surface multi-step AI reasoning to non-technical users — handling streaming states, partial results, and agent handoffs in a production React/Next.js app.',
            'Own full lifecycle of frontend framework upgrades — from dependency audit and migration planning through rollout and regression coverage — keeping the product shipping without freezing the roadmap.',
            'Partner with product and engineering stakeholders to translate technical debt into sequenced, committable plans; reduced cross-team friction on stack decisions.'
        ],
        tags: ['AI agents', 'Framework upgrades', 'Product UI', 'Security'],
        badge: 'Full-time',
        badgeVariant: 'hot'
    },
    {
        date: 'AUG 2023 — DEC 2024',
        title: 'Frontend Engineer',
        org: 'Dimension64',
        orgHref: 'https://dimension64.com/',
        description:
            'Product engineering in a fast-moving team—shipping features while modernizing how the codebase kept pace with the roadmap.',
        highlights: [
            'Led end-to-end migration of React and Angular codebases — from audit through staged rollout — with clear regression ownership and zero unplanned downtime.',
            'Drove cross-squad upgrade coordination so framework changes landed on schedule, not as emergency fire drills.',
            'Shipped customer-facing features on a modernized, maintainable stack with cleaner module boundaries and significantly less glue code.'
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
            'Built Hirelink hiring portal end-to-end in a 6-month window — .NET Core MVC backend, Tailwind UI, applicant tracking and recruiter workflows — production-bound, not a demo.',
            'Translated ambiguous HR stakeholder requirements into shippable milestones; paired with senior devs to write patterns that survived handoff.'
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
    /** CSS `background` for the colored mockup frame (gradient). */
    accentGradient: string;
    /** Tailwind grid placement on large screens (12-column bento). */
    bentoClass: string;
    description: string;
    featured?: boolean;
    imageSrc: string;
    /** Tailwind classes for the screenshot area aspect / min-height. */
    imageFrameClass: string;
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
        links: [{ label: 'Live ↗', href: 'https://triboon.web.app/' }],
        imageSrc: '/projects/triboon.png',
        bentoClass: 'col-span-12 lg:col-span-6',
        imageFrameClass: 'aspect-[16/10] min-h-[180px] sm:min-h-[200px]',
        accentGradient: 'linear-gradient(145deg, rgb(251 146 60 / 0.55) 0%, rgb(244 63 94 / 0.35) 45%, rgb(15 15 15) 100%)'
    },
    {
        placeholder: 'RAPIDLOGR',
        title: 'RapidLogr',
        description:
            'A dynamic log exploration tool with robust search and analysis. Navigate logs effortlessly, uncover insights, and troubleshoot at speed.',
        tags: ['React', 'Search'],
        links: [{ label: 'Live ↗', href: 'https://rapidlogr.vercel.app/' }],
        imageSrc: '/projects/rapidlogr.png',
        bentoClass: 'col-span-12 lg:col-span-6',
        imageFrameClass: 'aspect-[16/10] min-h-[180px] sm:min-h-[200px]',
        accentGradient: 'linear-gradient(145deg, rgb(74 222 128 / 0.5) 0%, rgb(34 197 94 / 0.25) 40%, rgb(15 15 15) 100%)'
    },
    {
        placeholder: 'HIRELINK',
        title: 'Hirelink',
        description:
            'A hiring portal that streamlines applicant tracking and candidate evaluation — built during my internship at EXL Service using .NET Core MVC and Tailwind.',
        tags: ['.NET Core', 'Tailwind', 'MVC'],
        links: [{ label: 'GitHub ↗', href: 'https://github.com/othegagan/hirelink' }],
        imageSrc: '/projects/hirelink.png',
        bentoClass: 'col-span-12 lg:col-span-4',
        imageFrameClass: 'aspect-video min-h-[160px] sm:min-h-[170px]',
        accentGradient: 'linear-gradient(145deg, rgb(192 132 252 / 0.45) 0%, rgb(236 72 153 / 0.3) 50%, rgb(15 15 15) 100%)'
    },
];

export const RESUME_URL = 'https://thegagan-portfolio.vercel.app/Gagan_Kumar_Resume.pdf' as const;
