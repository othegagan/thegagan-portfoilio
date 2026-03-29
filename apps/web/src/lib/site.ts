const TRAILING_SLASH = /\/$/;

/** Canonical site URL for metadata, OG, and sitemap. Set NEXT_PUBLIC_SITE_URL in production (e.g. https://example.com). */
export function getSiteUrl(): string {
    const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
    if (fromEnv) {
        return fromEnv.replace(TRAILING_SLASH, '');
    }
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    return 'https://thegagan-portfolio.vercel.app';
}

export const SITE_NAME = 'Gagan Kumar';

export const SITE_TAGLINE = 'Software Developer';

export const SITE_DESCRIPTION =
    'Software developer in Bengaluru — AI-powered frontends, agentic workflows, and autonomous pentesting agents. Next.js, React, TypeScript.';

export const SITE_KEYWORDS = [
    'Gagan Kumar',
    'software developer',
    'Bengaluru',
    'Next.js',
    'React',
    'TypeScript',
    'AI',
    'frontend',
    'portfolio'
] as const;

export const SITE_LOCALE = 'en_IN';

export const SOCIAL_PROFILES = {
    github: 'https://github.com/othegagan',
    linkedin: 'https://www.linkedin.com/in/gagan-kumar-04a690286'
} as const;
