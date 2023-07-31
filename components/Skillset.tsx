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
    const scaleProgess = useTransform(scrollYProgress, [1, 0], [0.7, 1.1]);
    const scaleProgessSM = useTransform(scrollYProgress, [1, 0], [0.6, 1]);

    return (
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
            <div className="max-w-2xl space-y-6 text-center sm:text-base  leading-[1.78]  text-zinc-700 dark:text-[#888]">
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
                    scale: scaleProgess,
                }}
                whileInView="visible"
                viewport={{ root: scrollRef }}
                className="hidden  max-w-2xl md:flex flex-col gap-12 items-center justify-center">
                <div className="mt-10">
                    <Image
                        src="/skill.svg"
                        width={600}
                        quality={100}
                        height={600}
                        style={{ width: "100%", height: "auto" }}
                        alt="skill"
                    />
                </div>
            </motion.div>

            <motion.div
                style={{
                    scale: scaleProgessSM,
                }}
                whileInView="visible"
                viewport={{ root: scrollRef }}
                className="max-w-2xl flex md:hidden flex-col gap-10 items-center justify-center">
                <div className=" flex flex-col items-center justify-center">
                    <Image
                        src="/skill-sm.svg"
                        width={600}
                        quality={100}
                        height={600}
                        style={{ width: "100%", height: "auto" }}
                        alt="skill"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Skillset;
