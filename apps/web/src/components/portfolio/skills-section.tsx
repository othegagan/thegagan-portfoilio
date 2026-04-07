import { cn } from '@thegagan-portfoilio/ui/lib/utils';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { SkillItem } from '@/lib/portfolio-data';
import { SKILL_GROUPS } from '@/lib/portfolio-data';
import { revealCls } from '@/lib/portfolio-styles';

import { SkillIcon } from './skill-icons';

type PanelLayout = 'dense' | 'design';

const BENTO_PANELS: { items: SkillItem[]; layout: PanelLayout; subtitle: string; title: string; wide?: boolean }[] = [
    {
        title: 'Core & AI',
        subtitle: 'Production UI, forms, and agentic interfaces',
        layout: 'dense',
        items: [...SKILL_GROUPS[0].items, ...SKILL_GROUPS[1].items]
    },
    {
        title: 'Backend, data & infra',
        subtitle: 'Services, persistence, delivery, and collaboration tooling',
        layout: 'dense',
        items: [...SKILL_GROUPS[2].items, ...SKILL_GROUPS[3].items]
    },
    {
        title: 'Design & product',
        subtitle: 'UX, responsive craft, and design systems',
        layout: 'design',
        items: SKILL_GROUPS[4].items,
        wide: true
    }
];

/** Fluid columns: similar min widths so ragged multi-word labels don’t break the grid rhythm. */
const DENSE_SKILL_GRID =
    'grid auto-rows-min gap-x-3 gap-y-2.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,11.25rem),1fr))] sm:gap-x-4 sm:gap-y-3 sm:[grid-template-columns:repeat(auto-fill,minmax(min(100%,12rem),1fr))]';

function SkillPill({ item }: { item: SkillItem }) {
    const compact = item.icons.length > 1;
    return (
        <div
            className='group flex min-h-11 items-center gap-2.5 rounded-xl border border-white/6 bg-white/2.5 px-2.5 py-2 transition-[color,transform,border-color,background-color] duration-200 sm:min-h-12 sm:gap-3 sm:px-3'
            data-skill-pill>
            <span className='flex shrink-0 items-center gap-0.5' title={item.label}>
                {item.icons.map((slug) => (
                    <SkillIcon className={compact ? 'size-[18px] sm:size-5' : 'size-6 sm:size-7'} key={slug} slug={slug} />
                ))}
            </span>
            <span className='min-w-0 flex-1 font-medium text-[12.5px] text-white/72 leading-snug tracking-tight transition-colors group-hover:text-white sm:text-[13px]'>
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
                'flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-portfolio-border/80 bg-portfolio-bg2/40 p-4 sm:p-5',
                className
            )}>
            <div className='mb-3 shrink-0 sm:mb-4'>
                <h3 className='font-bold text-[14px] text-white tracking-tight sm:text-[15px]'>{title}</h3>
                <p className='mt-0.5 text-[12px] text-portfolio-muted leading-snug sm:text-[13px]'>{subtitle}</p>
            </div>
            <div className='min-h-0 flex-1'>{children}</div>
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
                    What I use in production—libraries and services that show up in real codebases. Icons are official brand marks from{' '}
                    <Link
                        className='text-portfolio-orange underline decoration-portfolio-orange/35 underline-offset-2 transition-colors hover:text-white hover:decoration-white/40'
                        href='https://svgl.app/'
                        rel='noopener noreferrer'
                        target='_blank'>
                        SVGL
                    </Link>
                    , so each row is a tool I work with, not a padded keyword list.
                </p>

                <div
                    className={cn('grid grid-cols-1 items-stretch gap-3 sm:gap-4 lg:grid-cols-2', revealCls)}
                    data-reveal
                    data-skills-grid>
                    {BENTO_PANELS.map((panel) => (
                        <BentoPanel
                            className={panel.wide === true ? 'lg:col-span-2' : undefined}
                            key={panel.title}
                            subtitle={panel.subtitle}
                            title={panel.title}>
                            {panel.layout === 'design' ? (
                                <div className='grid grid-cols-1 gap-3 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:gap-4 lg:mx-0 lg:max-w-none'>
                                    {panel.items.map((item) => (
                                        <div className='min-w-0' key={item.label}>
                                            <SkillPill item={item} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className={DENSE_SKILL_GRID}>
                                    {panel.items.map((item) => (
                                        <SkillPill item={item} key={item.label} />
                                    ))}
                                </div>
                            )}
                        </BentoPanel>
                    ))}
                </div>
            </div>
        </div>
    );
}
