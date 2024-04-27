import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ProjectCardImage } from '../sections/Projects';

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
    return <div className={cn('mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ', className)}>{children}</div>;
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    link,
    alt,
    imageURL,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    link?: string;
    alt?: string;
    imageURL?: string;
}) => {
    return (
        <Link
            href={link}
            className={cn(
                'group/bento row-span-1 flex flex-col items-start justify-start rounded-md border border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
                className,
            )}>
            {header}
            <ProjectCardImage link={link} imageURL={imageURL} alt={alt} />
            <div className='mb-2 mt-2 flex  w-full items-center font-bold  group-hover/bento:text-orange-400  '>
                <span> {title}</span>
                <ArrowRight className='text-primary-500 ml-1 h-3 w-3 tracking-normal transition-transform duration-150 ease-in-out group-hover/bento:translate-x-0.5' />
            </div>
            <p className='text-xs  text-neutral-400'>{description}</p>
        </Link>
    );
};
