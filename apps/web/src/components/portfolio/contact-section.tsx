'use client';

import { GithubIcon, type GithubIconHandle } from '@thegagan-portfoilio/ui/components/github';
import { LinkedinIcon, type LinkedinIconHandle } from '@thegagan-portfoilio/ui/components/linkedin';
import { MailCheckIcon, type MailCheckIconHandle } from '@thegagan-portfoilio/ui/components/mail-check';
import { cn } from '@thegagan-portfoilio/ui/lib/utils';
import { useRef } from 'react';

import { revealCls } from '@/lib/portfolio-styles';

import { ContactForm } from './contact-form';

interface AnimHandle {
    startAnimation: () => void;
    stopAnimation: () => void;
}

interface ContactLinkData {
    href: string;
    label: string;
    renderIcon: (ref: React.Ref<AnimHandle>) => React.ReactNode;
    value: string;
}

const CONTACT_LINKS: ContactLinkData[] = [
    {
        href: 'mailto:hellothegagan@gmail.com',
        label: 'Email',
        value: 'hellothegagan@gmail.com',
        renderIcon: (ref) => <MailCheckIcon ref={ref as React.Ref<MailCheckIconHandle>} size={18} />
    },
    {
        href: 'https://github.com/othegagan',
        label: 'GitHub',
        value: 'github.com/othegagan',
        renderIcon: (ref) => <GithubIcon ref={ref as React.Ref<GithubIconHandle>} size={18} />
    },
    {
        href: 'https://www.linkedin.com/in/gagan-kumar-04a690286',
        label: 'LinkedIn',
        value: 'Gagan Kumar',
        renderIcon: (ref) => <LinkedinIcon ref={ref as React.Ref<LinkedinIconHandle>} size={18} />
    },

];

function ContactLinkCard({ link }: { link: ContactLinkData }) {
    const iconRef = useRef<AnimHandle>(null);
    return (
        <a
            className='group flex items-center justify-between gap-4 rounded-xl border border-portfolio-border bg-portfolio-bg2 px-5 py-4 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-orange-500/30'
            href={link.href}
            onMouseEnter={() => iconRef.current?.startAnimation()}
            onMouseLeave={() => iconRef.current?.stopAnimation()}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            target={link.href.startsWith('http') ? '_blank' : undefined}>
            <div className='flex min-w-0 items-center gap-4'>
                <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-portfolio-border bg-portfolio-bg text-portfolio-muted'>
                    {link.renderIcon(iconRef)}
                </div>
                <div className='min-w-0'>
                    <div className='text-[10px] text-portfolio-muted uppercase tracking-wider'>{link.label}</div>
                    <div className='truncate text-sm text-white'>{link.value}</div>
                </div>
            </div>
            <span aria-hidden className='shrink-0 text-portfolio-muted transition group-hover:text-portfolio-orange'>
                →
            </span>
        </a>
    );
}

export function ContactSection() {
    return (
        <div className='border-portfolio-border border-t px-7 py-[100px]' id='contact'>
            <div className='mx-auto max-w-[1140px]'>
                <span className={cn('mb-3.5 block text-[11px] text-portfolio-orange/85 uppercase tracking-[1.8px]', revealCls)} data-reveal>
                    Get in touch
                </span>
                <h2 className={cn('mb-14 font-extrabold text-[clamp(30px,4.5vw,52px)] text-white tracking-tight', revealCls)} data-reveal>
                    Don&apos;t be shy — <br />
                    say <span className='text-portfolio-orange'>hello.</span>
                </h2>
                <div className={cn('mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16', revealCls)} data-reveal>
                    <div className='flex flex-col gap-8'>
                        <p className='text-base text-portfolio-muted leading-[1.8]'>
                            Whether you have a project in mind, a role to fill, or just want to talk tech — my inbox is always open.
                        </p>
                        <div className='flex flex-col gap-3'>
                            {CONTACT_LINKS.map((link) => (
                                <ContactLinkCard key={link.href} link={link} />
                            ))}
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
