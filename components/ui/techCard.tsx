import { Icons } from '@/components/icons/icons';
import { Technology } from '@/data/data';

interface TechnologyCardProps {
    technology: Technology;
}

export function TechCard({ technology }: TechnologyCardProps) {
    const Icon = Icons[technology.icon];
    return (
        <div className='flex items-center justify-center gap-2 rounded-md bg-muted p-2 px-4 text-white'>
            <Icon className='size-5' />
            <div className=' text-md  md:text-base '>{technology.name}</div>
        </div>
    );
}
