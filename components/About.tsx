"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SeactionHeading";

const About = () => {
    return (
        <>
            <motion.section
                id="about"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.175 }}
                className=" py-20 container  space-y-16 p-6  justify-center items-center flex flex-col  ">
                <SectionHeading title="Get to know me" />

                <div className="max-w-2xl space-y-6 text-center sm:text-base  leading-[1.78]  text-zinc-700 dark:text-[#888]">
                    <div className="sm:w-full">
                        Hello there..! My name is Gagan Kumar, a passionate and
                        dedicated person having goals of making a carrier in web
                        development & design.
                    </div>
                    <div>
                        With a Master of Computer Applications (MCA) degree from
                        PES University, Bengaluru, I have a solid foundation in
                        programming and a keen eye for creating visually
                        stunning and user-friendly web experiences.
                    </div>

                    <div>
                        Driven by a curiosity to stay ahead of industry trends,
                        I constantly expand my knowledge and embrace new
                        technologies. My motivation lies in solving complex
                        problems, implementing innovative ideas, and delivering
                        high-quality solutions that exceed client expectations.
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default About;