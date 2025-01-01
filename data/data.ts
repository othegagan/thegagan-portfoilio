import { Icons } from '@/components/icons/icons';

export const timeline = [
    {
        id: 1,
        name: 'BCA',
        title: 'Bachelors in Computer Applications',
        desc: 'Aggregate of 8.2 CGPA ',
        place: 'Vivekananda Institue of Management',
        link: '',
        year: 'JULY 2018 - SEP 2021  ',
    },
    {
        id: 2,
        name: `freelance `,
        title: 'Freelance graphic designer',
        desc: `Worked as a freelance graphic designer for local startups and vendors, by crafting impactful logos,
        business cards, brochures, billboards, and flyers. Which intern boosting revenue for clients through
        visually compelling design solutions.`,
        place: 'Remote',
        link: '',
        year: `JAN 2020 - PRESENT ${'  '}`,
    },
    {
        id: 3,
        name: 'MCA',
        title: 'Masters in Computer Applications',
        desc: 'Specialization in Web Technologies. Aggregate of 8.2 CGPA',
        place: 'PES University',
        link: 'https://pes.edu/',
        year: 'FEB 2022 - MAY 2023',
    },
    {
        id: 4,
        name: 'Intern',
        title: 'Intern, Software Development',
        desc: `As an intern at EXL Service, I played a key role in developing the Hiring
        Portal, a web application aimed at streamlining the hiring process. My
        responsibilities encompassed implementing back-end business logic
        using .NET Core MVC, crafting a user-friendly and responsive front-end
        with Tailwind CSS.`,
        place: 'EXL Service',
        link: 'https://www.exlservice.com/',
        year: 'feb 2023 - aug 2023',
    },
    {
        id: 5,
        name: 'Full time',
        title: 'Software Developer',
        desc: `Actively contributing to the development of innovative software
        solutions at Dimension64, a dynamic tech company. Collaborating with
        cross-functional teams to deliver high-quality and impactful projects.`,
        place: 'Dimension64',
        link: 'https://dimension64.com/',
        year: 'AUG 2023 - DEC 2024',
    },
];

export const skills = [
    { id: 1, name: 'User-centric UI design' },
    { id: 3, name: 'Version control (GitHub & Git Lab)' },
    { id: 4, name: 'Responsive design' },
    { id: 7, name: 'Wire-framing & prototyping' },
    { id: 8, name: 'Effective teamwork & communication' },
    { id: 9, name: 'Adobe Creative Suite proficiency (Photoshop, Illustrator, XD)' },
];

export type Technology = {
    id: string;
    name: string;
    icon?: keyof typeof Icons;
};

export const technologies: Technology[] = [
    {
        id: 'html',
        name: 'HTML',
        icon: 'html',
    },
    {
        id: 'css',
        name: 'CSS',
        icon: 'css',
    },
    {
        id: 'react',
        name: 'React',
        icon: 'react',
    },
    {
        id: 'javascript',
        name: 'Javascript',
        icon: 'javascript',
    },
    {
        id: 'nextjs',
        name: 'Next.js 14',
        icon: 'nextjs',
    },
    {
        id: 'angular',
        name: 'Angular 16',
        icon: 'angular',
    },
    {
        id: 'tailwindcss',
        name: 'Tailwind CSS',
        icon: 'tailwind',
    },
    {
        id: 'typescript',
        name: 'Typescript',
        icon: 'typescript',
    },
    {
        id: 'python',
        name: 'Python',
        icon: 'python',
    },
    {
        id: 'mongodb',
        name: 'Mongo DB',
        icon: 'mongodb',
    },
    {
        id: 'nodejs',
        name: 'Node JS',
        icon: 'nodejs',
    },
    {
        id: 'firebase',
        name: 'Firebase',
        icon: 'firebase',
    },
    {
        id: 'git',
        name: 'Git',
        icon: 'github',
    },
    {
        id: 'figma',
        name: 'Figma',
        icon: 'figma',
    },
    {
        id: 'photoshop',
        name: 'Photoshop',
        icon: 'photoshop',
    },
    {
        id: 'illustrator',
        name: 'Illustrator',
        icon: 'illustrator',
    },
    {
        id: 'vscode',
        name: 'VS code',
        icon: 'vscode',
    },
];

export type ProjectType = {
    id: number;
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;

    link?: string;
    alt?: string;
    imageURL?: string;
};

export const projects: ProjectType[] = [
    {
        id: 2,
        title: 'Triboon',
        description: 'A responsive project management solution powered by ReactJS and Firebase.',
        link: 'https://triboon.web.app/',
        alt: 'Triboon',
        imageURL: '/triboon.png',
    },
    {
        id: 1,
        title: 'RapidLogr',
        description:
            'A dynamic log exploration tool with robust search and analysis features.It allows users to uncover insights, troubleshoot issues, and navigate logs effortlessly with these stellar features..!',
        link: 'https://rapidlogr.vercel.app/',
        alt: 'RapidLogr',
        imageURL: '/rapidlogr.png',
    },
    {
        id: 3,
        title: 'Git Finder',
        description: 'Web app to search GitHub users and view profiles, built with Angular and Tailwind CSS.',
        link: 'https://fyle-internship-challenge-23.vercel.app/',
        alt: 'Git Finder',
        imageURL: '/gitfinder.png',
    },
    {
        id: 6,
        title: 'Ecommerce',
        description:
            'Project aims to create a simple and intuitive sign-up and login flow for an e-commerce website. Users can register, log in, and mark their interests in various product categories.',
        link: 'https://ecommerce-assignment-delta.vercel.app/',
        alt: 'Ecommerce',
        imageURL: '/ecommerce.png',
    },

    {
        id: 5,
        title: 'Hirelink',
        description:
            'Hirelink is a web application designed to streamline the hiring process for recruiters and hiring managers. It provides a user-friendly interface for applicant tracking, and candidate evaluation.',
        link: 'https://github.com/othegagan/hirelink',
        alt: 'Hirelink',
        imageURL: '/hirelink.png',
    },
    {
        id: 4,
        title: 'Carbon Cell Dashboard',
        description: 'Simple and intuitive dashboard website. Users can view the Cryptocurrency Prices and US Popluation analysis.',
        link: 'https://carbon-cell-dashboard.vercel.app/',
        alt: 'Carbon Cell',
        imageURL: '/carboncell.png',
    },

    {
        id: 7,
        title: 'Covid Vaccination and Pharma Store Platform',
        description: 'A dynamic web solution for COVID vaccination services and pharmacy store management.',
        link: 'https://github.com/othegagan/project-c19',
        alt: 'Covid 19',
        imageURL: '/covid.png',
    },
];
