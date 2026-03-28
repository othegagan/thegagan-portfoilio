import { cn } from '@thegagan-portfoilio/ui/lib/utils';
import type { CSSProperties } from 'react';
import type { Project } from '@/lib/portfolio-data';
import { PROJECTS } from '@/lib/portfolio-data';
import { revealCls } from '@/lib/portfolio-styles';

function ProjectCard({ project }: { project: Project }) {
    return (
        <div
            className={cn(
                'group/pcard relative flex flex-col overflow-hidden rounded-2xl border border-portfolio-border bg-portfolio-bg2 transition-[border-color,transform] duration-300 before:pointer-events-none before:absolute before:inset-0 before:z-0 before:opacity-0 before:transition-opacity before:duration-300 before:content-[""] hover:-translate-y-1 hover:border-orange-500/25 before:hover:bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(249,115,22,0.07)_0%,transparent_55%)] hover:before:opacity-100',
                project.featured && 'md:col-span-2'
            )}
            data-project-card
            style={{ '--mx': '50%', '--my': '50%' } as CSSProperties}>
            <div
                className={cn(
                    'relative z-1 w-full overflow-hidden bg-linear-to-br from-[#111] to-[#0a0a0a]',
                    project.featured ? 'aspect-21/9' : 'aspect-video'
                )}>
                <div className='flex h-full w-full items-center justify-center font-mono text-[28px] text-white/25 tracking-[2px]'>
                    {project.placeholder}
                </div>
            </div>
            <div className='relative z-1 flex flex-1 flex-col p-[22px] pt-[22px]'>
                <div className='mb-2 font-bold text-[15px] text-white tracking-tight'>{project.title}</div>
                <div className='mb-4 text-[12.5px] text-portfolio-muted leading-[1.7]'>{project.description}</div>
                <div className='mb-4 flex flex-wrap gap-1.5'>
                    {project.tags.map((tag) => (
                        <span className='rounded px-2 py-0.5 font-medium text-[10.5px] text-white/35 tracking-wide' key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>
                <div className='flex flex-wrap gap-2.5'>
                    {project.links.map((link) => (
                        <a
                            className='inline-flex items-center gap-1 rounded-md border border-portfolio-border px-3 py-1.5 text-portfolio-muted text-xs transition-all hover:border-orange-500/40 hover:bg-portfolio-orange-dim hover:text-portfolio-orange'
                            href={link.href}
                            key={link.href}
                            rel='noopener noreferrer'
                            target='_blank'>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function ProjectsSection() {
    return (
        <div className='border-portfolio-border border-t px-7 py-[100px]' id='projects'>
            <div className='mx-auto max-w-[1140px]'>
                <span className={cn('mb-3.5 block text-[11px] text-portfolio-orange/85 uppercase tracking-[1.8px]', revealCls)} data-reveal>
                    Selected Work
                </span>
                <h2 className={cn('mb-14 font-extrabold text-[clamp(30px,4.5vw,52px)] text-white tracking-tight', revealCls)} data-reveal>
                    Things I&apos;ve built.
                </h2>
                <div className={cn('mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3', revealCls)} data-reveal>
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
