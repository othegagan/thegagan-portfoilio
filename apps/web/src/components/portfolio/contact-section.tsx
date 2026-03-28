import { cn } from '@thegagan-portfoilio/ui/lib/utils';

import { revealCls } from '@/lib/portfolio-styles';

import { ContactForm } from './contact-form';

const CONTACT_LINKS = [
    { href: 'mailto:hellothegagan@gmail.com', icon: '✉', label: 'Email', value: 'hellothegagan@gmail.com' },
    { href: 'https://github.com/othegagan', icon: '⌥', label: 'GitHub', value: 'github.com/othegagan' },
    {
        href: 'https://www.linkedin.com/in/gagan-kumar-04a690286',
        icon: 'in',
        label: 'LinkedIn',
        value: 'Gagan Kumar'
    },
    { href: 'tel:+919036644552', icon: '☎', label: 'Phone', value: '+91 9036644552' }
] as const;

export function ContactSection() {
    return (
        <div className='border-portfolio-border border-t px-7 py-[100px]' id='contact'>
            <div className='mx-auto max-w-[1140px]'>
                <span className={cn('mb-3.5 block text-[11px] text-portfolio-orange/85 uppercase tracking-[1.8px]', revealCls)} data-reveal>
                    Get in touch
                </span>
                <h2 className={cn('mb-14 font-extrabold text-[clamp(30px,4.5vw,52px)] text-white tracking-tight', revealCls)} data-reveal>
                    Let&apos;s build something great.
                </h2>
                <div className={cn('mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16', revealCls)} data-reveal>
                    <div className='flex flex-col gap-8'>
                        <p className='text-base text-portfolio-muted leading-[1.8]'>
                            Whether you have a project in mind, a role to fill, or just want to talk tech — my inbox is always open. I reply
                            within 24 hours.
                        </p>
                        <div className='flex flex-col gap-3'>
                            {CONTACT_LINKS.map((link) => (
                                <a
                                    className='group flex items-center justify-between gap-4 rounded-xl border border-portfolio-border bg-portfolio-bg2 px-5 py-4 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-orange-500/30'
                                    href={link.href}
                                    key={link.href}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}>
                                    <div className='flex min-w-0 items-center gap-4'>
                                        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-portfolio-border bg-portfolio-bg text-portfolio-muted text-xs'>
                                            {link.icon}
                                        </div>
                                        <div className='min-w-0'>
                                            <div className='text-[10px] text-portfolio-muted uppercase tracking-wider'>{link.label}</div>
                                            <div className='truncate text-sm text-white'>{link.value}</div>
                                        </div>
                                    </div>
                                    <span
                                        aria-hidden
                                        className='shrink-0 text-portfolio-muted transition group-hover:text-portfolio-orange'>
                                        →
                                    </span>
                                </a>
                            ))}
                        </div>
                        <p className='text-portfolio-muted2 text-xs'>📍 Bengaluru, Karnataka, India</p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
