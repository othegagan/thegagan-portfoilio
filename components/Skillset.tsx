"use client";
import Image from "next/image";
import SeactionHeading from "./SeactionHeading";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Skillset = () => {
    const scrollRef = useRef(null);
    const skill = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: skill,
    });
    const scaleProgess = useTransform(scrollYProgress, [1, 0], [0.9, 1]);
    const scaleProgessSM = useTransform(scrollYProgress, [1, 0], [0.9, 1]);

    return (
        <div className="w-full bg-gradient-to-tl  from-[hsl(0,0%,90%)] to-[hsl(0,0%,100%)] dark:from-[hsl(0,0%,6%)] dark:to-[hsl(0,0%,0%)]">
            <section
                id="skills"
                className="overflow-hidden relative min-h-[400px] container py-10 md:py-20 space-y-12 p-6 justify-center items-center  flex flex-col  ">
                <Image
                    className="-z-10 absolute  animate-pulse rotate-45  -left-[40%]"
                    src="/stars.svg"
                    width={1200}
                    height={500}
                    alt="stars"
                />

                <SeactionHeading title="Skill Set" />
                <div className="max-w-2xl space-y-6 md:text-center sm:text-base mx-auto  leading-[1.5]  text-zinc-700 dark:text-[#888]">
                    <div className="sm:w-full" ref={skill}>
                        Within my arsenal of skills and expertise lies a diverse
                        array of programming languages, tools, and latest
                        technologies that I have learnt and continually seeking new
                        challenges and opportunities to expand my skill set in
                        ever-evolving technology landscape.
                    </div>
                </div>


                <motion.div
                    style={{
                        scale: scaleProgessSM,
                    }}
                    whileInView="visible"
                    viewport={{ root: scrollRef }}
                    className="max-w-2xl flex  flex-col gap-10 items-center justify-center">

                    <div className="flex flex-wrap justify-center gap-2 max-w-2xl text-lg text-gray-800">

                        <div className="bg-white rounded-xl flex gap-2 items-center justify-center px-4 py-2 dark:bg-white/5 dark:text-white/80">
                            <Image src="/2.svg" width={30} height={30} alt="logo" />{" "}
                            <p>HTML</p>
                        </div>

                        <div className="bg-white rounded-xl flex gap-2 items-center justify-center px-4 py-2 dark:bg-white/5 dark:text-white/80">
                            <Image src="/3.svg" width={30} height={30} alt="logo" />{" "}
                            <p>React</p>
                        </div>
                        <div className="bg-white rounded-xl flex gap-2 items-center justify-center px-4 py-2 dark:bg-white/5 dark:text-white/80">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 48 29"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M21.2353 0.235649C16.7153 1.09125 13.7272 3.92927 12.2803 8.74086L12.0695 9.44213L13.2434 8.27734C13.9957 7.53081 14.8356 6.90532 15.5821 6.53561C16.6881 5.98781 16.8106 5.72251 18.6143 5.72251C21.2513 5.72251 21.8428 6.2514 24.964 9.26352C26.2743 10.5282 27.9013 11.934 28.5793 12.3875C32.3294 14.8959 38.272 15.2257 42.3544 13.1524C44.8126 11.9039 47.3289 8.54508 47.9551 5.67654C48.0726 5.13811 48.0327 5.16117 46.912 6.27758C46.1671 7.01977 45.336 7.64075 44.608 7.99919C43.5344 8.52774 43.3603 8.55982 41.5731 8.55982C38.9592 8.55982 38.387 8.25982 35.2757 5.25863C32.7239 2.79743 31.0771 1.58304 29.3806 0.912119C27.1524 0.0306786 23.7924 -0.248337 21.2353 0.235649ZM9.17047 14.802C4.72803 15.6431 1.70821 18.4502 0.296278 23.0515L0 24.0172L1.14823 22.8619C3.07412 20.9243 5.1765 20.1418 7.5774 20.4696C9.30543 20.7054 10.3049 21.3176 12.6095 23.5516C15.1962 26.0593 16.2441 26.8961 17.7568 27.6626C19.7711 28.6833 21.2193 28.9895 24.0791 28.9998C26.9009 29.01 28.4487 28.6835 30.3641 27.6744C31.6062 27.02 33.8563 24.8412 34.4346 23.7331C35.0826 22.4908 35.7474 20.8981 35.8868 20.2528L36.0154 19.658L35.1274 20.5631C33.1286 22.6003 31.5581 23.2884 29.1636 23.1756C26.9065 23.0693 26.0319 22.5713 23.1212 19.735C20.7337 17.4086 19.0736 16.1843 17.3516 15.4802C15.2239 14.6104 11.7182 14.3198 9.17047 14.802Z"
                                    fill="currentColor"
                                />
                            </svg>
                            CSS
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            JavaScript
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            TypeScript
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            React
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            Next.js
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            Node.js
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            Git
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            Tailwind
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            Prisma
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            MongoDB
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            Redux
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            GraphQL
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            Apollo
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            Express
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            PostgreSQL
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            Python
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            Django
                        </div>
                        <div className="bg-white rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/80">
                            Framer Motion
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>

    );
};

export default Skillset;
