"use client";
import Image from "next/image";
import SeactionHeading from "./SeactionHeading";
import LG1 from "@/public/lgskill1.png";
import LG2 from "@/public/lgskill2.png";
import LG3 from "@/public/lgskill3.png";
import SM1 from "@/public/smskill1.png";
import SM2 from "@/public/smskill2.png";
import SM3 from "@/public/smskill3.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Skillset = () => {
    const scrollRef = useRef(null);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [1, 0], [0.7, 1]);
    const scaleProgess1 = useTransform(scrollYProgress, [1, 0], [0.7, 1]);
    const scaleProgess2 = useTransform(scrollYProgress, [1, 0], [0.7, 1]);

    return (
        <section
            id="about"
            className=" min-h-[400px] container py-10 md:py-20 space-y-12 p-6 justify-center items-center  flex flex-col  ">
            <SeactionHeading title="Skill Set" />
            <div className="max-w-2xl space-y-6 text-center sm:text-base  leading-[1.78]  text-zinc-700 dark:text-[#888]">
                <div className="sm:w-full">
                    Within my arsenal of skills and expertise lies a diverse
                    array of programming languages, tools, and latest
                    technologies that I have learnt and continually seeking new
                    challenges and opportunities to expand my skill set in
                    ever-evolving technology landscape.
                </div>
            </div>

            <div className="hidden  max-w-2xl sm:flex flex-col gap-12 items-center justify-center">
                <motion.div
                    style={{
                        scale: scaleProgess,
                    }}
                    whileInView="visible"
                    viewport={{ root: scrollRef }}>
                    <Image
                        src={LG1}
                        alt="skills"
                        quality={100}
                        style={{ width: "100%", height: "auto" }}
                    />
                </motion.div>
                <motion.div
                    style={{
                        scale: scaleProgess,
                    }}
                    whileInView="visible"
                    viewport={{ root: scrollRef }}>
                    <Image
                        src={LG2}
                        alt="skills"
                        quality={100}
                        style={{ width: "100%", height: "auto" }}
                    />
                </motion.div>
                <motion.div
                    style={{
                        scale: scaleProgess,
                    }}
                    whileInView="visible"
                    viewport={{ root: scrollRef }}>
                    <Image
                        src={LG3}
                        alt="skills"
                        quality={100}
                        style={{ width: "100%", height: "auto" }}
                    />
                </motion.div>
            </div>

            <div className="max-w-2xl flex sm:hidden flex-col gap-10 items-center justify-center">
                <Image
                    src={SM1}
                    alt="skills"
                    quality={100}
                    style={{ width: "100%", height: "auto" }}
                />
                <Image
                    src={SM2}
                    alt="skills"
                    quality={100}
                    style={{ width: "95%", height: "auto" }}
                />
                <Image
                    src={SM3}
                    alt="skills"
                    quality={100}
                    style={{ width: "90%", height: "auto" }}
                />
            </div>

        </section>
    );
};

export default Skillset;
