import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "./head";
import ThemeContextProvider from "@/components/Providers";
import Script from "next/script";
import Test from "@/components/Test";
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
                className={`${inter.className}  dark:bg-background bg-foreground min-h-[90vh] `}>
                <div className="w-full sm:justify-center absolute -top-[30rem] items-center flex ">
                    <div className="lg:scale-[1.4]  animate-pulse top-[-6rem] -z-10  sm:right-[50%] h-[8rem] w-[8rem] rounded-full blur-[12rem] sm:w-[40rem] sm:h-[40rem] dark:bg-[#202020]"></div>
                </div>

                {/* mobile blob */}
                <div className="w-full sm:hidden justify-center absolute -top-[4rem] items-center flex -z-10 ">
                    <div className="  animate-spin  scale-[1.3] -z-10  right-[40%] h-[8rem] w-[8rem] rounded-full blur-[8rem]  dark:bg-[#8a8a8a]"></div>
                </div>

                <ThemeContextProvider>
                    {/* <Navbar /> */}
                    {children}


                    <Test />

                </ThemeContextProvider>

                <Script src="./alpine.min.js" />
            </body>
        </html>
    );
}
