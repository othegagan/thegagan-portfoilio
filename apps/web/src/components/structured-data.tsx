import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SOCIAL_PROFILES } from '@/lib/site';

export function StructuredData() {
    const siteUrl = getSiteUrl();

    const payload = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                name: SITE_NAME,
                description: SITE_DESCRIPTION,
                url: siteUrl,
                inLanguage: 'en'
            },
            {
                '@type': 'Person',
                name: SITE_NAME,
                url: siteUrl,
                jobTitle: SITE_TAGLINE,
                description: SITE_DESCRIPTION,
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Bengaluru',
                    addressCountry: 'IN'
                },
                sameAs: [SOCIAL_PROFILES.github, SOCIAL_PROFILES.linkedin]
            }
        ]
    };

    return (
        <script
            // biome-ignore lint/security/noDangerouslySetInnerHtml: this initialScale is needed for the crawlers
            dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
            type='application/ld+json'
        />
    );
}
