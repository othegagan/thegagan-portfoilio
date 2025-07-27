import SiteHeader from '@/components/site-header';

export default function Hero() {
    return (
        <div className="relative flex h-dvh flex-1 flex-col overflow-hidden">
            <SiteHeader />
            <div className="mx-auto flex h-full w-full max-w-5xl flex-1 flex-col items-center px-3 font-mono">
                <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 sm:gap-6">
                    <hr className="-z-20 mask-y-from-98% absolute bottom-0 left-0 h-full w-px animate-expand-height border-l border-dashed delay-100 duration-1300 ease-in-out-quart md:left-[5%]" />
                    <hr className="mask-x-from-98% mr-auto h-px w-full animate-expand-width border-t border-dashed delay-100 duration-1300 ease-in-out-quart" />
                    <div className="rounded-md border px-3 py-1.5 font-sans text-foreground text-xs md:w-fit [a&]:hover:bg-accent [a&]:hover:text-accent-foreground">
                        <div className="w-fit break-words text-center tracking-wide">Open to new challenges. 🎉</div>
                    </div>
                    <h1 className=" animate-fade-up bg-linear-to-r from-neutral-200/60 via-neutral-200 to-neutral-200/60 bg-clip-text pb-4 font-bold text-2xl text-transparent tracking-tighter md:text-3xl lg:text-5xl ">
                        I am no Hero.!
                    </h1>

                    <h1 className="relative z-10 animate-fade-up text-balance bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-bold text-3xl text-transparent tracking-tighter md:text-6xl">
                        Just a wizard weaving digital dreams<span className="text-orange-400">.</span>
                    </h1>

                    <hr className="mask-x-from-98% ml-auto h-px w-full animate-expand-width border-t border-dashed delay-100 duration-1300 ease-in-out-quart" />
                    <p className="max-w-sm text-center font-normal text-neutral-500 text-sm tracking-tighter sm:max-w-2xl sm:text-base md:max-w-3xl lg:max-w-4xl">
                        Explore my portfolio , where each pixel reveals my journey.
                    </p>
                    {/* <div className="flex flex-col gap-3 sm:flex-row sm:gap-4"></div> */}
                    <hr className="-z-20 mask-y-from-98% absolute top-0 right-0 h-full w-px animate-expand-height border-l border-dashed delay-100 duration-1300 ease-in-out-quart md:right-[5%]" />
                </div>
                <footer className="flex h-10 items-center justify-center">
                    <div className="w-fit max-w-container px-3">
                        <p className="font-medium text-neutral-500 text-sm tracking-tight">
                            Made with <span className="text-orange-400">♥</span> by{' '}
                            <a
                                className="text-foreground underline-offset-4 transition-colors hover:underline"
                                href="https://github.com/othegagan"
                                rel="noopener"
                                target="_blank">
                                Gagan.
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
            <div className="-z-10 pointer-events-none absolute right-0 bottom-[-20rem] left-0 mx-auto h-[50rem] overflow-hidden [--color:var(--color-one)] [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 after:absolute after:top-1/2 after:left-1/2 after:aspect-[1/0.7] after:w-[200%] after:translate-x-[-50%] after:rounded-[50%] after:border-[hsl(var(--border))] after:border-t after:bg-background before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)]" />
        </div>
    );
}
