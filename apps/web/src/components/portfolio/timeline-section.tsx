'use client';

import { cn } from '@thegagan-portfoilio/ui/lib/utils';
import { Sparkles } from 'lucide-react';
import { motion, useScroll } from 'motion/react';
import { useRef } from 'react';
import type { TimelineItem } from '@/lib/portfolio-data';
import { EDUCATION_ITEMS, EXPERIENCE_ITEMS } from '@/lib/portfolio-data';
import { revealCls } from '@/lib/portfolio-styles';

type TimelineKind = 'education' | 'work';

interface TimelineEntry {
    item: TimelineItem;
    kind: TimelineKind;
}

const TIMELINE_ENTRIES: TimelineEntry[] = [
    ...EXPERIENCE_ITEMS.map((item) => ({ kind: 'work' as const, item })),
    ...EDUCATION_ITEMS.map((item) => ({ kind: 'education' as const, item }))
];

/** Line + dot sit in this gutter (matches `left-*` on rail). */
const RAIL_LEFT = 'left-4';

function TimelineCard({ item, kind, showDateInCard }: { item: TimelineItem; kind: TimelineKind; showDateInCard: boolean }) {
    if (kind === 'education') {
        return (
            <article className='rounded-2xl border border-portfolio-border bg-portfolio-bg2 p-6 transition-colors hover:border-orange-500/15 sm:p-7'>
                {showDateInCard ? <div className='mb-2 font-mono text-[11px] text-portfolio-muted tracking-wide'>{item.date}</div> : null}
                <h3 className='mb-1 font-bold text-[16px] text-white tracking-tight'>{item.title}</h3>
                <div className='mb-3 text-[14px] text-white/45'>
                    {item.orgHref ? (
                        <a
                            className='transition-colors hover:text-portfolio-orange'
                            href={item.orgHref}
                            rel='noopener noreferrer'
                            target='_blank'>
                            {item.org}
                        </a>
                    ) : (
                        item.org
                    )}
                </div>
                <p className='text-[13px] text-portfolio-muted leading-[1.7]'>{item.description}</p>
            </article>
        );
    }

    const isFeatured = item.featured === true;
    return (
        <article
            className={cn(
                'relative overflow-hidden rounded-2xl border p-6 transition-[border-color,box-shadow] sm:p-7',
                isFeatured
                    ? 'border-portfolio-orange/30 bg-linear-to-br from-portfolio-bg2 via-portfolio-bg2 to-[rgb(249_115_22_/0.07)] shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.06)]'
                    : 'border-portfolio-border bg-portfolio-bg2 hover:border-orange-500/20'
            )}>
            {isFeatured ? (
                <div
                    aria-hidden
                    className='pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-portfolio-orange/8 blur-3xl'
                />
            ) : null}
            <div className='relative'>
                <div className='mb-4 flex flex-wrap items-start justify-between gap-3'>
                    <div>
                        {showDateInCard ? (
                            <div className='mb-2 font-mono text-[11px] text-portfolio-muted tracking-wide'>{item.date}</div>
                        ) : null}
                        <div className='flex flex-wrap items-center gap-2'>
                            <h3 className='font-bold text-[17px] text-white tracking-tight'>{item.title}</h3>
                            {isFeatured ? (
                                <span className='inline-flex items-center gap-1 rounded-full border border-portfolio-orange/35 bg-portfolio-orange-dim px-2 py-0.5 font-medium text-[10.5px] text-portfolio-orange'>
                                    <Sparkles aria-hidden className='size-3' />
                                    Current focus
                                </span>
                            ) : null}
                        </div>
                        <div className='mt-1.5 text-[14px] text-white/45'>
                            {item.orgHref ? (
                                <a
                                    className='transition-colors hover:text-portfolio-orange'
                                    href={item.orgHref}
                                    rel='noopener noreferrer'
                                    target='_blank'>
                                    {item.org}
                                </a>
                            ) : (
                                item.org
                            )}
                        </div>
                    </div>
                    {item.badge ? (
                        <span
                            className={cn(
                                'shrink-0 rounded-md px-2.5 py-1 font-medium text-[10.5px] tracking-wide',
                                item.badgeVariant === 'hot'
                                    ? 'border border-orange-500/35 bg-portfolio-orange-dim text-portfolio-orange'
                                    : 'border border-white/10 bg-white/6 text-white/55'
                            )}>
                            {item.badge}
                        </span>
                    ) : null}
                </div>

                <p className='mb-4 text-[14px] text-portfolio-muted leading-relaxed'>{item.description}</p>

                {item.highlights && item.highlights.length > 0 ? (
                    <ul className='mb-4 space-y-2.5 border-portfolio-border border-t pt-4'>
                        {item.highlights.map((line) => (
                            <li className='flex gap-3 text-[13px] text-white/78 leading-[1.65]' key={line}>
                                <span aria-hidden className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-orange/90' />
                                <span>{line}</span>
                            </li>
                        ))}
                    </ul>
                ) : null}

                {item.tags && item.tags.length > 0 ? (
                    <div className='flex flex-wrap gap-2'>
                        {item.tags.map((tag) => (
                            <span
                                className='rounded-md border border-portfolio-border bg-white/4 px-2 py-1 font-medium text-[10.5px] text-portfolio-muted tracking-wide'
                                key={tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                ) : null}
            </div>
        </article>
    );
}

function TimelineRow({ entry }: { entry: TimelineEntry }) {
    const { item, kind } = entry;

    return (
        <div className='relative pb-16 last:pb-0'>
            <div
                aria-hidden
                className={cn(
                    'absolute top-1.5 z-10 size-3 -translate-x-1/2 rounded-full border-2 border-portfolio-orange/85 bg-portfolio-bg shadow-[0_0_0_4px_rgb(10_10_12_/0.88)]',
                    RAIL_LEFT,
                    'md:top-2'
                )}
            />

            <div className='grid grid-cols-1 gap-6 pl-10 md:grid-cols-[minmax(0,11rem)_1fr] md:gap-10 md:pl-12 lg:grid-cols-[minmax(0,13rem)_1fr]'>
                <div className='min-w-0'>
                    <div className='md:sticky md:top-28 md:pb-4'>
                        <p className='font-mono text-[11px] text-portfolio-muted leading-relaxed tracking-wide'>{item.date}</p>
                    </div>
                </div>

                <div className='min-w-0'>
                    <TimelineCard item={item} kind={kind} showDateInCard={false} />
                </div>
            </div>
        </div>
    );
}

export function TimelineSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        /** Map section travel through the viewport — no spring so the beam tracks scroll immediately. */
        offset: ['start end', 'end start']
    });

    return (
        <div className='border-portfolio-border border-t px-7 py-[100px]' id='experience'>
            <div className='mx-auto max-w-[1140px]'>
                <span className={cn('mb-3.5 block text-[11px] text-portfolio-orange/85 uppercase tracking-[1.8px]', revealCls)} data-reveal>
                    Timeline
                </span>
                <h2 className={cn('mb-4 font-extrabold text-[clamp(30px,4.5vw,52px)] text-white tracking-tight', revealCls)} data-reveal>
                    Impact you can trace.
                </h2>
                <p className={cn('mb-14 max-w-[720px] text-[17px] text-portfolio-muted leading-relaxed', revealCls)} data-reveal>
                    Roles, internships, and education in one place—AI agents in production, framework upgrades, and how I learned the stack.
                    Skim the bullets; they&apos;re the signal.
                </p>

                <div className={cn('relative', revealCls)} data-reveal ref={containerRef}>
                    <div aria-hidden className={cn('pointer-events-none absolute top-0 bottom-0 w-px bg-white/8', RAIL_LEFT)} />
                    <motion.div
                        aria-hidden
                        className={cn(
                            'pointer-events-none absolute top-0 h-full w-px origin-top bg-linear-to-b from-portfolio-orange via-orange-500/45 to-orange-500/5',
                            RAIL_LEFT
                        )}
                        style={{ scaleY: scrollYProgress }}
                    />

                    <div className='relative'>
                        {TIMELINE_ENTRIES.map((entry) => (
                            <TimelineRow entry={entry} key={`${entry.kind}-${entry.item.org}-${entry.item.date}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
