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
        <div
            className='rounded-xl border border-portfolio-border bg-portfolio-bg2 p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-orange-500/30'
            onMouseEnter={() => iconRef.current?.startAnimation()}
            onMouseLeave={() => iconRef.current?.stopAnimation()}
            role='presentation'>
            <div className='mb-1 flex items-center gap-2'>
                <span className='font-extrabold text-[28px] text-portfolio-orange tracking-tight'>{n}</span>
                <Icon className='text-portfolio-orange/70' ref={iconRef} size={20} />
            </div>
            <div className='text-portfolio-muted text-xs uppercase tracking-wide'>{l}</div>
        </div>
    );
}

const STATS = [
    { n: '3+', l: 'Years of building on the web', Icon: TrendingUpIcon as StatCardProps['Icon'] },
    { n: '7+', l: 'Projects shipped', Icon: RocketIcon as StatCardProps['Icon'] },
    { n: '16+', l: 'Technologies in active use', Icon: LayersIcon as StatCardProps['Icon'] }
];

export function AboutSection() {
    return (
        <div id='about'>
            <div className='mx-auto max-w-[1140px] px-7 py-[100px]'>
                <div className={cn('grid grid-cols-1 items-start gap-16 lg:grid-cols-2', revealCls)} data-reveal>
                    <div>
                        <span className='mb-3.5 block text-[11px] text-portfolio-orange/85 uppercase tracking-[1.8px]'>About me</span>
                        <h2 className='mb-6 font-extrabold text-[clamp(30px,4.5vw,52px)] text-white tracking-tight'>
                            Developer by craft,
                            <br />
                            Agentic AI by obsession.
                        </h2>
                        <div className='text-base text-portfolio-muted leading-[1.85] [&_p]:mb-5'>
                            <p>
                                I&apos;m Gagan Kumar — a full-stack developer based in Bengaluru, India with a Master&apos;s in Computer
                                Applications from PES University, specializing in Web Technologies.
                            </p>
                            <p>
                                Right now I&apos;m deep in something that genuinely excites me — building{' '}
                                <strong className='font-medium text-[#bbb]'>AI agents that do autonomous pentesting</strong>. Teaching
                                machines to think like attackers, find vulnerabilities, and act without hand-holding. It&apos;s the most
                                interesting problem I&apos;ve worked on.
                            </p>
                            <p>
                                Beyond that I&apos;m obsessively exploring what else agentic AI can unlock — orchestration, tooling,
                                workflows. And yes, I still care deeply about great UI. Good design and intelligent systems aren&apos;t
                                opposites.
                            </p>
                            <div className='my-7 rounded-r-lg border-portfolio-orange border-l-2 bg-portfolio-orange-dim py-5 pr-6 pl-6'>
                                <p className='m-0 text-base text-white/65 italic leading-[1.75]'>
                                    &quot;If your work is work, you&apos;re not doing the right thing.&quot;
                                </p>
                            </div>
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
