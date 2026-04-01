import Image from 'next/image';

import { cn } from '@thegagan-portfoilio/ui/lib/utils';
import type { CSSProperties } from 'react';
import type { Project } from '@/lib/portfolio-data';
import { PROJECTS } from '@/lib/portfolio-data';
import { revealCls } from '@/lib/portfolio-styles';

/** Short heading (text before an em dash, if any). */
function projectHeading(title: string): string {
    const idx = title.indexOf('—');
    if (idx === -1) {
        return title.trim();
    }
    return title.slice(0, idx).trim();
}

function ProjectCard({ index, project }: { index: number; project: Project }) {
    const primary = project.links[0];
    const heading = projectHeading(project.title);
    const hasExtraLinks = project.links.length > 1;

    return (
        <div
            className={cn(
                'group/pcard relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-portfolio-border bg-portfolio-bg2 transition-[border-color,transform] duration-300 before:pointer-events-none before:absolute before:inset-0 before:z-0 before:opacity-0 before:transition-opacity before:duration-300 before:content-[""] hover:-translate-y-0.5 hover:border-white/15 before:hover:bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,0.06)_0%,transparent_55%)] hover:before:opacity-100',
                project.bentoClass
            )}
            data-project-card
            style={{ '--mx': '50%', '--my': '50%' } as CSSProperties}>
            <div
                className='relative z-1 shrink-0 p-px'
                style={{ background: project.accentGradient }}>
                <div className='rounded-t-[15px] bg-portfolio-bg2 p-4 sm:p-5'>
                    <div
                        className={cn(
                            'relative w-full overflow-hidden rounded-xl border border-white/12 bg-[#0a0a0a] shadow-[0_20px_56px_rgb(0_0_0_/0.5)]',
                            project.imageFrameClass
                        )}>
                        <Image
                            alt={`${project.title} screenshot`}
                            className='object-cover object-top'
                            fill
                            priority={index === 0}
                            sizes='(max-width: 1024px) 100vw, 33vw'
                            src={project.imageSrc}
                        />
                    </div>
                </div>
            </div>

            <div className='relative z-1 flex flex-1 flex-col px-5 py-6 sm:px-6 sm:py-7'>
                {primary ? (
                    <a
                        className='group/title mb-2 inline-flex w-fit max-w-full items-baseline gap-2 text-left font-bold text-[15px] text-white tracking-tight transition-colors hover:text-portfolio-orange sm:text-[16px]'
                        href={primary.href}
                        rel='noopener noreferrer'
                        target='_blank'
                        title={primary.href}>
                        <span className='wrap-break-word'>{heading}</span>
                        <span aria-hidden className='shrink-0 font-normal text-portfolio-orange transition-transform duration-200 group-hover/title:translate-x-0.5'>
                            →
                        </span>
                    </a>
                ) : (
                    <div className='mb-2 font-bold text-[15px] text-white tracking-tight sm:text-[16px]'>{heading}</div>
                )}

                <p className='text-[13px] text-portfolio-muted leading-[1.75] sm:text-[14px]'>{project.description}</p>

                {hasExtraLinks ? (
                    <div className='mt-4 flex flex-wrap gap-2 border-portfolio-border border-t pt-4'>
                        {project.links.slice(1).map((link) => (
                            <a
                                className='rounded-md border border-white/10 bg-white/5 px-3 py-1.5 font-medium text-[12px] text-white/85 transition-colors hover:border-portfolio-orange/35 hover:text-portfolio-orange'
                                href={link.href}
                                key={link.href}
                                rel='noopener noreferrer'
                                target='_blank'
                                title={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export function ProjectsSection() {
    return (
        <div className='relative border-portfolio-border border-t px-7 py-[100px]' id='projects'>
            <div
                aria-hidden
                className='pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-size-[40px_40px] opacity-50'
            />
            <div className='relative mx-auto max-w-[1140px]'>
                <span className={cn('mb-3.5 block text-[11px] text-portfolio-orange/85 uppercase tracking-[1.8px]', revealCls)} data-reveal>
                    Selected Work
                </span>
                <h2 className={cn('mb-12 font-extrabold text-[clamp(30px,4.5vw,52px)] text-white tracking-tight sm:mb-14', revealCls)} data-reveal>
                    Things I&apos;ve built.
                </h2>
                <div
                    className={cn(
                        'grid grid-cols-1 gap-4 sm:gap-5 lg:auto-rows-auto lg:grid-cols-12',
                        revealCls
                    )}
                    data-reveal>
                    {PROJECTS.map((project, index) => (
                        <ProjectCard index={index} key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
