import { cn } from '@thegagan-portfoilio/ui/lib/utils';
import type { SkillGroup, SkillItem } from '@/lib/portfolio-data';
import { SKILL_GROUPS } from '@/lib/portfolio-data';
import { revealCls } from '@/lib/portfolio-styles';

import { SkillIcon } from './skill-icons';

/** Bento spans for the four resume “skills trident” groups. */
const GROUP_BENTO_CLASS = [
    'col-span-12 lg:col-span-7',
    'col-span-12 lg:col-span-5',
    'col-span-12 sm:col-span-6 lg:col-span-6',
    'col-span-12 sm:col-span-6 lg:col-span-6'
] as const;

function SkillChip({ item }: { item: SkillItem }) {
    const compact = item.icons.length > 1;

    return (
        <div
            className='group inline-flex max-w-full items-center gap-2 rounded-lg border border-white/6 bg-white/3 px-2.5 py-2 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-px hover:border-portfolio-orange/30 hover:bg-portfolio-orange/6 sm:px-3'
            data-skill-pill>
            <span className='flex shrink-0 items-center gap-0.5' title={item.label}>
                {item.icons.map((slug) => (
                    <SkillIcon className={compact ? 'size-4 sm:size-[18px]' : 'size-5 sm:size-[22px]'} key={slug} slug={slug} />
                ))}
            </span>
            <span className='min-w-0 font-medium text-[12px] text-white/70 leading-snug tracking-tight transition-colors group-hover:text-white/95 sm:text-[12.5px]'>
                {item.label}
            </span>
        </div>
    );
}

function SkillGroupPanel({ className, group, index }: { className?: string; group: SkillGroup; index: number }) {
    const groupNumber = String(index + 1).padStart(2, '0');

    return (
        <article
            className={cn(
                'relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border border-portfolio-border/80 bg-portfolio-bg2/50 p-4 sm:min-h-[240px] sm:p-5',
                'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-portfolio-orange/35 before:to-transparent',
                className
            )}>
            <header className='mb-4 shrink-0 sm:mb-5'>
                <div className='mb-2 flex items-center gap-2.5'>
                    <span className='font-mono text-[10px] text-portfolio-orange/80 tracking-widest'>{groupNumber}</span>
                    <span aria-hidden className='h-px flex-1 bg-white/8' />
                </div>
                <h3 className='font-bold text-[15px] text-white tracking-tight sm:text-[16px]'>{group.title}</h3>
                {group.subtitle ? (
                    <p className='mt-1 max-w-[36ch] text-[12px] text-portfolio-muted leading-snug sm:text-[13px]'>{group.subtitle}</p>
                ) : null}
            </header>

            <div className='flex flex-1 flex-wrap content-start gap-2 sm:gap-2.5'>
                {group.items.map((item) => (
                    <SkillChip item={item} key={item.label} />
                ))}
            </div>
        </article>
    );
}

export function SkillsSection() {
    return (
        <div className='border-portfolio-border border-t px-7 py-16 md:py-24' id='skills'>
            <div className='mx-auto max-w-[1140px]'>
                <span className={cn('mb-2.5 block text-[11px] text-portfolio-orange/85 uppercase tracking-[1.8px]', revealCls)} data-reveal>
                    Skills & Tools
                </span>
                <h2 className={cn('mb-3 font-extrabold text-[clamp(28px,4vw,48px)] text-white tracking-tight', revealCls)} data-reveal>
                    Technology is only part of the <span className='text-portfolio-orange'>equation</span>.
                </h2>
                <p
                    className={cn(
                        'mb-10 max-w-[580px] text-[15px] text-portfolio-muted leading-relaxed sm:mb-12 sm:text-[16px]',
                        revealCls
                    )}
                    data-reveal>
                    The stack behind my work, shaped by real projects and production experience.
                </p>

                <div className={cn('grid grid-cols-12 items-stretch gap-3 sm:gap-4', revealCls)} data-reveal data-skills-grid>
                    {SKILL_GROUPS.map((group, index) => (
                        <SkillGroupPanel className={GROUP_BENTO_CLASS[index]} group={group} index={index} key={group.title} />
                    ))}
                </div>
            </div>
        </div>
    );
}
