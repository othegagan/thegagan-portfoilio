export const MARQUEE_ITEMS = [
    'React',
    'Next.js',
    'TypeScript',
    'Vercel AI SDK',
    'TanStack Query',
    'Tailwind CSS',
    'shadcn',
    'MongoDB',
    'Firebase',
    'Redis',
    'Git',
    'GitHub',
    'Figma',
    'Linear',
    'Docker'
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

/** Grouped like the resume “skills trident”; pills use SVGL marks where available. */
export const SKILL_GROUPS: SkillGroup[] = [
    {
        title: 'Core expertise',
        subtitle: 'Production UI, forms, and client architecture',
        items: [
            { label: 'React 19', icons: ['react'] },
            { label: 'Next.js 16', icons: ['nextjs'] },
            { label: 'JavaScript · TypeScript', icons: ['javascript', 'typescript'] },
            { label: 'Motion', icons: ['react'] },
            { label: 'TanStack Query · Table', icons: ['reactquery'] },
            { label: 'Zustand · shadcn · Radix', icons: ['react', 'tailwind'] },
            { label: 'React Hook Form', icons: ['react'] },
            { label: 'Zod', icons: ['zod'] },
            { label: 'Bun · pnpm', icons: ['bun', 'pnpm'] }
        ]
    },
    {
        title: 'AI & agentic',
        subtitle: 'Streaming interfaces and multi-step agents',
        items: [
            { label: 'Mastra AI', icons: ['nodejs'] },
            { label: 'Vercel AI SDK', icons: ['vercel'] },
            { label: 'Agentic workflows · streaming UI', icons: ['vercel', 'react'] },
            { label: 'LLM tool use · multi-step agents', icons: ['anthropic'] }
        ]
    },
    {
        title: 'Backend & data',
        subtitle: 'Services, persistence, and real-time patterns',
        items: [
            { label: 'Node.js', icons: ['nodejs'] },
            { label: 'Firebase', icons: ['firebase'] },
            { label: 'Redis', icons: ['redis'] },
            { label: 'REST APIs', icons: ['openapi'] },
            { label: 'MongoDB', icons: ['mongodb'] },
            { label: 'WebSockets', icons: ['nodejs'] },
            { label: 'System design basics', icons: ['docker'] }
        ]
    },
    {
        title: 'Infra & tooling',
        subtitle: 'Delivery, observability, and collaboration',
        items: [
            { label: 'Git · GitHub', icons: ['git', 'github'] },
            { label: 'Docker', icons: ['docker'] },
            { label: 'Vercel', icons: ['vercel'] },
            { label: 'Sentry', icons: ['sentry'] },
            { label: 'Linear · Jira', icons: ['linear'] },
            { label: 'Apidog', icons: ['openapi'] }
        ]
    },
    {
        title: 'Design & product',
        subtitle: 'Systems, UX, and responsive craft',
        items: [
            { label: 'Figma', icons: ['figma'] },
            { label: 'UX thinking · responsive design', icons: ['figma'] },
            { label: 'UI design systems', icons: ['tailwind'] }
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
        date: 'APR 2025 — PRESENT',
        title: 'Software Developer',
        org: 'Astra Security',
        orgHref: 'https://getastra.com/',
        description:
            'Frontend for agent-based security workflows—streaming UIs, AI SDK integration, and shipping through high-frequency release cycles.',
        featured: true,
        highlights: [
            'Built real-time streaming UI for agent-based workflows with Next.js and the Vercel AI SDK so users see step-by-step execution instead of blocking responses.',
            'Developed frontend infrastructure for AI-driven systems, wiring agent execution into responsive, production-ready interfaces.',
            'Led migration from Next.js 14 to 15—roughly halved bundle size and improved performance and load times.',
            'Improved developer experience by moving from Yarn to Bun, cutting local build and iteration time.',
            'Owned production stability—cleared 30+ P0 issues in the first month and kept releases steady under heavy cadence.'
        ],
        tags: ['Next.js', 'Vercel AI SDK', 'Streaming UI', 'Agents'],
        badge: 'Full-time',
        badgeVariant: 'hot'
    },
    {
        date: 'AUG 2023 — DEC 2024',
        title: 'Software Developer',
        org: 'Dimension64 (Sarvantar AI)',
        orgHref: 'https://dimension64.com/',
        description:
            'Rebuilt a legacy Angular admin as a responsive React and Next.js product—mobile-capable workflows and a maintainable component layer.',
        highlights: [
            'Replaced a legacy Angular admin with React and Next.js so workflows that were desktop-only worked reliably on mobile.',
            'Ran the migration end to end—audit, scoped rewrite, incremental rollout—without disrupting active users.',
            'Shipped core features including Mapbox-based vehicle search and a reusable component system aligned with product needs.',
            'Worked with stakeholders to turn shifting operational requirements into stable UI flows.'
        ],
        tags: ['React', 'Next.js', 'Angular migration', 'Mapbox'],
        badge: 'Full-time',
        badgeVariant: 'hot'
    },
    {
        date: 'FEB 2023 — AUG 2023',
        title: 'Software Development Intern',
        org: 'EXL Service',
        orgHref: 'https://www.exlservice.com/',
        description:
            'Internal hiring platform—.NET Core backend, Tailwind frontend, and recruiter-facing workflows for candidate pipelines.',
        highlights: [
            'Built an internal hiring platform with a .NET Core backend and Tailwind UI to manage candidate pipelines.',
            'Designed recruiter workflows and dashboards that replaced manual tracking with clear stages and bottleneck visibility.',
            'Collaborated with senior engineers on patterns the team could extend after handoff.'
        ],
        tags: ['.NET Core', 'Tailwind', 'MVC', 'Internal tools'],
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
    },
    {
        date: 'JUN 2018 — MAY 2021',
        title: 'Bachelor of Computer Applications',
        org: 'Vivekananda Institute of Management',
        description: 'Graduated in 2021. Foundation in computer science, programming fundamentals, and software development.'
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
            'Full-featured project management: tasks, role-based dashboards, and real-time collaboration. Firestore and the Realtime Database keep state in sync across clients; role-aware UI reflects permissions.',
        tags: ['React', 'Firebase', 'Firestore', 'Tailwind CSS'],
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
            'Log exploration with server-side filtering by search, severity, and time range so performance stays predictable on larger datasets. Filters and pagination sync to the URL for shareable, reproducible views.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
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
            'Internal hiring portal built at EXL: candidates move through a structured five-stage pipeline (application → screening → interview → offer → onboarding). Recruiter dashboard shows per-stage counts, status history, and bottlenecks—built to replace spreadsheet tracking.',
        tags: ['.NET Core', 'MVC', 'Tailwind CSS', 'SQL Server'],
        links: [{ label: 'GitHub ↗', href: 'https://github.com/othegagan/hirelink' }],
        imageSrc: '/projects/hirelink.png',
        bentoClass: 'col-span-12 lg:col-span-4',
        imageFrameClass: 'aspect-video min-h-[160px] sm:min-h-[170px]',
        accentGradient: 'linear-gradient(145deg, rgb(192 132 252 / 0.45) 0%, rgb(236 72 153 / 0.3) 50%, rgb(15 15 15) 100%)'
    },
];

export const RESUME_URL = 'https://thegagan-portfolio.vercel.app/Gagan_Kumar_Resume.pdf' as const;
