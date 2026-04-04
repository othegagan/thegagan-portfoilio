'use client';

import { LayersIcon } from '@thegagan-portfoilio/ui/components/layers';
import { RocketIcon } from '@thegagan-portfoilio/ui/components/rocket';
import { TrendingUpIcon } from '@thegagan-portfoilio/ui/components/trending-up';
import { cn } from '@thegagan-portfoilio/ui/lib/utils';
import { useRef } from 'react';

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
    { n: '3', l: 'Years of building on the web', Icon: TrendingUpIcon as StatCardProps['Icon'] },
    { n: '5+', l: 'Products shipped', Icon: RocketIcon as StatCardProps['Icon'] },
    { n: '16+', l: 'Tools & Technologies in active use', Icon: LayersIcon as StatCardProps['Icon'] }
];

export function AboutSection() {
    return (
        <div id='about'>
            <div className='mx-auto max-w-[1140px] px-7 py-[100px]'>
                <div className={cn('grid grid-cols-1 items-start gap-16 lg:grid-cols-2', revealCls)} data-reveal>
                    <div>
                        <span className='mb-3.5 block text-[11px] text-portfolio-orange/85 uppercase tracking-[1.8px]'>About me</span>
                        <h2 className='mb-6 font-extrabold text-[clamp(30px,4.5vw,52px)] text-white'>
                            Frontend engineer by craft,
                            <br />
                            Agentic AI by obsession.
                        </h2>
                        <div className='text-[17px] text-portfolio-muted leading-[1.75] [&_p]:mb-5'>
                            <p>
                                I&apos;m Gagan Kumar. My strongest work is on the{' '}
                                <strong className='font-medium text-[#bbb]'>frontend and product surface</strong>—AI-assisted interfaces,
                                motion, and the layer where a complex stack still has to feel obvious to the person using it.
                            </p>
                            <p>
                                Lately that obsession shows up as <strong className='font-medium text-[#bbb]'>pentesting automation</strong>{' '}
                                and autonomous agents—attack-surface reasoning, real vulnerabilities, minimal hand-holding. The domain is
                                unforgiving; the abstractions have to earn their keep.
                            </p>
                            <p>
                                I still split time between <strong className='font-medium text-[#bbb]'>AI frontends</strong>, orchestration,
                                and whatever comes next for agentic workflows. From pixel-level UI to systems that think and act on their
                                own—the surface and the machinery have to agree.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        {STATS.map((s) => (
                            <StatCard key={s.l} {...s} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
