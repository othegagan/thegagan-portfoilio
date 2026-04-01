import { cn } from '@thegagan-portfoilio/ui/lib/utils';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { SkillItem } from '@/lib/portfolio-data';
import { SKILL_GROUPS } from '@/lib/portfolio-data';
import { revealCls } from '@/lib/portfolio-styles';

import { SkillIcon } from './skill-icons';

const BENTO_PANELS: { items: SkillItem[]; subtitle: string; title: string; wide?: boolean }[] = [
    {
        title: 'Build',
        subtitle: 'Languages, frameworks & runtime',
        items: [...SKILL_GROUPS[0].items, ...SKILL_GROUPS[1].items]
    },
    {
        title: 'Data, testing & quality',
        subtitle: 'Persistence, schemas, tests, and observability',
        items: [...SKILL_GROUPS[2].items, ...SKILL_GROUPS[3].items]
    },
    {
        title: 'Design & workflow',
        subtitle: 'Craft, deploy, collaborate, automate',
        items: [...SKILL_GROUPS[4].items, ...SKILL_GROUPS[5].items],
        wide: true
    }
];

function SkillPill({ item }: { item: SkillItem }) {
    const compact = item.icons.length > 1;
    return (
        <div className='group flex items-center gap-2.5 py-1.5 transition-[color,transform] duration-200 sm:gap-3' data-skill-pill>
            <span className='flex shrink-0 items-center gap-0.5' title={item.label}>
                {item.icons.map((slug) => (
                    <SkillIcon className={compact ? 'size-[18px] sm:size-5' : 'size-6 sm:size-7'} key={slug} slug={slug} />
                ))}
            </span>
            <span className='min-w-0 font-medium text-[13px] text-white/72 leading-tight tracking-tight transition-colors group-hover:text-white'>
                {item.label}
            </span>
        </div>
    );
}

function BentoPanel({
    children,
    className,
    subtitle,
    title
}: {
    children: ReactNode;
    className?: string;
    subtitle: string;
    title: string;
}) {
    return (
        <div
            className={cn(
                'flex flex-col overflow-hidden rounded-2xl border border-portfolio-border/80 bg-portfolio-bg2/40 p-4 sm:p-5',
                className
            )}>
            <div className='mb-3 sm:mb-4'>
                <h3 className='font-bold text-[14px] text-white tracking-tight sm:text-[15px]'>{title}</h3>
                <p className='mt-0.5 text-[12px] text-portfolio-muted leading-snug sm:text-[13px]'>{subtitle}</p>
            </div>
            {children}
        </div>
    );
}

export function SkillsSection() {
    return (
        <div className='border-portfolio-border border-t px-7 py-16 md:py-24'>
            <div className='mx-auto max-w-[1140px]'>
                <span className={cn('mb-2.5 block text-[11px] text-portfolio-orange/85 uppercase tracking-[1.8px]', revealCls)} data-reveal>
                    Skills & Tools
                </span>
                <h2 className={cn('mb-3 font-extrabold text-[clamp(28px,4vw,48px)] text-white tracking-tight', revealCls)} data-reveal>
                    Stack, craft, and how I work.
                </h2>
                <p
                    className={cn('mb-8 max-w-[580px] text-[15px] text-portfolio-muted leading-relaxed sm:text-[16px]', revealCls)}
                    data-reveal>
                    Tools I actually ship with—official brand marks from{' '}
                    <Link
                        className='text-portfolio-orange underline decoration-portfolio-orange/35 underline-offset-2 transition-colors hover:text-white hover:decoration-white/40'
                        href='https://svgl.app/'
                        rel='noopener noreferrer'
                        target='_blank'>
                        SVGL
                    </Link>
                    , not a copy-paste keyword wall. <span className='text-portfolio-orange'>#NoFilterSkills</span>
                </p>

                <div className={cn('grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2', revealCls)} data-reveal data-skills-grid>
                    {BENTO_PANELS.map((panel) => (
                        <BentoPanel
                            className={panel.wide === true ? 'lg:col-span-2' : undefined}
                            key={panel.title}
                            subtitle={panel.subtitle}
                            title={panel.title}>
                            <div
                                className={cn(
                                    'grid gap-2 sm:gap-2.5',
                                    panel.wide === true
                                        ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
                                        : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
                                )}>
                                {panel.items.map((item) => (
                                    <SkillPill item={item} key={item.label} />
                                ))}
                            </div>
                        </BentoPanel>
                    ))}
                </div>
            </div>
        </div>
    );
}
