import { MARQUEE_ITEMS } from '@/lib/portfolio-data';

export function MarqueeStrip() {
    const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
    return (
        <div className='relative overflow-hidden border-portfolio-border border-y bg-white/1.2 py-[13px] before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-2 before:w-[120px] before:bg-linear-to-r before:from-portfolio-bg before:to-transparent after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-2 after:w-[120px] after:bg-linear-to-l after:from-portfolio-bg after:to-transparent'>
            <div className='flex w-max animate-[portfolio-marquee_30s_linear_infinite] whitespace-nowrap'>
                {items.map((label, i) => (
                    <span
                        className='inline-flex items-center gap-2 border-portfolio-border border-r px-9 text-[11.5px] text-portfolio-muted uppercase tracking-wider'
                        key={`${label}-${String(i)}`}>
                        <span className='h-1 w-1 rounded-full bg-portfolio-muted2' />
                        {label}
                    </span>
                ))}
            </div>
        </div>
    );
}
