import '@thegagan-portfoilio/env/web';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    typedRoutes: true,
    reactCompiler: true,
    cacheComponents: false,
    transpilePackages: ['@thegagan-portfoilio/ui']
};

export default nextConfig;
