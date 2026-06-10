export const MARQUEE_ITEMS = [
    'React',
    'Next.js',
    'TypeScript',
    'Vercel AI SDK',
    'Mastra AI',
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
            { label: 'React', icons: ['react'] },
            { label: 'Next.js', icons: ['nextjs'] },
            { label: 'JavaScript · TypeScript', icons: ['javascript', 'typescript'] },
            { label: 'Motion', icons: ['react'] },
            { label: 'TanStack Query · Table', icons: ['reactquery'] },
            { label: 'Zustand · shadcn · Radix UI', icons: ['react', 'tailwind'] },
            { label: 'React Hook Form', icons: ['react'] },
            { label: 'Zod', icons: ['zod'] },
            { label: 'Bun · pnpm', icons: ['bun', 'pnpm'] }
        ]
    },
    {
        title: 'AI & agentic',
        subtitle: 'Multi-agent workflows and orchestration',
        items: [
            { label: 'Mastra AI', icons: ['nodejs'] },
            { label: 'Vercel AI SDK', icons: ['vercel'] },
            { label: 'Multi-agent workflows', icons: ['vercel', 'react'] },
            { label: 'Agent orchestration', icons: ['anthropic'] },
            { label: 'AI workflow systems', icons: ['vercel'] },
            { label: 'Tool calling', icons: ['anthropic'] }
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
            { label: 'Apidog · Postman', icons: ['openapi'] },
            { label: 'Figma', icons: ['figma'] }
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
        date: 'APR 2024 — PRESENT',
        title: 'Software Developer',
        org: 'Astra Security',
        orgHref: 'https://getastra.com/',
        description:
            'Frontend architecture and core execution workflows for Attack AI—scalable AI-powered workflows, agent-driven experiences, and production platform capabilities.',
        featured: true,
        highlights: [
            'Designed and built the frontend architecture and core execution workflows for Attack AI, enabling scalable AI-powered workflows and end-to-end agent-driven experiences.',
            'Architected AI platform capabilities including AI Validator integration, workflow orchestration, and production-ready interfaces that improved automation and operational efficiency.',
            'Owned strategic initiatives including Company Level Management, Dashboard/Home Page modernization, and Custom Login Script integration—improving usability, onboarding, and enterprise customization.',
            'Led frontend modernization across repositories—React 19, Next.js 15, TanStack Query v5, and Tailwind v4—reducing technical debt and preparing the platform for future scale.',
            'Resolved 140+ triaged issues, addressed high-priority defects, and proactively stabilized critical workflows across multiple product areas.',
            'Contributed through code reviews, architecture discussions, and documentation of critical workflows and APIs—strengthening code quality and development standards across the team.'
        ],
        tags: ['Attack AI', 'React 19', 'Next.js 15', 'Agent workflows'],
        badge: 'Full-time',
        badgeVariant: 'hot'
    },
    {
        date: 'AUG 2023 — DEC 2024',
        title: 'Software Developer',
        org: 'Dimension64 (Sarvantar AI)',
        orgHref: 'https://dimension64.com/',
        description:
            'Led migration of a legacy Angular administration platform to React and Next.js—responsive across desktop and mobile with scalable frontend architecture.',
        highlights: [
            'Led migration of a legacy Angular-based administration platform to React and Next.js, delivering a responsive experience across desktop and mobile devices.',
            'Planned and executed the migration strategy end-to-end—auditing existing functionality, prioritizing rewrites, and rolling out incrementally without disrupting active users.',
            'Developed core platform capabilities including Mapbox-powered vehicle tracking, reusable UI components, and scalable frontend architecture aligned with product requirements.',
            'Partnered closely with product and business stakeholders to translate evolving operational requirements into reliable user experiences.'
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
            'Internal hiring platform with .NET Core backend and Tailwind UI—recruiter workflows and dashboards for structured candidate pipelines.',
        highlights: [
            'Built an internal hiring platform with a .NET Core backend and Tailwind UI frontend, used for managing candidate pipelines.',
            'Designed recruiter workflows and dashboards to replace manual tracking with structured stages and visibility into bottlenecks.',
            'Collaborated with senior engineers to establish patterns that could be extended after handoff.'
        ],
        tags: ['.NET Core', 'Tailwind', 'MVC', 'Internal tools'],
        badge: 'Internship'
    }
];

export const EDUCATION_ITEMS: TimelineItem[] = [
    {
        date: 'GRADUATED 2023',
        title: 'Master of Computer Applications',
        org: 'PES University',
        orgHref: 'https://pes.edu/',
        description: 'Specialization in Web Technologies. PES University, Bengaluru.'
    },
    {
        date: 'GRADUATED 2021',
        title: 'Bachelor of Computer Applications',
        org: 'Vivekananda Institute of Management',
        description: 'Foundation in computer science, programming fundamentals, and software development. Bengaluru.'
    }
];

export interface AdditionalExperienceItem {
    description: string;
    title: string;
}

export const ADDITIONAL_EXPERIENCE: AdditionalExperienceItem[] = [
    {
        title: 'Freelance Designer (College Years)',
        description:
            'Delivered branding and marketing assets for local businesses—developed client communication and requirement-gathering skills while managing projects independently.'
    },
    {
        title: 'Volunteer Work',
        description:
            'Assembled and configured donated computers for a local government school, helping provide access to computer education for underprivileged students.'
    }
];

export const INTERESTS = [
    'Exploring AI & emerging technologies',
    'Automotive engineering & vehicle modification',
    'Sci-fi literature & films',
    'Restoration of vintage weapons and cars'
] as const;

export interface Project {
    /** CSS `background` for the colored mockup frame (gradient). */
    accentGradient: string;
    /** Tailwind grid placement on large screens (12-column bento). */
    bentoClass: string;
    description: string;
    featured?: boolean;
    /** Tailwind classes for the screenshot area aspect / min-height. */
    imageFrameClass: string;
    imageSrc: string;
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
            'Final-year Masters project built solo—full-featured project management with tasks, role-based analytics dashboards, and real-time group chat per project. Firebase Realtime Database for live messaging, Firestore for task state, and Storage for attachments; role-aware dashboards for admins vs members.',
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
            'General-purpose log exploration with server-side filtering—search, severity, and date range queries run on the server for consistent performance at scale. Every filter and pagination state syncs to the URL for shareable, bookmarkable views. Fully responsive for incident response on mobile or wide desktop.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
        links: [
            { label: 'Live ↗', href: 'https://rapidlogr.vercel.app/' },
            { label: 'GitHub ↗', href: 'https://github.com/othegagan/rapidlogr' }
        ],
        imageSrc: '/projects/rapidlogr.png',
        bentoClass: 'col-span-12 lg:col-span-6',
        imageFrameClass: 'aspect-[16/10] min-h-[180px] sm:min-h-[200px]',
        accentGradient: 'linear-gradient(145deg, rgb(74 222 128 / 0.5) 0%, rgb(34 197 94 / 0.25) 40%, rgb(15 15 15) 100%)'
    },
    {
        placeholder: 'HIRELINK',
        title: 'Hirelink — Hiring Tracking Portal',
        description:
            'Internal hiring portal built at EXL Service—candidates tracked across a structured five-stage pipeline (application → screening → interview → offer → onboarding). Recruiter dashboard surfaces per-stage counts, status history, and bottleneck visibility to replace spreadsheet tracking.',
        tags: ['.NET Core', 'MVC', 'Tailwind CSS', 'SQL Server'],
        links: [{ label: 'GitHub ↗', href: 'https://github.com/othegagan/hirelink' }],
        imageSrc: '/projects/hirelink.png',
        bentoClass: 'col-span-12 lg:col-span-4',
        imageFrameClass: 'aspect-video min-h-[160px] sm:min-h-[170px]',
        accentGradient: 'linear-gradient(145deg, rgb(192 132 252 / 0.45) 0%, rgb(236 72 153 / 0.3) 50%, rgb(15 15 15) 100%)'
    }
];

export const RESUME_URL = 'https://thegagan-portfolio.vercel.app/Gagan_Kumar_Resume.pdf' as const;
