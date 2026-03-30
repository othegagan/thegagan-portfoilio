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
    'Notion',
] as const;

export const SKILLS = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js 14',
    'Angular 16',
    'Tailwind CSS',
    'Node.js',
    'Python',
    '.NET Core MVC',
    'MongoDB',
    'Firebase',
    'Git & GitHub',
    'Figma',
    'Photoshop',
    'Illustrator',
    'VS Code'
] as const;

export interface TimelineItem {
    badge: string;
    badgeVariant?: 'hot';
    date: string;
    description: string;
    org: string;
    orgHref?: string;
    title: string;
}

export const EXPERIENCE_ITEMS: TimelineItem[] = [
    {
        date: 'AUG 2023 — DEC 2024',
        title: 'Software Developer',
        org: 'Dimension64 ↗',
        orgHref: 'https://dimension64.com/',
        description:
            'Contributed to innovative software products at a dynamic tech company. Collaborated with cross-functional teams to architect and ship high-quality, impactful web solutions.',
        badge: 'Full-time',
        badgeVariant: 'hot'
    },
    {
        date: 'FEB 2023 — AUG 2023',
        title: 'Software Development Intern',
        org: 'EXL Service ↗',
        orgHref: 'https://www.exlservice.com/',
        description:
            'Built the Hirelink hiring portal end-to-end — implementing .NET Core MVC for back-end business logic and crafting a responsive UI with Tailwind CSS to streamline the recruitment workflow.',
        badge: 'Internship'
    },
    {
        date: 'JAN 2020 — PRESENT',
        title: 'Freelance Graphic Designer',
        org: 'Remote',
        description:
            'Designed logos, business cards, brochures, and billboards for local startups and vendors — delivering visual identities that drove real business impact.',
        badge: 'Freelance'
    }
];

export const EDUCATION_ITEMS: TimelineItem[] = [
    {
        date: 'FEB 2022 — MAY 2023',
        title: 'Master of Computer Applications',
        org: 'PES University ↗',
        orgHref: 'https://pes.edu/',
        description:
            'Specialization in Web Technologies. Deepened expertise in modern web architectures, algorithms, and software engineering practices. Aggregate CGPA: 8.2',
        badge: '8.2 CGPA'
    },
    {
        date: 'JULY 2018 — SEP 2021',
        title: 'Bachelor of Computer Applications',
        org: 'Vivekananda Institute of Management',
        description:
            'Built a strong foundation in computer science, programming fundamentals, and software development. Aggregate CGPA: 8.2',
        badge: '8.2 CGPA'
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
