"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SeactionHeading";
import { useRef } from "react";
import Balancer from "react-wrap-balancer";

const About = () => {
    const about = useRef<HTMLDivElement>(null);

    return (
        <div className="relative  overflow-hidden bg-gradient-to-br  from-[hsl(0,0%,90%)] to-[hsl(0,0%,100%)] dark:from-[hsl(0,0%,6%)] dark:to-[hsl(0,0%,0%)]">
            <motion.section
                ref={about}
                id="about"
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className=" py-10 md:py-20 container relative space-y-16 p-6  justify-center items-center flex flex-col  "
            >
                <SectionHeading title="Get to know me" />

                <div className="flex flex-col md:flex-row max-w-5xl gap-8 justify-around">
                    <p className="md:max-w-[65%] sm:text-base md:text-center  order-2 md:order-1  leading-[1.5]  text-zinc-700 dark:text-[#888]">
                        <Balancer>
                            Welcome to my digital realm, where design seamlessly
                            merges with code! <br className="hidden md:block" />{" "} I bring design and code together seamlessly to craft user-centric experiences.
                           Armed
                            with a recent Master&apos;s degree in Computer
                            Applications (MCA), my journey in the tech world has
                            been both enlightening and exhilarating.
                            <br />
                            <br />
                            In the ever-evolving landscape of technology, I
                            thrive on staying abreast of the latest trends and
                            advancements. My insatiable curiosity propels me to
                            explore new technologies, experiment with innovative
                            design concepts, and consistently stay ahead of the
                            curve. Join me in navigating the exciting
                            intersection of design and technology!
                        </Balancer>
                    </p>
                </div>
            </motion.section>
        </div>
    );
};

export default About;
