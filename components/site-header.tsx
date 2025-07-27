export default function SiteHeader() {
    return (
        <header
            aria-label="Main"
            className="-translate-x-1/2 fixed top-[var(--banner-height)] left-1/2 z-40 box-content w-full max-w-5xl border-foreground/10 border-b bg-background font-mono shadow-sm backdrop-blur-lg transition-colors lg:mt-2 lg:w-[calc(100%-1rem)] lg:rounded-md lg:border"
            data-orientation="horizontal"
            dir="ltr"
            id="nd-nav">
            <nav className="flex h-14 w-full flex-row items-center gap-6 px-4 lg:h-12">
                <a className="inline-flex items-center gap-2.5 font-semibold" href="/">
                    <svg fill="none" height={16} viewBox="0 0 24 24" width={16} xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-foreground" d="M0 0H24V19H19V5H5V9H15V15H5V19H24V24H0V0Z" />
                    </svg>
                    <span className="font-medium text-orange-400 ">thegagan</span>
                </a>
                <div className="ml-auto">
                    <ul className="flex flex-row items-center gap-2 max-sm:hidden" data-orientation="horizontal" dir="ltr">
                        <li className="list-none">
                            <a
                                className="inline-flex items-center gap-1 p-2 text-neutral-500 text-sm transition-colors hover:text-accent-foreground [&_svg]:size-4"
                                href="/#projects">
                                Projects
                            </a>
                        </li>
                        <li className="list-none">
                            <a
                                className="inline-flex items-center gap-1 p-2 text-neutral-500 text-sm transition-colors hover:text-accent-foreground [&_svg]:size-4"
                                href="/#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="flex w-full justify-center" />
        </header>
    );
}
