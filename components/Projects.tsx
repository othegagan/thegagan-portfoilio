import SectionHeading from "./SeactionHeading";
import Image from "next/image";

const Projects = () => {
    return (
        <div className="relative overflow-hidden ">
            <section
                id="projects"
                className="container relative flex flex-col items-center justify-center p-6 py-10 space-y-12 md:py-20">
                <SectionHeading title={`My Projects`} />

                <div className="group w-full bg-gradient-to-br flex group hover:cursor-pointer from-[hsl(0,0%,90%)] to-[hsl(0,0%,100%)] dark:from-[hsl(0,0%,8%)] dark:to-[hsl(0,0%,0%)] relative overflow-hidden rounded-xl sm:max-w-4xl h-auto  items-center justify-between sm:p-6  duration-400 p-4  flex-col md:flex-row text-accent dark:text-foreground max-w-4xl  ">

                    <div className="md:w-[60%] w-full flex-col gap-4 items-start justify-start order-2 md:order-1 flex">
                        <h2 className="font-semibold sm:text-[1.75rem] group-hover:text-neutral-700-500  text-[1.4rem] max-w-xl  ">
                            Instantly generate copy
                            <svg
                                className="inline-block group-hover:text-orange-500 w-6 h-6 transition-transform ml-2 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-y-0 group-focus-visible:translate-x-0 motion-reduce:transition-none"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </h2>
                        <p className=" text-sm mx-auto  leading-[1.4]  text-zinc-700 dark:text-[#888]">
                            Within my arsenal of skills and expertise lies a diverse
                            array of programming languages, tools, and latest
                            technologies that I have learnt and continually seeking new
                            challenges and opportunities to expand my skill set in
                            ever-evolving technology landscape.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-2">
                            <span
                                className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]"
                                data-color="blue">
                                ReactJS
                            </span>
                            <span
                                className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]"
                                data-color="blue">
                                NextJS (13)
                            </span>
                            <span
                                className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]"
                                data-color="blue">
                                Tailwind CSS
                            </span>
                            <span
                                className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]"
                                data-color="blue">
                                UI/UX
                            </span>
                            <span
                                className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]"
                                data-color="blue">
                                SQL Server
                            </span>
                        </div>
                    </div>

                    <div className="relative  overflow-hidden  rounded-xl md:w-[40%] order-1 md:order-2 mb-4 md:mb-0 md:ml-4 ">
                        <Image alt="project" className="group-hover:scale-105 transition-all" src="/project.webp" priority quality={100} width="1728" height="936" sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw" />
                    </div>
                </div>


                <div className="group w-full bg-gradient-to-bl flex group hover:cursor-pointer from-[hsl(0,0%,90%)] to-[hsl(0,0%,100%)] dark:from-[hsl(0,0%,8%)] dark:to-[hsl(0,0%,0%)] relative overflow-hidden rounded-xl sm:max-w-4xl h-auto  items-center justify-between sm:p-6  duration-400 p-4  flex-col md:flex-row text-accent dark:text-foreground max-w-4xl  ">

                    <div className="md:w-[60%] w-full flex-col gap-4 items-start justify-start order-2 md:order-1 flex">
                        <h2 className="font-semibold sm:text-[1.75rem] group-hover:text-neutral-700-500  text-[1.4rem] max-w-xl  ">
                            Instantly generate copy
                            <svg
                                className="inline-block group-hover:text-orange-500 w-6 h-6 transition-transform ml-2 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-y-0 group-focus-visible:translate-x-0 motion-reduce:transition-none"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </h2>
                        <p className=" text-sm mx-auto  leading-[1.4]  text-zinc-700 dark:text-[#888]">
                            Within my arsenal of skills and expertise lies a diverse
                            array of programming languages, tools, and latest
                            technologies that I have learnt and continually seeking new
                            challenges and opportunities to expand my skill set in
                            ever-evolving technology landscape.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-2">
                            <span
                                className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]"
                                data-color="blue">
                                ReactJS
                            </span>
                            <span
                                className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]"
                                data-color="blue">
                                NextJS (13)
                            </span>
                            <span
                                className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]"
                                data-color="blue">
                                Tailwind CSS
                            </span>
                            <span
                                className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]"
                                data-color="blue">
                                UI/UX
                            </span>
                            <span
                                className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]"
                                data-color="blue">
                                SQL Server
                            </span>
                        </div>
                    </div>

                    <div className="relative  overflow-hidden  rounded-xl md:w-[40%] order-1 md:order-2 mb-4 md:mb-0 md:ml-4 ">
                        <Image alt="project" className="group-hover:scale-105 transition-all" src="/project.webp" priority quality={100} width="1728" height="936" sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw" />
                    </div>
                </div>


                <div className="group w-full bg-gradient-to-br flex group hover:cursor-pointer from-[hsl(0,0%,90%)] to-[hsl(0,0%,100%)] dark:from-[hsl(0,0%,8%)] dark:to-[hsl(0,0%,0%)] relative overflow-hidden rounded-xl sm:max-w-4xl h-auto  items-center justify-between sm:p-6  duration-400 p-4  flex-col md:flex-row text-accent dark:text-foreground max-w-4xl  ">

                    <div className="md:w-[60%] w-full flex-col gap-4 items-start justify-start order-2 md:order-1 flex">
                        <h2 className="font-semibold sm:text-[1.75rem] group-hover:text-neutral-700-500  text-[1.4rem] max-w-xl  ">
                            Instantly generate copy
                            <svg
                                className="inline-block group-hover:text-orange-500 w-6 h-6 transition-transform ml-2 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-y-0 group-focus-visible:translate-x-0 motion-reduce:transition-none"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </h2>
                        <p className=" text-sm mx-auto  leading-[1.4]  text-zinc-700 dark:text-[#888]">
                            Within my arsenal of skills and expertise lies a diverse
                            array of programming languages, tools, and latest
                            technologies that I have learnt and continually seeking new
                            challenges and opportunities to expand my skill set in
                            ever-evolving technology landscape.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-2">
                            <span
                                className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]"
                                data-color="blue">
                                ReactJS
                            </span>
                            <span
                                className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]"
                                data-color="blue">
                                NextJS (13)
                            </span>
                            <span
                                className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]"
                                data-color="blue">
                                Tailwind CSS
                            </span>
                            <span
                                className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]"
                                data-color="blue">
                                UI/UX
                            </span>
                            <span
                                className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]"
                                data-color="blue">
                                SQL Server
                            </span>
                        </div>
                    </div>

                    <div className="relative  overflow-hidden  rounded-xl md:w-[40%] order-1 md:order-2 mb-4 md:mb-0 md:ml-4 ">
                        <Image alt="project" className="group-hover:scale-105 transition-all" src="/project.webp" priority quality={100} width="1728" height="936" sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw" />
                    </div>
                </div>


            </section>
        </div>
    );
};

export default Projects;
