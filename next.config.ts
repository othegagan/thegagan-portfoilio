import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: false,
    devIndicators: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
            },
        ],
        formats: ['image/webp'],
    },
};

export default nextConfig;
