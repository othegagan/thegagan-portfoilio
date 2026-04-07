import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import '../index.css';
import Providers from '@/components/providers';
import { StructuredData } from '@/components/structured-data';
import {
    getSiteUrl,
    SITE_DESCRIPTION,
    SITE_KEYWORDS,
    SITE_LOCALE,
    SITE_NAME,
    SITE_TAGLINE
} from '@/lib/site';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

const siteUrl = getSiteUrl();
const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
    metadataBase,
    title: {
        default: `${SITE_NAME} — ${SITE_TAGLINE}`,
        template: `%s | ${SITE_NAME}`
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: siteUrl }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    keywords: [...SITE_KEYWORDS],
    category: 'technology',
    classification: 'Portfolio',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    alternates: {
        canonical: '/'
    },
    openGraph: {
        type: 'website',
        url: siteUrl,
        title: `${SITE_NAME} — ${SITE_TAGLINE}`,
        description: SITE_DESCRIPTION,
        siteName: SITE_NAME,
        locale: SITE_LOCALE,
        alternateLocale: ['en_US']
    },
    twitter: {
        card: 'summary_large_image',
        title: `${SITE_NAME} — ${SITE_TAGLINE}`,
        description: SITE_DESCRIPTION
    },
    formatDetection: {
        telephone: false,
        email: false,
        address: false
    },
    other: {
        'msapplication-TileColor': '#030303'
    }
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#030303' }
    ]
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className='relative scroll-smooth' lang='en' suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} relative antialiased`}>
                <StructuredData />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
