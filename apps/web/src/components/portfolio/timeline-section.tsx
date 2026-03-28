import { cn } from '@thegagan-portfoilio/ui/lib/utils';
import type { TimelineItem } from '@/lib/portfolio-data';
import { EDUCATION_ITEMS, EXPERIENCE_ITEMS } from '@/lib/portfolio-data';
import { revealCls } from '@/lib/portfolio-styles';

function TimelineColumn({ items, label }: { items: TimelineItem[]; label: string }) {
    return (
        <div>
            <div className='mb-7 text-[11px] text-portfolio-orange/80 uppercase tracking-[1.6px]'>{label}</div>
            <div className='flex flex-col'>
                {items.map((item) => (
                    <div
                        className='group/tl relative border-portfolio-border border-l pb-8 pl-6 transition-colors last:border-l-transparent last:pb-0 hover:border-orange-500/20'
                        key={`${item.title}-${item.date}`}>
                        <span className='absolute top-1.5 -left-[5px] h-[7px] w-[7px] rounded-full border border-portfolio-border bg-portfolio-muted2 transition-[background,border-color,box-shadow] group-hover/tl:border-portfolio-orange group-hover/tl:bg-portfolio-orange group-hover/tl:shadow-[0_0_10px_rgba(249,115,22,0.5)]' />
                        <div className='mb-2 font-mono text-[11px] text-portfolio-muted tracking-wide'>{item.date}</div>
                        <div className='mb-1 font-bold text-[15px] text-white tracking-tight'>{item.title}</div>
                        <div className='mb-2.5 text-[13px] text-white/40'>
                            {item.orgHref ? (
                                <a
                                    className='text-white/40 transition-colors hover:text-portfolio-orange'
                                    href={item.orgHref}
                                    rel='noopener noreferrer'
                                    target='_blank'>
                                    {item.org}
                                </a>
                            ) : (
                                item.org
                            )}
                        </div>
                        <div className='text-[13px] text-portfolio-muted leading-[1.7]'>{item.description}</div>
                        <span
                            className={cn(
                                'mt-2.5 inline-block rounded px-2 py-0.5 font-medium text-[10.5px] text-white/40 tracking-wide',
                                item.badgeVariant === 'hot'
                                    ? 'border border-orange-500/30 bg-portfolio-orange-dim text-portfolio-orange'
                                    : 'border border-white/10 bg-white/6'
                            )}>
                            {item.badge}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function TimelineSection() {
    return (
        <div className='border-portfolio-border border-t px-7 py-[100px]' id='experience'>
            <div className='mx-auto max-w-[1140px]'>
                <span className={cn('mb-3.5 block text-[11px] text-portfolio-orange/85 uppercase tracking-[1.8px]', revealCls)} data-reveal>
                    Experience & Education
                </span>
                <h2 className={cn('mb-14 font-extrabold text-[clamp(30px,4.5vw,52px)] text-white tracking-tight', revealCls)} data-reveal>
                    The journey so far.
                </h2>
                <div className={cn('mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12', revealCls)} data-reveal>
                    <TimelineColumn items={EXPERIENCE_ITEMS} label='Work Experience' />
                    <TimelineColumn items={EDUCATION_ITEMS} label='Education' />
                </div>
            </div>
        </div>
    );
}
