'use client';
import { timeline } from '@/data/data';
import GlowBottom from '@/public/glow-bottom.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import ReactWrapBalancer from 'react-wrap-balancer';

export default function Experience() {
    const about = useRef<HTMLDivElement>(null);
    return (
        <div className='container relative  pb-12 pt-6 '>
            {timeline.map(item => (
                <div className=' mx-auto hidden max-w-5xl cursor-default justify-end gap-x-3 md:flex' key={item.id}>
                    <div className=' whitespace-nowrap text-end'>
                        <span className='text-sm uppercase  text-neutral-400'>{item.year}</span>
                    </div>

                    <div className='relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-neutral-200 last:after:hidden '>
                        <div className='relative z-10 flex size-7 items-center justify-center'>
                            <div className='size-2 rounded-full bg-orange-400 '></div>
                        </div>
                    </div>

                    <div className='grow pb-8 pt-0.5'>
                        <h2 className='flex gap-x-1.5 text-lg font-semibold  text-white'>{item.title}</h2>
                        <Link href={item.link}>
                            <span className='text-sm uppercase  text-neutral-300 underline-offset-2 hover:text-orange-400 hover:underline'>{item.place}</span>
                        </Link>
                        <p className='mt-1   text-sm text-muted-foreground'>
                            <ReactWrapBalancer>{item.desc}</ReactWrapBalancer>
                        </p>
                    </div>
                </div>
            ))}

            {timeline.map(item => (
                <div key={item.id} className='md:hidden'>
                    <div className='group relative flex gap-x-3 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10'>
                        <a className='absolute inset-0 z-1' href='#'></a>

                        <div className='relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-neutral-200 last:after:hidden '>
                            <div className='relative z-10 flex size-7 items-center justify-center'>
                                <div className='size-2 rounded-full bg-orange-400 '></div>
                            </div>
                        </div>

                        <div className='grow pb-8 pt-0.5'>
                            <div className='my-2  first:mt-0'>
                                <span className='text-sm uppercase  text-neutral-400'>{item.year}</span>
                            </div>
                            <h2 className='flex gap-x-1.5 text-lg font-semibold  text-white'>{item.title}</h2>
                            <Link href={item.link}>
                                <span className='text-sm uppercase  text-neutral-300 underline-offset-2 hover:text-orange-400 hover:underline'>
                                    {item.place}
                                </span>
                            </Link>
                            <p className='mt-1 text-sm  text-muted-foreground'>
                                <ReactWrapBalancer>{item.desc}</ReactWrapBalancer>
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            <div className='pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden rounded-t-[3rem]' aria-hidden='true'>
                <div className='absolute bottom-0 left-1/2 -z-10 -translate-x-1/2'>
                    <Image src={GlowBottom} className='max-w-none opacity-30 grayscale' width={1404} height={658} alt='Features Illustration' />
                </div>
            </div>
        </div>
    );
}
