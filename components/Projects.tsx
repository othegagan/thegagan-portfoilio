import SectionHeading from "./SeactionHeading";

const Projects = () => {
    return (
        <div className="relative  overflow-hidden ">
            <section
                id="about"
                className=" py-10 md:py-20 container relative space-y-12 p-6  justify-center items-center flex flex-col  ">
                <SectionHeading title={`My Projects`} />

                <div className="container  mx-auto">
                    <div className="flex flex-wrap gap-12 items-center justify-center text-neutral-950 dark:text-neutral-300">


                        <div className=" md:w-2/5 group shadow-md rounded-lg overflow-hidden">
                            <div className="h-full  bg-gradient-to-b group hover:cursor-pointer  dark:from-[#1f1f1f] dark:to-[#121212] dark:bg-zinc-800 ">
                                <img className="lg:h-48 md:h-36 w-full group-hover:scale-105 transition-all duration-100 object-cover object-center" src="https://commit.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommit-suggestions.5cf789bd.png&w=750&q=75" alt="blog" />
                                <div className="p-6 space-y-4">

                                    <h1 className="text-[1.3rem] dark:font-semibold leading-[1.5]  font-bold dark:text-white">The Catalyzer
                                        <svg className="ml-3 inline-block group-hover:scale-x-105" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.83325 22.8568L23.1666 9.52344" stroke="#F78F42" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M9.83325 9.52344H23.1666V22.8568" stroke="#F78F42" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg></h1>
                                    <p className="max-w-lg text-sm leading-[1.5]  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sunt explicabo iusto accusamus quos error eum recusandae. Non, quaerat ipsa.</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <div className="flex items-center rounded-full bg-neutral-300 dark:bg-neutral-800  px-[0.7rem] py-[0.3rem] text-sm leading-4 text-neutral-800 dark:text-neutral-400" data-color="blue">ReactJS</div>
                                        <div className="flex items-center rounded-full bg-neutral-300 dark:bg-neutral-800  px-[0.7rem] py-[0.3rem] text-sm leading-4 text-neutral-800 dark:text-neutral-400" data-color="blue">NextJS (13)</div>
                                        <div className="flex items-center rounded-full bg-neutral-300 dark:bg-neutral-800  px-[0.7rem] py-[0.3rem] text-sm leading-4 text-neutral-800 dark:text-neutral-400" data-color="blue">Tailwind CSS</div>
                                        <div className="flex items-center rounded-full bg-neutral-300 dark:bg-neutral-800  px-[0.7rem] py-[0.3rem] text-sm leading-4 text-neutral-800 dark:text-neutral-400" data-color="blue">UI/UX</div>
                                        <div className="flex items-center rounded-full bg-neutral-300 dark:bg-neutral-800  px-[0.7rem] py-[0.3rem] text-sm leading-4 text-neutral-800 dark:text-neutral-400" data-color="blue">SQL Server</div></div>
                                </div>
                            </div>
                        </div>
                        <div className=" md:w-2/5 group shadow-md rounded-lg overflow-hidden">
                            <div className="h-full  bg-gradient-to-b group hover:cursor-pointer  dark:from-[#1f1f1f] dark:to-[#121212] dark:bg-zinc-800 ">
                                <img className="lg:h-48 md:h-36 w-full group-hover:scale-105 transition-all duration-100 object-cover object-center" src="https://commit.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommit-suggestions.5cf789bd.png&w=750&q=75" alt="blog" />
                                <div className="p-6 space-y-4">

                                    <h1 className="text-[1.3rem] dark:font-semibold leading-[1.5]  font-bold dark:text-white">The Catalyzer
                                        <svg className="ml-3 inline-block group-hover:scale-x-105" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.83325 22.8568L23.1666 9.52344" stroke="#F78F42" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M9.83325 9.52344H23.1666V22.8568" stroke="#F78F42" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg></h1>
                                    <p className="max-w-lg text-sm leading-[1.5]  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sunt explicabo iusto accusamus quos error eum recusandae. Non, quaerat ipsa.</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <div className="flex items-center rounded-full bg-neutral-300 dark:bg-neutral-800  px-[0.7rem] py-[0.3rem] text-sm leading-4 text-neutral-800 dark:text-neutral-400" data-color="blue">ReactJS</div>
                                        <div className="flex items-center rounded-full bg-neutral-300 dark:bg-neutral-800  px-[0.7rem] py-[0.3rem] text-sm leading-4 text-neutral-800 dark:text-neutral-400" data-color="blue">NextJS (13)</div>
                                        <div className="flex items-center rounded-full bg-neutral-300 dark:bg-neutral-800  px-[0.7rem] py-[0.3rem] text-sm leading-4 text-neutral-800 dark:text-neutral-400" data-color="blue">Tailwind CSS</div>
                                        <div className="flex items-center rounded-full bg-neutral-300 dark:bg-neutral-800  px-[0.7rem] py-[0.3rem] text-sm leading-4 text-neutral-800 dark:text-neutral-400" data-color="blue">UI/UX</div>
                                        <div className="flex items-center rounded-full bg-neutral-300 dark:bg-neutral-800  px-[0.7rem] py-[0.3rem] text-sm leading-4 text-neutral-800 dark:text-neutral-400" data-color="blue">SQL Server</div></div>
                                </div>
                            </div>
                        </div>
                        <div className=" md:w-2/5 group shadow-md rounded-lg overflow-hidden">
                            <div className="h-full  bg-gradient-to-b group hover:cursor-pointer  dark:from-[#1f1f1f] dark:to-[#121212] dark:bg-zinc-800 ">
                                <img className="lg:h-48 md:h-36 w-full group-hover:scale-105 transition-all duration-100 object-cover object-center" src="https://commit.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommit-suggestions.5cf789bd.png&w=750&q=75" alt="blog" />
                                <div className="p-6 space-y-4">

                                    <h1 className="text-[1.3rem] dark:font-semibold leading-[1.5]  font-bold dark:text-white">The Catalyzer
                                        <svg className="ml-3 inline-block group-hover:scale-x-105" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.83325 22.8568L23.1666 9.52344" stroke="#F78F42" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M9.83325 9.52344H23.1666V22.8568" stroke="#F78F42" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg></h1>
                                    <p className="max-w-lg text-sm leading-[1.5]  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sunt explicabo iusto accusamus quos error eum recusandae. Non, quaerat ipsa.</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <div className="flex items-center rounded-full bg-neutral-300 dark:bg-neutral-800  px-[0.7rem] py-[0.3rem] text-sm leading-4 text-neutral-800 dark:text-neutral-400" data-color="blue">ReactJS</div>
                                        <div className="flex items-center rounded-full bg-neutral-300 dark:bg-neutral-800  px-[0.7rem] py-[0.3rem] text-sm leading-4 text-neutral-800 dark:text-neutral-400" data-color="blue">NextJS (13)</div>
                                        <div className="flex items-center rounded-full bg-neutral-300 dark:bg-neutral-800  px-[0.7rem] py-[0.3rem] text-sm leading-4 text-neutral-800 dark:text-neutral-400" data-color="blue">Tailwind CSS</div>
                                        <div className="flex items-center rounded-full bg-neutral-300 dark:bg-neutral-800  px-[0.7rem] py-[0.3rem] text-sm leading-4 text-neutral-800 dark:text-neutral-400" data-color="blue">UI/UX</div>
                                        <div className="flex items-center rounded-full bg-neutral-300 dark:bg-neutral-800  px-[0.7rem] py-[0.3rem] text-sm leading-4 text-neutral-800 dark:text-neutral-400" data-color="blue">SQL Server</div></div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </section >



        </div >
    );
};

export default Projects;
