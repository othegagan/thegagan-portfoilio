import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 ">
                <p className="text-center text-sm leading-loose text-muted-foreground ">
                    Built by{" "}
                    <Link
                        href="https://twitter.com/shadcn"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4">
                        shadcn
                    </Link>
                    . The source code is available on{" "}
                    <Link
                        href="https://github.com/shadcn/ui"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4">
                        GitHub
                    </Link>
                    .
                </p>
            </div>
        </footer>
    );
};

export default Footer;
