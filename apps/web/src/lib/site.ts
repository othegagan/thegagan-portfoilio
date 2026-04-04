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

export const SITE_TAGLINE = 'Frontend Engineer · AI Tooling';

export const SITE_DESCRIPTION =
    'Frontend engineer in Bengaluru — AI-powered interfaces, agentic workflows, and pentesting automation. Next.js, React, TypeScript.';

export const SITE_KEYWORDS = [
    'Gagan Kumar',
    'frontend engineer',
    'AI tooling',
    'pentesting automation',
    'AI agents',
    'Bengaluru',
    'Next.js',
    'React',
    'TypeScript',
    'portfolio'
] as const;

export const SITE_LOCALE = 'en_IN';

export const SOCIAL_PROFILES = {
    github: 'https://github.com/othegagan',
    linkedin: 'https://www.linkedin.com/in/gagan-kumar-04a690286'
} as const;
