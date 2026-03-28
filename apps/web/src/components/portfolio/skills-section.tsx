import { cn } from '@thegagan-portfoilio/ui/lib/utils';

import { SKILLS } from '@/lib/portfolio-data';
import { revealCls } from '@/lib/portfolio-styles';

export function SkillsSection() {
    return (
        <div className='border-portfolio-border border-t px-7 py-[100px]'>
            <div className='mx-auto max-w-[1140px]'>
                <span className={cn('mb-3.5 block text-[11px] text-portfolio-orange/85 uppercase tracking-[1.8px]', revealCls)} data-reveal>
                    Skills & Tools
                </span>
                <h2 className={cn('mb-14 font-extrabold text-[clamp(30px,4.5vw,52px)] text-white tracking-tight', revealCls)} data-reveal>
                    My tech arsenal.
                </h2>
                <div className={cn('mt-14 flex flex-wrap gap-2.5', revealCls)} data-reveal data-skills-grid>
                    {SKILLS.map((skill) => (
                        <div
                            className='inline-flex cursor-default items-center gap-2 rounded-lg border border-portfolio-border bg-portfolio-bg2 px-[18px] py-2 text-[13.5px] text-white/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-500/40 hover:bg-orange-500/6 hover:text-white hover:shadow-[0_4px_16px_rgba(249,115,22,0.1)]'
                            data-skill-pill
                            key={skill}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
