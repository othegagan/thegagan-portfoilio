import Link from 'next/link';

import { HeroBackground } from './hero-background';

export function Hero() {
    return (
        <section className='hero relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-[100px] pb-20 text-center'>
            <HeroBackground />
            <div className='pointer-events-none absolute inset-0 overflow-hidden'>
                <div className='absolute -top-[120px] -left-20 h-[400px] w-[700px] animate-[drift_14s_ease-in-out_infinite_alternate] rounded-full bg-white/2.8 blur-[120px]' />
                <div className='absolute top-[20%] -right-[100px] h-[500px] w-[500px] animate-[drift_14s_ease-in-out_infinite_alternate] rounded-full bg-orange-500/4 blur-[120px] [animation-delay:-5s]' />
                <div className='absolute bottom-0 left-1/4 h-[350px] w-[600px] animate-[drift_14s_ease-in-out_infinite_alternate] rounded-full bg-white/1.5 blur-[120px] [animation-delay:-9s]' />
            </div>
            <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_52%_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_65%)]' />
            <div className='relative z-2 mx-auto max-w-[860px]'>
                <div className='mb-8 inline-flex animate-[fadeInUp_0.6s_ease_forwards_0.05s] items-center gap-2 rounded-full border border-portfolio-border bg-white/4 fill-mode-[forwards] px-3.5 py-1.5 text-portfolio-muted text-xs uppercase tracking-[1.4px] opacity-0'>
                    <span className='h-1.5 w-1.5 animate-[pulseOrange_2s_ease-in-out_infinite] rounded-full bg-portfolio-orange shadow-[0_0_8px_var(--color-portfolio-orange-glow)]' />
                    Available for new opportunities
                </div>

                <p className='mb-5 animate-[fadeInUp_0.5s_ease_forwards_0.08s] fill-mode-[forwards] font-mono text-[clamp(11px,1.1vw,13px)] text-portfolio-muted uppercase tracking-[2.5px] line-through decoration-[1.5px] decoration-portfolio-orange opacity-0'>
                    I&apos;m no hero.
                </p>

                <h1
                    className='mb-0 font-extrabold text-[clamp(46px,7.5vw,88px)] text-white leading-none tracking-[-3.5px] max-md:tracking-[-2px]'
                    data-hero-title>
                    {['Code', 'with', 'Purpose.', 'Design', 'with', 'Intent.', 'Ship', 'with'].map((w, i) => (
                        <span className='inline-block' data-word key={`${String(i)}-${w}`}>
                            {w}
                            &nbsp;
                        </span>
                    ))}
                    <span className='inline-block' data-word data-word-ai>
                        AI.
                    </span>
                </h1>

                <p className='mb-7 animate-[fadeInUp_0.6s_ease_forwards_0.7s] fill-mode-[forwards] text-[clamp(13px,1.3vw,16px)] text-white/22 leading-[1.7] opacity-0'>
                    Pentesting agents &nbsp;·&nbsp; AI-powered frontends &nbsp;·&nbsp; Agentic workflows
                </p>

                <p className='mx-auto mb-10 max-w-[540px] animate-[fadeInUp_0.6s_ease_forwards_0.92s] fill-mode-[forwards] text-[17px] text-portfolio-muted leading-[1.75] opacity-0'>
                    Gagan Kumar — <strong className='font-medium text-[#bbb]'>building at the edge of software and intelligence.</strong>{' '}
                    From pixel-perfect UIs to agents that think and act on their own. Currently obsessing over pentesting automation, AI
                    frontends, and whatever comes next.
                </p>
                <div className='mb-14 flex animate-[fadeInUp_0.6s_ease_forwards_1.06s] flex-wrap items-center justify-center gap-3 fill-mode-[forwards] opacity-0'>
                    <Link
                        className='relative cursor-none overflow-hidden rounded-lg bg-white px-[26px] py-3 font-bold text-[15px] text-black transition-all after:absolute after:inset-0 after:bg-linear-to-r after:from-40% after:from-transparent after:to-60% after:to-black/10 after:transition-transform after:duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(255,255,255,0.15)] after:hover:translate-x-full'
                        href='#projects'>
                        View My Work
                    </Link>
                    <Link
                        className='cursor-none rounded-lg border border-portfolio-border bg-transparent px-[26px] py-3 font-bold text-[15px] text-portfolio-text transition-all hover:-translate-y-0.5 hover:border-portfolio-border-high hover:bg-white/5'
                        href='#about'>
                        About Me ↓
                    </Link>
                </div>
                <div className='inline-flex animate-[fadeInUp_0.6s_ease_forwards_1.1s] items-center gap-2.5 rounded-[10px] border border-portfolio-border bg-white/3.5 fill-mode-[forwards] px-5 py-2.5 font-mono text-[13px] text-portfolio-muted opacity-0 transition-[border-color,background] duration-200 hover:border-portfolio-border-high hover:bg-white/5.5'>
                    <span className='text-portfolio-muted'>$</span>
                    <span className='text-white/85'>building autonomous-pentesting-agent --ai --agentic</span>
                    <span
                        className='inline-block h-[13px] w-2 animate-[portfolio-blink_1.1s_step-end_infinite] rounded-sm bg-white/65 align-middle'
                        style={{ marginLeft: '2px' }}
                    />
                </div>
            </div>
            <div className='absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-[fadeInUp_0.6s_ease_forwards_1.4s] flex-col items-center gap-1.5 fill-mode-[forwards] opacity-0'>
                <div className='h-[18px] w-[18px] animate-[portfolio-scroll-bounce_2s_ease-in-out_infinite] border-portfolio-muted2 border-r border-b' />
            </div>
        </section>
    );
}
