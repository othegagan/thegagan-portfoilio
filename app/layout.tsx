
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "./head";
import ThemeButton from "@/components/ThemeButton";
import ThemeContextProvider from "@/components/Providers";

import Test from "@/components/Test";
import Hero from "@/components/Hero";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Head />
            <body
                className={`${inter.className}  dark:bg-background bg-foreground `}>

                <div className="w-full sm:justify-center absolute -left-[30rem] items-center flex ">
                    <div className="lg:scale-[1.4]  animate-pulse left-[-20rem] -z-10  sm:right-[50%] h-[8rem] w-[8rem] rounded-full blur-[12rem] sm:w-[40rem] sm:h-[40rem] dark:bg-[#202020]"></div>
                </div>

                {/* mobile blob */}
                <div className="w-full sm:hidden justify-center absolute -top-[4rem] items-center flex -z-10 ">
                    <div className="  animate-spin  scale-[1.3] -z-10  right-[40%] h-[8rem] w-[8rem] rounded-full blur-[8rem]  dark:bg-[#8a8a8a]"></div>
                </div>
                <div className="mx-auto min-h-screen container px-6  dark:text-zinc-200 leading-[1.6] ">
                    <div className="lg:flex lg:justify-between lg:gap-4">
                        <ThemeContextProvider>

                            <Hero />

                            {children}


                        </ThemeContextProvider>
                    </div>
                </div>

            </body>
        </html>
    );
}
