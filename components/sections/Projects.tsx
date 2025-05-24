import { projects } from '@/data/data';
import Image from 'next/image';
import { BackgroundBeams } from '../ui/background-beams';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

export default function Projects() {
    return (
        <section
            id='projects'
            className='container relative flex min-h-[400px] flex-col items-center justify-center space-y-12 overflow-hidden p-6  py-10 md:py-20 '>
            <h3 className='bg-linear-to-r from-neutral-200/60 via-neutral-200 to-neutral-200/60 bg-clip-text pb-3 text-4xl font-bold text-transparent lg:text-6xl'>
                Projects
            </h3>
            <BentoGrid className='mx-auto max-w-6xl z-20'>
                {projects.map((project, i) => (
                    <BentoGridItem
                        key={i}
                        title={project.title}
                        description={project.description}
                        className={i === 1 || i === 5 ? 'md:col-span-2' : ''}
                        link={project.link}
                        alt={project.alt}
                        imageURL={project.imageURL}
                    />
                ))}
            </BentoGrid>
            <BackgroundBeams />
        </section>
    );
}

export const ProjectCardImage = ({ imageURL, alt }: { link: string; imageURL: string; alt?: string }) => (
    <div className='relative  overflow-hidden rounded-md bg-gray-50 '>
        <Image
            alt={alt}
            width={1728}
            height={400}
            decoding='async'
            priority={true}
            style={{ color: 'transparent' }}
            sizes='(min-width: 1280px) 36rem, (min-width: 1024px) 40vw, (min-width: 640px) 40rem, 95vw'
            className='transition-all ease-in group-hover/bento:scale-[1.05]'
            src={imageURL}
        />
        {/* <div className='pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-gray-900/10 dark:ring-white/10' /> */}
    </div>
);
