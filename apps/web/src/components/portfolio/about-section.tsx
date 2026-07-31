'use client';

import { LayersIcon } from '@thegagan-portfoilio/ui/components/layers';
import { RocketIcon } from '@thegagan-portfoilio/ui/components/rocket';
import { TrendingUpIcon } from '@thegagan-portfoilio/ui/components/trending-up';
import { cn } from '@thegagan-portfoilio/ui/lib/utils';
import { useRef } from 'react';

import { ADDITIONAL_EXPERIENCE, INTERESTS } from '@/lib/portfolio-data';
import { revealCls } from '@/lib/portfolio-styles';

interface StatCardProps {
    Icon: React.ForwardRefExoticComponent<
        React.HTMLAttributes<HTMLDivElement> & { size?: number } & React.RefAttributes<{
                startAnimation: () => void;
                stopAnimation: () => void;
            }>
    >;
    l: string;
    n: string;
}

function StatCard({ n, l, Icon }: StatCardProps) {
    const iconRef = useRef<{ startAnimation: () => void; stopAnimation: () => void }>(null);
    return (
        <button
            className='relative overflow-hidden rounded-xl border border-portfolio-border bg-portfolio-bg2 p-6 text-left transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-orange-500/30'
            onMouseEnter={() => iconRef.current?.startAnimation()}
            onMouseLeave={() => iconRef.current?.stopAnimation()}
            type='button'>
            <Icon aria-hidden className='pointer-events-none absolute right-3 -bottom-2 text-portfolio-orange/15' ref={iconRef} size={96} />
            <div className='relative z-10'>
                <div className='mb-1 font-extrabold text-[28px] text-portfolio-orange tracking-tight'>{n}</div>
                <div className='text-portfolio-muted text-xs uppercase tracking-wide'>{l}</div>
            </div>
        </button>
    );
}

const STATS = [
    { n: '3', l: 'Years building production applications', Icon: TrendingUpIcon as StatCardProps['Icon'] },
    { n: '140+', l: 'Triaged issues resolved at Astra', Icon: RocketIcon as StatCardProps['Icon'] },
    { n: '16+', l: 'Tools & technologies in active use', Icon: LayersIcon as StatCardProps['Icon'] }
];

export function AboutSection() {
    return (
        <div id='about'>
            <div className='mx-auto max-w-[1140px] px-7 py-[100px]'>
                <div className={cn('grid grid-cols-1 items-start gap-16 lg:grid-cols-2', revealCls)} data-reveal>
                    <div>
                        <span className='mb-3.5 block text-[11px] text-portfolio-orange/85 uppercase tracking-[1.8px]'>About me</span>
                        <h2 className='mb-6 font-extrabold text-[clamp(30px,4.5vw,52px)] text-white'>
                            Software developer by craft,
                            <br />
                            agentic AI by obsession.
                        </h2>
                        <div className='text-[17px] text-portfolio-muted leading-[1.75] [&_p]:mb-5'>
                            <p>
                                I&apos;m Gagan Kumar, a Software Engineer focused on
                                <strong className='font-medium text-[#bbb]'> frontend architecture</strong>,{' '}
                                <strong className='font-medium text-[#bbb]'>AI-powered products</strong>, and{' '}
                                <strong className='font-medium text-[#bbb]'>developer experience</strong>. I enjoy building systems where
                                complex workflows feel simple and intuitive to the people using them.
                            </p>
                            <p>
                                At Astra Security, I design and build the frontend architecture for Attack AI, creating scalable
                                agent-driven experiences, AI Validator integrations, and platform capabilities that improve automation and
                                operational efficiency.
                            </p>
                            <p>
                                I have led frontend modernization efforts across{' '}
                                <strong className='font-medium text-[#bbb]'>
                                    {' '}
                                    React 19, Next.js 15, TanStack Query v5, and Tailwind v4,
                                </strong>{' '}
                                while owning strategic initiatives ranging from dashboard modernization to enterprise customization. I
                                believe great products are built when the user experience and the underlying architecture evolve together.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        {STATS.map((s) => (
                            <StatCard key={s.l} {...s} />
                        ))}
                    </div>
                </div>

                <div className={cn('mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2', revealCls)} data-reveal>
                    <div>
                        <span className='mb-3 block text-[11px] text-portfolio-orange/85 uppercase tracking-[1.8px]'>
                            Additional experience
                        </span>
                        <div className='flex flex-col gap-4'>
                            {ADDITIONAL_EXPERIENCE.map((item) => (
                                <div className='rounded-xl border border-portfolio-border bg-portfolio-bg2 p-5' key={item.title}>
                                    <h3 className='mb-2 font-semibold text-[15px] text-white'>{item.title}</h3>
                                    <p className='text-[14px] text-portfolio-muted leading-relaxed'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <span className='mb-3 block text-[11px] text-portfolio-orange/85 uppercase tracking-[1.8px]'>
                            Hobbies & interests
                        </span>
                        <ul className='flex flex-wrap gap-2'>
                            {INTERESTS.map((interest) => (
                                <li
                                    className='rounded-lg border border-portfolio-border bg-portfolio-bg2 px-3 py-2 text-[13px] text-portfolio-muted'
                                    key={interest}>
                                    {interest}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
