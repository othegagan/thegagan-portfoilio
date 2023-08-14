import Link from "next/link";
import SectionHeading from "./SeactionHeading";
import Image from "next/image";

const Projects = () => {
    return (
        <div className="relative overflow-hidden ">
            <section
                id="projects"
                className="container relative flex flex-col items-center justify-center p-6 py-10 space-y-12 md:py-20">
                <SectionHeading title={`My Projects`} />

                <div className="flex flex-col-reverse items-center gap-10 justify-center space-y-12">
                    <Link
                        href="https://projectc19.000webhostapp.com/"
                        target="_blank">
                        <div className="group w-full bg-gradient-to-br flex group hover:cursor-pointer from-[hsl(0,0%,90%)] to-[hsl(0,0%,100%)] dark:from-[hsl(0,0%,8%)] dark:to-[hsl(0,0%,0%)] relative overflow-hidden rounded-xl sm:max-w-4xl h-auto  items-center justify-between sm:p-6  duration-400 p-4  flex-col text-accent dark:text-foreground max-w-4xl  ">
                            <div className=" hidden md:block md:w-full md:mb-4">
                                <h2 className="font-semibold sm:text-[1.75rem] group-hover:text-neutral-700-500  text-[1.4rem]  group-hover:text-orange-500 ">
                                    Covid Vaccination and Pharma Store Platform
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
                            </div>

                            <div className="  flex md:flex-row flex-col">
                                <div className="md:w-[60%] w-full flex-col gap-4 items-start justify-start order-2 md:order-1 flex">
                                    <h2 className="md:hidden block font-semibold sm:text-[1.75rem] group-hover:text-neutral-700-500  text-[1.4rem]  group-hover:text-orange-500">
                                        Covid Vaccination and Pharma Store
                                        Platform
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
                                    <p className=" text-sm mx-auto  leading-[1.5]  text-zinc-700 dark:text-[#888]">
                                        A dynamic web solution replica of COVID
                                        vaccination services and a comprehensive
                                        pharmacy store. Seamlessly managed via a
                                        custom admin panel. With Offering
                                        real-time vaccination updates, product
                                        bookings, and streamlined sign-ups, it
                                        highlights my expertise in web
                                        development, emphasizing functionality,
                                        and user convenience.
                                    </p>

                                    <div className="flex flex-wrap gap-4 mt-2">
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]">
                                            HTML 5
                                        </span>
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#4577ce25] text-[#4577ce]">
                                            CSS 3
                                        </span>
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#502a8925] dark:text-[#844dd8] text-[#391f61]">
                                            Bootstrap
                                        </span>
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#efff1065] dark:text-[#000000] font-semibold">
                                            Javascrpit
                                        </span>
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#58585825] dark:text-[#b3b3b3] text-[#121212]">
                                            My SQL
                                        </span>
                                    </div>
                                </div>

                                <div className="relative  overflow-hidden  rounded-xl md:w-[40%] order-1 md:order-2 mb-4 md:mb-0 md:ml-4 ">
                                    <Image
                                        alt="project"
                                        className="group-hover:scale-105 transition-all"
                                        src="/covid.png"
                                        priority
                                        quality={100}
                                        width="1728"
                                        height="936"
                                        sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href="https://triboon.web.app/" target="_blank">
                        <div className="group w-full bg-gradient-to-bl flex group hover:cursor-pointer from-[hsl(0,0%,90%)] to-[hsl(0,0%,100%)] dark:from-[hsl(0,0%,8%)] dark:to-[hsl(0,0%,0%)] relative overflow-hidden rounded-xl sm:max-w-4xl h-auto  items-center justify-between sm:p-6  duration-400 p-4  flex-col text-accent dark:text-foreground max-w-4xl  ">
                            <div className=" hidden md:block md:w-full md:mb-4">
                                <h2 className="font-semibold sm:text-[1.75rem] group-hover:text-neutral-700-500  text-[1.4rem] max-w-xl group-hover:text-orange-500 ">
                                    Triboon: Project Management Solution
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
                            </div>

                            <div className="  flex md:flex-row flex-col">
                                <div className="md:w-[60%] w-full flex-col gap-4 items-start justify-start order-2 md:order-1 flex">
                                    <h2 className="md:hidden block font-semibold sm:text-[1.75rem] group-hover:text-neutral-700-500  text-[1.4rem] max-w-xl group-hover:text-orange-500  ">
                                        Triboon: Project Management Solution
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
                                    <p className=" text-sm mx-auto  leading-[1.5]  text-zinc-700 dark:text-[#888]">
                                        Discover Triboon, a robust web
                                        application enabling seamless teamwork
                                        and project oversight. Empower your
                                        organization with intuitive tools for
                                        task allocation, real-time updates, and
                                        progress tracking. Its responsive
                                        design, powered by ReactJS, Tailwind
                                        CSS, Firebase, and Firestore, ensures
                                        accessibility across devices, enhancing
                                        user engagement and productivity.
                                    </p>

                                    <div className="flex flex-wrap gap-4 mt-2">
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded  bg-[#2bdecf38] text-[#393939] dark:text-[#ffffff]">
                                            ReactJS
                                        </span>
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#efff105f] dark:text-[#000000] font-semibold">
                                            Javascrpit
                                        </span>
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#4577ce25] text-[#4577ce]">
                                            Tailwind CSS
                                        </span>
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]">
                                            Firebase
                                        </span>
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#2dd12425] text-[#38d124]">
                                            Realtime-chatting
                                        </span>
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#ce24d125] text-[#c824d1]">
                                            Charts & Analytics
                                        </span>
                                    </div>
                                </div>

                                <div className="relative  overflow-hidden  rounded-xl md:w-[40%] order-1 md:order-2 mb-4 md:mb-0 md:ml-4 ">
                                    <Image
                                        alt="project"
                                        className="group-hover:scale-105 transition-all"
                                        src="/triboon.png"
                                        priority
                                        quality={100}
                                        width="1728"
                                        height="936"
                                        sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="http://hirelink-001-site1.atempurl.com/"
                        target="_blank">
                        <div className="group w-full bg-gradient-to-br flex group hover:cursor-pointer from-[hsl(0,0%,90%)] to-[hsl(0,0%,100%)] dark:from-[hsl(0,0%,8%)] dark:to-[hsl(0,0%,0%)] relative overflow-hidden rounded-xl sm:max-w-4xl h-auto  items-center justify-between sm:p-6  duration-400 p-4  flex-col text-accent dark:text-foreground max-w-4xl  ">
                            <div className=" hidden md:block md:w-full md:mb-4">
                                <h2 className="font-semibold sm:text-[1.75rem] group-hover:text-neutral-700-500  text-[1.4rem] max-w-xl  group-hover:text-orange-500">
                                    Hiring Helper for Managers
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
                            </div>

                            <div className="  flex md:flex-row flex-col">
                                <div className="md:w-[60%] w-full flex-col gap-4 items-start justify-start order-2 md:order-1 flex">
                                    <h2 className="md:hidden block font-semibold sm:text-[1.75rem] group-hover:text-neutral-700-500  text-[1.4rem] max-w-xl  group-hover:text-orange-500">
                                        Hiring Helper for Managers
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
                                    <p className=" text-sm mx-auto  leading-[1.5]  text-zinc-700 dark:text-[#888]">
                                        Hiring Helper is a web portal that helps
                                        hiring managers track candidates,
                                        schedule interviews, and manage the
                                        hiring process. It allows hiring
                                        managers to import candidates from Excel
                                        sheets, filter them by various criteria,
                                        and assign them to different stages of
                                        the hiring pipeline.I was responsible
                                        for developing the backend business
                                        logic and designing the frontend user
                                        interface of the web portal. I learned
                                        how to use .NET Core MVC to create
                                        RESTful APIs, how to use Tailwind to
                                        create responsive and modern web pages,
                                        and how to use SQL Server to store and
                                        query data.
                                    </p>

                                    <div className="flex flex-wrap gap-4 mt-2">
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]">
                                            .NET Core MVC
                                        </span>
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#efff1055] dark:text-[#000000] font-semibold">
                                            Javascrpit
                                        </span>
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#4577ce25] text-[#4577ce]">
                                            Tailwind CSS
                                        </span>
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#58585825] dark:text-[#b3b3b3] text-[#121212]">
                                            SQL Server
                                        </span>
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#3bd12425] text-[#47d124]">
                                            Excel Import
                                        </span>
                                        <span className="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#b41ec545] text-[#d124b4]">
                                            Hiring Helper
                                        </span>
                                    </div>
                                </div>

                                <div className="relative  overflow-hidden  rounded-xl md:w-[40%] order-1 md:order-2 mb-4 md:mb-0 md:ml-4 ">
                                    <Image
                                        alt="project"
                                        className="group-hover:scale-105 transition-all"
                                        src="/hirelink.png"
                                        priority
                                        objectFit="top"
                                        quality={100}
                                        width="1728"
                                        height="936"
                                        sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Projects;
