import SectionHeading from "./SeactionHeading";
import Image from "next/image";

const Projects = () => {
    return (
        <div className="relative  overflow-hidden ">
            <section
                id="about"
                className=" py-10 md:py-20 container relative space-y-12 p-6  justify-center items-center flex flex-col  ">
                <SectionHeading title={`My Projects`} />

                <div className="w-full bg-gradient-to-b group hover:cursor-pointer  from-[#1f1f1f] to-[#121212] relative overflow-hidden rounded-xl sm:max-w-4xl h-auto  items-center justify-between flex flex-col md:flex-row  text-background dark:text-foreground  sm:p-10 dark:bg-accent gap-14 hover:scale-[0.99] transition-all duration-400 p-6">
                    
                    <div className="flex flex-col gap-4 sm:gap-8 items-start h-auto max-w-xl justify-start ">
                        <h2 className="font-semibold sm:text-[1.75rem]  text-[1.4rem]  leading-[1.5]">
                            Instantly generate copy based on templates
                            <svg
                                className="inline-block ml-3 "
                                width="33"
                                height="33"
                                viewBox="0 0 33 33"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.83325 22.8568L23.1666 9.52344"
                                    stroke="#F78F42"
                                    stroke-width="1.25"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M9.83325 9.52344H23.1666V22.8568"
                                    stroke="#F78F42"
                                    stroke-width="1.25"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </h2>
                        <p className="text-sm font-light leading-[1.5] max-w-lg text-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Suscipit sunt explicabo iusto accusamus quos
                            error eum recusandae. Non, quaerat ipsa.
                        </p>

                        <div className="flex flex-wrap gap-4">
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

                    <Image
                        src="/project1.png"
                        className=" hidden md:flex scale-110 absolute z-10 top-10 right-24 group-hover:-rotate-12 transition-all duration-500 "
                        width={200}
                        height={220}
                        quality={100}
                        alt="project1"
                    />
                    <Image
                        src="/project1.png"
                        className=" hidden md:flex absolute  top-16 right-10 group-hover:rotate-12 transition-all duration-500 "
                        width={200}
                        height={220}
                        quality={100}
                        alt="project1"
                    />
                </div>

            </section>



        </div>
    );
};

export default Projects;
