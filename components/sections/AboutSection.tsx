import { LayoutDashboard, Settings } from 'lucide-react';
import GlowTop from '@/public/glow-top.svg';
import Image from 'next/image';
import ReactWrapBalancer from 'react-wrap-balancer';

export default function AboutSection() {
    const features = [
        {
            icon: Settings,
            name: 'Customizable Settings',
            description: 'Customize your alert settings to suit your unique needs',
        },
        {
            icon: LayoutDashboard,
            name: 'Clear Overview',
            description: 'Get a clear overview of all your alerts in one place',
        },
    ];

    return (
        <section>
            <div className='container relative'>
                <div className='pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden rounded-t-[3rem]' aria-hidden='true'>
                    <div className='absolute left-1/2 top-0 -z-10 -translate-x-1/2'>
                        <Image src={GlowTop} className='max-w-none opacity-30' width={1404} height={658} alt='Features Illustration' />
                    </div>
                </div>

                <div className='pb-12 pt-16 md:py-20 lg:py-32 '>
                    <div>
                        {/* Section content */}
                        <div className='mx-auto flex max-w-xl flex-col gap-8 space-y-8 space-y-reverse md:max-w-none md:flex-row md:space-x-8 md:space-y-0 lg:space-x-16 xl:space-x-20'>
                            {/* Content */}
                            <div className='order-1 max-md:text-center md:order-none md:w-7/12 lg:w-[60%]' data-aos='fade-down'>
                                <h3 className='bg-gradient-to-r from-neutral-200/60 via-neutral-200 to-neutral-200/60 bg-clip-text pb-3 text-4xl font-bold text-transparent lg:text-6xl'>
                                    Get to know me
                                </h3>
                                <p className='text-md mb-8 text-neutral-400'>
                                    <ReactWrapBalancer>
                                        I{"'"}m on a mission to elevate the web experience. I fuse design and code to sculpt user-centric marvels. In the
                                        ever-evolving landscape of technology, I thrive on staying abreast of the latest trends and advancements. <br /> My
                                        insatiable curiosity propels me to explore new technologies, experiment with innovative design concepts, and
                                        consistently stay ahead of the curve.
                                    </ReactWrapBalancer>
                                </p>

                                <blockquote className='  border-l-4 border-neutral-400  '>
                                    <div className=' z-10 ml-3 text-left'>
                                        <p className=' text-neutral-400'>I frimly belive in..</p>
                                        <p className='text-neutral-200 sm:text-xl'>
                                            <em>If your work is work, You{"'"}re not doing the right thing.</em>
                                        </p>
                                    </div>
                                </blockquote>
                            </div>

                            <Image
                                src='/photo.jpg'
                                alt='App screenshot'
                                width={2432}
                                height={1442}
                                priority
                                className='z-10 order-2 mx-auto  w-[18rem] rounded-xl border border-white/10 object-cover grayscale repeat-infinite  lg:w-[30%]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// <h4 className='mb-4 tracking-wide'>EDUCATION</h4>

// <dl className='grid max-w-xl grid-cols-1 gap-4 lg:max-w-none'>
//     {features.map(feature => (
//         <div key={feature.name} className='group rounded px-2 py-1 duration-500 hover:bg-neutral-100'>
//             <div className='mb-1 flex items-center space-x-2 '>
//                 <feature.icon className='h-4 w-4 shrink-0 text-neutral-300 duration-500 group-hover:text-neutral-950' />
//                 <h4 className='font-medium text-neutral-50 duration-500 group-hover:text-neutral-950'>{feature.name}</h4>
//             </div>
//             <p className='text-left text-sm text-neutral-400 duration-500 group-hover:text-neutral-950'>
//                 {feature.description}
//             </p>
//         </div>
//     ))}
// </dl>
