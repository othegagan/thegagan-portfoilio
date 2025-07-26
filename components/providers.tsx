'use client';

import { AppProgressProvider } from '@bprogress/next';
import { LazyMotion } from 'motion/react';

import { Toaster } from '@/components/ui/sonner';

const loadFeatures = () => import('motion/react').then((res) => res.domMax);

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AppProgressProvider color="var(--color-info)" delay={500} height="2px" options={{ showSpinner: false }}>
                <LazyMotion features={loadFeatures} strict>
                    {children}
                </LazyMotion>
            </AppProgressProvider>

            <Toaster />
        </>
    );
}
