'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Particles } from '../ui/particles';
import ReactWrapBalancer from 'react-wrap-balancer';
import { technologies } from '@/data/data';
import { TechCard } from '../ui/techCard';

const Skills = () => {
    const scrollRef = useRef(null);
    const skill = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: skill,
    });
    const scaleProgess = useTransform(scrollYProgress, [1, 0], [0.9, 1]);

    return (
        <section
            id='skills'
            className='container relative flex min-h-[400px] flex-col items-center justify-center space-y-12 overflow-hidden p-6  py-10 md:py-20  '>
            <Particles className='absolute inset-0 -z-10 ' />
            <Particles className='absolute inset-0 -z-10 ' />
            <h3
                ref={skill}
                className='bg-gradient-to-r from-neutral-200/60 via-neutral-200 to-neutral-200/60 bg-clip-text pb-3 text-4xl font-bold text-transparent lg:text-6xl'>
                Skills
            </h3>
            <p className='text-md mb-8 text-center text-neutral-400'>
                <ReactWrapBalancer>
                    Within my arsenal of skills and expertise lies a diverse array of programming languages, tools, and latest technologies that I have learnt
                    and continually seeking new challenges and opportunities to expand my skill set in ever-evolving technology landscape.
                </ReactWrapBalancer>
            </p>

            <motion.div
                style={{
                    scale: scaleProgess,
                }}
                whileInView='visible'
                viewport={{ root: scrollRef }}
                className='flex max-w-4xl  flex-col items-center justify-center gap-10'>
                <div className='col-span-1 flex cursor-default flex-wrap items-center justify-center gap-4'>
                    {technologies.map(technology => (
                        <TechCard key={technology.name} technology={technology} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
