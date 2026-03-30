import '@thegagan-portfoilio/env/web';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    typedRoutes: true,
    reactCompiler: true,
    cacheComponents:false
};

export default nextConfig;
