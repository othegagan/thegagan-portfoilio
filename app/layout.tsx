import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'thegagan portfolio',
    description: 'Driven by a vision to make the web a better place. Explore my portfolio, where each pixel reveals my journey.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning className='dark'>
            <head>
                <link rel='shortcut icon' href='./favicon.ico' type='image/x-icon' />
            </head>
            <body className={`${inter.className} min-h-screen antialiased`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
