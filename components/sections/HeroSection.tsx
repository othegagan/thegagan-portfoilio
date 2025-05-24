import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import ReactWrapBalancer from 'react-wrap-balancer';
import { FileDown } from 'lucide-react';
import { Particles } from '../ui/particles';

export default function HeroSection() {
    return (
        <section
            id='home'
            className='relative mx-auto flex min-h-screen  w-full max-w-5xl flex-col items-center justify-center gap-4 py-24 text-center md:py-32'>
            <Particles className='absolute inset-0 -z-10 ' />
            <Particles className='absolute inset-0 -z-10 ' />
            <h1
                className=' animate-fade-up bg-linear-to-r from-neutral-200/60 via-neutral-200 to-neutral-200/60 bg-clip-text pb-4   text-2xl font-bold tracking-tight text-transparent md:text-3xl lg:text-5xl '
                style={{ animationDelay: '0.20s', animationFillMode: 'both' }}
                data-aos='fade-down'>
                <ReactWrapBalancer>I am no Hero.!</ReactWrapBalancer>
            </h1>
            <h1
                className=' -mt-5 animate-fade-up bg-linear-to-r from-neutral-200/60 via-neutral-200 to-neutral-100 bg-clip-text pb-4   text-5xl font-extrabold tracking-tight  text-transparent md:text-6xl lg:text-7xl '
                style={{ animationDelay: '0.20s', animationFillMode: 'both' }}
                data-aos='fade-down'>
                <ReactWrapBalancer>Just a wizard weaving digital dreams.</ReactWrapBalancer>
            </h1>

            <p
                className=' animate-fade-up text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8'
                style={{ animationDelay: '0.30s', animationFillMode: 'both' }}>
                <ReactWrapBalancer>
                    Hello there..! I{"'"}m <span className='text-white'>Gagan Kumar</span>, a passionate web design and development enthusiast, driven by a
                    vision to make the web a better place. Explore my <span className='text-white'>portfolio</span> , where each pixel reveals my journey.
                </ReactWrapBalancer>
            </p>
            <div
                className=' mt-10 flex animate-fade-up flex-wrap items-center justify-center gap-6'
                style={{ animationDelay: '0.40s', animationFillMode: 'both' }}>
                <div className='group relative  inline-flex'>
                    <div className='transitiona-all animate-tilt absolute -inset-px scale-[1.2] rounded-xl bg-linear-to-r from-[#ffffffa1] via-[#ffffffa1] to-[#ffffffa1] opacity-70 blur-lg duration-200 group-hover:-inset-1 group-hover:opacity-90 group-hover:duration-200'></div>
                    <Link href='/Gagan_Kumar_Resume.pdf' download className=' relative'>
                        <Button variant='outline' size='lg' className='group flex gap-2'>
                            <FileDown className='duration-800 size-4 transition-all group-hover:animate-bounce' />
                            Download CV
                            <span className='sr-only'>Download CV</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
