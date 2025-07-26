import '@/styles/globals.css';

import type { Metadata, Viewport } from 'next';

import { Providers } from '@/components/providers';
import { ScrollTop } from '@/components/scroll-top';
import { SiteFooter } from '@/components/site-footer';
import { USER } from '@/data/user';
import { fontMono, fontSans } from '@/lib/fonts';

export const metadata: Metadata = {
    alternates: {
        canonical: '/',
    },
    title: {
        template: USER.displayName,
        default: `${USER.displayName} - ${USER.jobTitle}`,
    },
    description: USER.bio,
    keywords: USER.keywords,
    authors: [
        {
            name: 'othegagan',
            url: USER.website,
        },
    ],
    creator: 'othegagan',
    openGraph: {
        siteName: USER.displayName,
        url: '/',
        type: 'profile',
        firstName: USER.firstName,
        lastName: USER.lastName,
        username: USER.username,
        // images: [
        //     {
        //         url: SITE_INFO.ogImage,
        //         width: 1200,
        //         height: 630,
        //         alt: SITE_INFO.name,
        //     },
        // ],
    },
    // icons: {
    //     icon: [
    //         {
    //             url: '',
    //             sizes: 'any',
    //         },
    //         {
    //             url: '',
    //             type: 'image/svg+xml',
    //         },
    //     ],
    //     apple: {
    //         url: '',
    //         type: 'image/png',
    //         sizes: '180x180',
    //     },
    // },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    themeColor: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={`${fontSans.variable} ${fontMono.variable} dark`} lang="en">
            <body>
                <Providers>
                    <main className="max-w-screen overflow-x-hidden px-2">{children}</main>
                    <SiteFooter />
                    <ScrollTop />
                </Providers>
            </body>
        </html>
    );
}
