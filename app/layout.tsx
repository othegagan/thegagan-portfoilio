import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "./head";
import ThemeContextProvider from "@/components/Providers";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <Head />
            <body
                className={`${inter.className} h-[300vh] dark:bg-background bg-foreground min-h-screen`}>
                <div className=" sm:w-full sm:justify-center absolute -top-[30rem] items-center flex">
                    <div
                        className=" top-[-6rem] -z-10  sm:right-[50%] h-[8rem] w-[8rem] rounded-full blur-[10rem] sm:w-[40rem] sm:h-[40rem] dark:bg-[#202020]"
                        style={{ transform: "scale3d(1.5, 1.5, 1.5)" }}></div>
                </div>

                <div className="sm:hidden w-full left-[8rem] justify-center absolute  items-center ">
                    <div
                        className=" top-[-1rem] -z-10  h-[8rem] w-[8rem] rounded-full blur-[10rem]  dark:bg-[#202020]"
                        style={{ transform: "scale3d(1.5, 1.5, 1.5)" }}></div>
                </div>

                <ThemeContextProvider>
                    <Navbar />
                    {children}
                </ThemeContextProvider>

                <Script src="./alpine.min.js" />
            </body>
        </html>
    );
}
