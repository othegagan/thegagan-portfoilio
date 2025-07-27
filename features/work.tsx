export default function Work() {
    return (
        <div className="page">
            <div className="page-col">
                <h1 className="doto-font font-bold text-2xl">
                    <span className="relative">
                        <span>Work</span>
                    </span>{' '}
                    <span className="jetbrains-mono h-fit font-light text-muted-light text-xs tracking-tight duration-200 group-hover:text-white">
                        <span>Here is my work experience!</span>
                    </span>
                </h1>
                <div className="flex flex-col gap-6">
                    <div className="flex w-full flex-col items-start gap-3">
                        <div className="flex w-full flex-row items-start gap-4">
                            <a href="/" target="_self">
                                <div className="flex flex-row gap-2">
                                    <div className="grid h-9 w-9 select-none place-items-center rounded-md bg-muted/70" />
                                    <div className="flex flex-col justify-between whitespace-nowrap">
                                        <div className="space-x-2 font-medium text-sm">
                                            <span>[Hidden]</span>
                                            <span className="select-none rounded-full bg-muted/35 px-2 py-0.5 text-[10px] text-muted-foreground/80">
                                                Full-Time
                                            </span>
                                        </div>
                                        <div className="text-muted-foreground text-xs">Fullstack Developer</div>
                                    </div>
                                </div>
                            </a>
                            <div className="-mr-1.5 mt-2 flex h-px w-full flex-row gap-2 bg-gradient-to-r from-transparent via-transparent to-neutral-800/80" />
                            <div className="flex min-w-24 flex-col justify-between whitespace-nowrap text-xs">
                                <div className="text-muted-foreground">Jun 2024 - now</div>
                                <div className="text-muted">Europe, Remote</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex flex-row items-start gap-2 sm:ml-[30px]">
                                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                                <div className="inline-block space-x-1.5 font-light text-[13px] sm:pr-20">
                                    <span className="text-muted-foreground">
                                        Redesigned and optimized the entire dashboard, store layouts, and checkout page, enhancing user
                                        experience and performance
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row items-start gap-2 sm:ml-[30px]">
                                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                                <div className="inline-block space-x-1.5 font-light text-[13px] sm:pr-20">
                                    <span className="text-muted-foreground">
                                        Optimized checkout performance, reducing load time by 20% leading to a 15% increase in conversions
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row items-start gap-2 sm:ml-[30px]">
                                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                                <div className="inline-block space-x-1.5 font-light text-[13px] sm:pr-20">
                                    <span className="text-muted-foreground">
                                        Built reusable React components and email templates, reducing development time by 25%
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row items-start gap-2 sm:ml-[30px]">
                                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                                <div className="inline-block space-x-1.5 font-light text-[13px] sm:pr-20">
                                    <span className="text-muted-foreground">
                                        Built custom editable templates using .liquid templating language so users can customize their
                                        storefront without any coding knowledge
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start gap-3">
                        <div className="flex w-full flex-row items-start gap-4">
                            <a href="https://trycomp.ai/" rel="noopener" target="_blank">
                                <div className="flex flex-row gap-2">
                                    <div className="grid h-9 w-9 select-none place-items-center rounded-md bg-muted/70">
                                        <img
                                            alt="TrycompAI"
                                            className="object-contain p-2"
                                            data-nimg={1}
                                            decoding="async"
                                            height={36}
                                            loading="lazy"
                                            src="/_next/image?url=%2Fwork%2Ftrycompai.png&w=96&q=75"
                                            srcSet="/_next/image?url=%2Fwork%2Ftrycompai.png&w=48&q=75 1x, /_next/image?url=%2Fwork%2Ftrycompai.png&w=96&q=75 2x"
                                            style={{ color: 'transparent' }}
                                            width={36}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between whitespace-nowrap">
                                        <div className="space-x-2 font-medium text-sm">
                                            <span>TrycompAI</span>
                                            <span className="select-none rounded-full bg-muted/35 px-2 py-0.5 text-[10px] text-muted-foreground/80">
                                                Freelance
                                            </span>
                                        </div>
                                        <div className="text-muted-foreground text-xs">Design Engineer</div>
                                    </div>
                                </div>
                            </a>
                            <div className="-mr-1.5 mt-2 flex h-px w-full flex-row gap-2 bg-gradient-to-r from-transparent via-transparent to-neutral-800/80" />
                            <div className="flex min-w-24 flex-col justify-between whitespace-nowrap text-xs">
                                <div className="text-muted-foreground">Jun 2025</div>
                                <div className="text-muted">USA, Remote</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex flex-row items-start gap-2 sm:ml-[30px]">
                                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                                <div className="inline-block space-x-1.5 font-light text-[13px] sm:pr-20">
                                    <span className="text-muted-foreground">
                                        Developed Blogs, Blog page design via PayloadCMS, implemented SEO friendly URLs, and optimized for
                                        performance and SEO.
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row items-start gap-2 sm:ml-[30px]">
                                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                                <div className="inline-block space-x-1.5 font-light text-[13px] sm:pr-20">
                                    <span className="text-muted-foreground">
                                        Transformed static bento cards into interactive elements with animations to enhance user engagement,
                                        while maintaining performance and SEO optimization.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start gap-3">
                        <div className="flex w-full flex-row items-start gap-4">
                            <a href="https://tryprofound.com" rel="noopener" target="_blank">
                                <div className="flex flex-row gap-2">
                                    <div className="grid h-9 w-9 select-none place-items-center rounded-md bg-muted/70">
                                        <img
                                            alt="Profound"
                                            className="object-contain p-2.5"
                                            data-nimg={1}
                                            decoding="async"
                                            height={36}
                                            loading="lazy"
                                            src="/_next/image?url=%2Fwork%2Fprofound.png&w=96&q=75"
                                            srcSet="/_next/image?url=%2Fwork%2Fprofound.png&w=48&q=75 1x, /_next/image?url=%2Fwork%2Fprofound.png&w=96&q=75 2x"
                                            style={{ color: 'transparent' }}
                                            width={36}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between whitespace-nowrap">
                                        <div className="space-x-2 font-medium text-sm">
                                            <span>Profound</span>
                                            <span className="select-none rounded-full bg-muted/35 px-2 py-0.5 text-[10px] text-muted-foreground/80">
                                                Freelance
                                            </span>
                                        </div>
                                        <div className="text-muted-foreground text-xs">Design Engineer</div>
                                    </div>
                                </div>
                            </a>
                            <div className="-mr-1.5 mt-2 flex h-px w-full flex-row gap-2 bg-gradient-to-r from-transparent via-transparent to-neutral-800/80" />
                            <div className="flex min-w-24 flex-col justify-between whitespace-nowrap text-xs">
                                <div className="text-muted-foreground">May 2025</div>
                                <div className="text-muted">USA, Remote</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex flex-row items-start gap-2 sm:ml-[30px]">
                                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                                <div className="inline-block space-x-1.5 font-light text-[13px] sm:pr-20">
                                    <span className="text-muted-foreground">
                                        Animating the static bento card to make it more interactive and engaging. while keeping Optimized
                                        for performance and SEO.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start gap-3">
                        <div className="flex w-full flex-row items-start gap-4">
                            <a href="https://mentra.gg" rel="noopener" target="_blank">
                                <div className="flex flex-row gap-2">
                                    <div className="grid h-9 w-9 select-none place-items-center rounded-md bg-muted/70">
                                        <img
                                            alt="Mentra.gg"
                                            className="object-contain p-2"
                                            data-nimg={1}
                                            decoding="async"
                                            height={36}
                                            loading="lazy"
                                            src="/_next/image?url=%2Fwork%2Fmentra.png&w=96&q=75"
                                            srcSet="/_next/image?url=%2Fwork%2Fmentra.png&w=48&q=75 1x, /_next/image?url=%2Fwork%2Fmentra.png&w=96&q=75 2x"
                                            style={{ color: 'transparent' }}
                                            width={36}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between whitespace-nowrap">
                                        <div className="space-x-2 font-medium text-sm">
                                            <span>Mentra.gg</span>
                                            <span className="select-none rounded-full bg-muted/35 px-2 py-0.5 text-[10px] text-muted-foreground/80">
                                                Contract
                                            </span>
                                        </div>
                                        <div className="text-muted-foreground text-xs">Frontend Developer</div>
                                    </div>
                                </div>
                            </a>
                            <div className="-mr-1.5 mt-2 flex h-px w-full flex-row gap-2 bg-gradient-to-r from-transparent via-transparent to-neutral-800/80" />
                            <div className="flex min-w-24 flex-col justify-between whitespace-nowrap text-xs">
                                <div className="text-muted-foreground">Feb - Jun 2024</div>
                                <div className="text-muted">Europe, Remote</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex flex-row items-start gap-2 sm:ml-[30px]">
                                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                                <div className="inline-block space-x-1.5 font-light text-[13px] sm:pr-20">
                                    <span className="text-muted-foreground">
                                        Took full responsibility for developing a website from scratch.
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row items-start gap-2 sm:ml-[30px]">
                                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                                <div className="inline-block space-x-1.5 font-light text-[13px] sm:pr-20">
                                    <span className="text-muted-foreground">
                                        Ensuring a clean and responsive frontend with smooth animations
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row items-start gap-2 sm:ml-[30px]">
                                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                                <div className="inline-block space-x-1.5 font-light text-[13px] sm:pr-20">
                                    <span className="text-muted-foreground">
                                        Setup and maintained a CI/CD pipeline using GitHub Actions to deploy and update the website
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row items-start gap-2 sm:ml-[30px]">
                                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                                <div className="inline-block space-x-1.5 font-light text-[13px] sm:pr-20">
                                    <span className="text-muted-foreground">
                                        Developed Dashboard, Checkout, Storefront, and Admin Panel from scratch. Optimized for performance
                                        and SEO.
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row items-start gap-2 sm:ml-[30px]">
                                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                                <div className="inline-block space-x-1.5 font-light text-[13px] sm:pr-20">
                                    <span className="text-muted-foreground">
                                        Handling Custom Domain on stores via nextjs middleware routing
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start gap-3">
                        <div className="flex w-full flex-row items-start gap-4">
                            <a href="https://legions.dev" rel="noopener" target="_blank">
                                <div className="flex flex-row gap-2">
                                    <div className="grid h-9 w-9 select-none place-items-center rounded-md bg-muted/70">
                                        <img
                                            alt="Freelance"
                                            className="object-contain p-2"
                                            data-nimg={1}
                                            decoding="async"
                                            height={36}
                                            loading="lazy"
                                            src="/_next/image?url=%2Fwork%2Ffreelance.png&w=96&q=75"
                                            srcSet="/_next/image?url=%2Fwork%2Ffreelance.png&w=48&q=75 1x, /_next/image?url=%2Fwork%2Ffreelance.png&w=96&q=75 2x"
                                            style={{ color: 'transparent' }}
                                            width={36}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between whitespace-nowrap">
                                        <div className="space-x-2 font-medium text-sm">
                                            <span>Freelance</span>
                                        </div>
                                        <div className="text-muted-foreground text-xs">Fullstack Developer</div>
                                    </div>
                                </div>
                            </a>
                            <div className="-mr-1.5 mt-2 flex h-px w-full flex-row gap-2 bg-gradient-to-r from-transparent via-transparent to-neutral-800/80" />
                            <div className="flex min-w-24 flex-col justify-between whitespace-nowrap text-xs">
                                <div className="text-muted-foreground">2023 - now</div>
                                <div className="text-muted">India, Remote</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex flex-row items-start gap-2 sm:ml-[30px]">
                                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                                <div className="inline-block space-x-1.5 font-light text-[13px] sm:pr-20">
                                    <span className="text-muted-foreground">Designed and developed responsive websites from scratch</span>
                                </div>
                            </div>
                            <div className="flex flex-row items-start gap-2 sm:ml-[30px]">
                                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                                <div className="inline-block space-x-1.5 font-light text-[13px] sm:pr-20">
                                    <span className="text-muted-foreground">Ensuring clean UI/UX and smooth animations</span>
                                </div>
                            </div>
                            <div className="flex flex-row items-start gap-2 sm:ml-[30px]">
                                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                                <div className="inline-block space-x-1.5 font-light text-[13px] sm:pr-20">
                                    <span className="text-muted-foreground">
                                        Managed end-to-end project execution, from wireframing and prototyping to deployment and maintenance
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row items-start gap-2 sm:ml-[30px]">
                                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                                <div className="inline-block space-x-1.5 font-light text-[13px] sm:pr-20">
                                    <span className="text-muted-foreground">
                                        Deployed and maintained websites using Vercel, Cloudflare, and AWS (Ubuntu)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
