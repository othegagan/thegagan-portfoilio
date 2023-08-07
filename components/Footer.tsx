import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 ">
                <p className="text-center text-sm leading-loose text-muted-foreground ">
                    Designed and developed by{" "}
                    <Link
                        href="https://github.com/othegagan"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4">
                        Gagan Kumar
                    </Link>
                    {"  "} in {"  "}
                    <Link
                        href="https://figma.com"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4">
                        Figma
                    </Link>
                    {" "}  and {" "}<span className="font-medium ">VS Code </span>. Crafted
                    with{" "}
                    <Link
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4">
                        Nextjs 13{" "}
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4">
                        Tailwind CSS{" "}
                    </Link>
                    , deployed with{" "}
                    <Link
                        href="https://vercel.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4">
                        Vercel{" "}
                    </Link>
                    {" "} and {" "}
                    <Link
                        href="https://github.com/othegagan"
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
