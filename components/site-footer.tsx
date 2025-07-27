import Link from 'next/link';

import { cn } from '@/lib/utils';

export function SiteFooter() {
    return (
        <footer className="max-w-screen overflow-x-hidden px-2 font-sans" id="contact">
            <div className="screen-line-before mx-auto border-edge border-x pt-4 md:max-w-3xl">
                {/* <p className="mb-1 text-balance px-4 text-center text-muted-foreground text-xs">
                    Inspired by tailwindcss.com + ui.shadcn.com
                </p> */}

                <p className="mb-4 text-balance px-4 text-center text-muted-foreground text-xs">
                    Crafted with{' '}
                    <Link className="link" href="https://nextjs.org/" rel="noopener" target="_blank">
                        Next.js
                    </Link>
                    , styled with{' '}
                    <Link className="link" href="https://tailwindcss.com/" rel="noopener" target="_blank">
                        TailwindCSS
                    </Link>
                    , and deployed on{' '}
                    <Link className="link" href="https://vercel.com/" rel="noopener" target="_blank">
                        Vercel
                    </Link>{' '}
                    and{' '}
                    <Link className="link" href="https://github.com/" rel="noopener" target="_blank">
                        GitHub
                    </Link>
                </p>

                <div
                    className={cn(
                        'screen-line-before screen-line-after flex w-full before:z-1 after:z-1',
                        'bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56'
                    )}>
                    <div className="mx-auto flex items-center justify-center gap-3 text-balance border-edge border-x bg-background px-4 py-3 text-center font-sans text-muted-foreground text-xs">
                        Copyright © {new Date().getFullYear()} Gagan Kuma. All rights reserved.
                    </div>
                </div>
            </div>
            <div className="pb-[env(safe-area-inset-bottom,0px)]">
                <div className="flex h-2" />
            </div>
        </footer>
    );
}
