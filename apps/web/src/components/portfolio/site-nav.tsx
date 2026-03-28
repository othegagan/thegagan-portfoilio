'use client';

import { cn } from '@thegagan-portfoilio/ui/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { RESUME_URL } from '@/lib/portfolio-data';

import { NavLogo } from './nav-logo';

const NAV_LINKS = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
] as const;

export function SiteNav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed inset-x-0 top-0 z-100 flex h-[60px] items-center justify-between px-8 transition-[background,border-color,backdrop-filter] duration-300',
                scrolled
                    ? 'border-portfolio-border border-b bg-portfolio-bg/90 backdrop-blur-xl'
                    : 'border-transparent border-b bg-transparent'
            )}
            id='nav'>
            <Link className='flex items-center gap-2.5 font-bold text-[15px] tracking-tight' href='/'>
                <NavLogo />
            </Link>
            <div className='hidden gap-7 md:flex'>
                {NAV_LINKS.map(({ href, label }) => (
                    <Link
                        className='text-[13.5px] text-portfolio-muted transition-colors hover:text-portfolio-orange'
                        href={href}
                        key={href}>
                        {label}
                    </Link>
                ))}
            </div>
            <div className='flex items-center gap-2.5'>
                <a
                    className='inline-flex cursor-none items-center gap-1.5 rounded-lg border border-portfolio-border bg-transparent px-4 py-1.5 font-medium text-[13px] text-portfolio-text transition-all hover:border-portfolio-border-high hover:bg-white/5'
                    href={RESUME_URL}
                    rel='noopener noreferrer'
                    target='_blank'>
                    Resume ↗
                </a>
                <Link
                    className='inline-flex cursor-none items-center gap-1.5 rounded-lg border border-portfolio-orange bg-portfolio-orange px-4 py-1.5 font-medium text-[13px] text-white transition-all hover:-translate-y-px hover:bg-[#ea6a0a] hover:shadow-[0_6px_24px_rgba(249,115,22,0.3)]'
                    href='#contact'>
                    Hire Me
                </Link>
            </div>
        </nav>
    );
}
