'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function LampDemo() {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: 'easeInOut',
                }}
                className='mt-8 bg-linear-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'>
                Build lamps <br /> the right way
            </motion.h1>
        </LampContainer>
    );
}

export const LampContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn('relative z-0 flex min-h-[40vh] w-full flex-col  overflow-hidden rounded-md bg-background', className)}>
            <div className='scale-y-40 relative isolate z-0 flex w-full flex-1 items-start justify-center opacity-70 '>
                <motion.div
                    initial={{ opacity: 0.5, width: '15rem' }}
                    whileInView={{ opacity: 1, width: '30rem' }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className='bg-gradient-conic absolute inset-auto right-1/2 h-36 w-120 overflow-visible from-orange-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'>
                    <div className='absolute  bottom-0 left-0 z-20 h-40 w-full bg-background mask-[linear-gradient(to_top,white,transparent)]' />
                    <div className='absolute  bottom-0 left-0 z-20 h-full  w-40 bg-background mask-[linear-gradient(to_right,white,transparent)]' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: '15rem' }}
                    whileInView={{ opacity: 1, width: '30rem' }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className='bg-gradient-conic absolute inset-auto left-1/2 h-36 w-120 from-transparent via-transparent to-orange-500 text-white [--conic-position:from_290deg_at_center_top]'>
                    <div className='absolute  bottom-0 right-0 z-20 h-full  w-40 bg-background mask-[linear-gradient(to_left,white,transparent)]' />
                    <div className='absolute  bottom-0 right-0 z-20 h-40 w-full bg-background mask-[linear-gradient(to_top,white,transparent)]' />
                </motion.div>
                <div className='absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-2xl'></div>
                <div className='absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md'></div>
                <div className='absolute inset-auto z-50 h-36 w-md -translate-y-1/2 rounded-full bg-orange-500 opacity-50 blur-3xl'></div>
                <motion.div
                    initial={{ width: '8rem' }}
                    whileInView={{ width: '16rem' }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                    className='absolute inset-auto z-30 h-36 w-64 -translate-y-24 rounded-full bg-orange-400 blur-2xl'></motion.div>
                <motion.div
                    initial={{ width: '15rem' }}
                    whileInView={{ width: '30rem' }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                    className='absolute inset-auto z-50 h-0.5 w-120 -translate-y-28 bg-orange-400 '></motion.div>

                <div className='absolute inset-auto z-40 h-44 w-full -translate-y-50 bg-background '></div>
            </div>

            <div className='relative z-50 flex -translate-y-80 flex-col items-center px-5'>{children}</div>
        </div>
    );
};
