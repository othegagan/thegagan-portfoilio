import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import Herobg from "@/public/hero-bg.png";

const HeroSection = () => {
    return (
        <>
            <section className="w-full min-h-[90vh] flex flex-col text-center items-center justify-center  sm:px-14 overflow-hidden isolate max-w-[calc(1234px + 56px * 2)] gap-8 px-4 pt-8 md:pt-12 pb-8">
                <h1 className="relative dark:bg-gradient-to-b dark:from-white dark:to-[#adadad] bg-gradient-to-b from-[#555] to-[#000] text-transparent bg-clip-text font-extrabold text-[max(48px,min(5vw,76px))] leading-[1.2] tracking-tighter p-[24px]">
                    {/* I am no hero..! Just a web wizard weaving digital dreams. */}
                    <Balancer>
                        <span className="text-[max(48px,min(4vw,76px))]">
                            I am no Hero.!{" "}
                        </span>{" "}
                        <br /> Just a wizard weaving digital dreams.
                    </Balancer>
                </h1>

                <p className="text-[#888] text-[max(15px,min(2vw,20px))] leading-[1.8] font-normal z-[1] p-[24px] left-1">
                    <Balancer>
                        Hello there..! I’m{" "}
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">
                            {" "}
                            Gagan Kumar
                        </span>
                        , a passionate web design and development enthusiast,
                        relentlessly pushing boundaries to transform visions
                        into reality. Explore my{" "}
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">
                            {" "}
                            portfolio{" "}
                        </span>
                        , where each pixel reveals my journey.
                    </Balancer>
                </p>

                <div className="flex w-full items-center justify-center p-[24px]  space-x-4 ">
                    <Link
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                        href="#contact">
                        <span className="animate-bounce duration-300 transition-all mr-1"> 👋🏻 </span>Contact
                    </Link>
                    <Link
                        target="_blank"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium  text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                        href="#">
                        <span className="mr-1 ">📜 </span> Download CV
                    </Link>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
