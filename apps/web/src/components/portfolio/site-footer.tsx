import Link from 'next/link';

const FOOTER_LINKS = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
] as const;

export function SiteFooter() {
    return (
        <footer className='mx-auto max-w-[1140px] border-portfolio-border border-t px-7 py-10'>
            <div className='flex flex-col items-start justify-between gap-6 text-portfolio-muted text-sm md:flex-row md:items-center'>
                <div>
                    Designed & built by <strong className='font-semibold text-white/90'>Gagan Kumar</strong> — Bengaluru, India
                </div>
                <nav aria-label='Footer' className='flex flex-wrap items-center gap-x-6 gap-y-2'>
                    {FOOTER_LINKS.map(({ href, label }) => (
                        <Link className='transition hover:text-portfolio-orange' href={href} key={href}>
                            {label}
                        </Link>
                    ))}
                    <a
                        className='transition hover:text-portfolio-orange'
                        href='https://github.com/othegagan'
                        rel='noopener noreferrer'
                        target='_blank'>
                        GitHub ↗
                    </a>
                </nav>
            </div>
        </footer>
    );
}
