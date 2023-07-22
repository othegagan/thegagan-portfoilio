import Navbar from "@/components/Navbar";
import "./globals.css";
import Head from "./head";
import Providers from "./providers";
import Script from "next/script";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" x-data="data()">
            <Head />
            <body className="dark:bg-background bg-foreground min-h-screen">
                <Providers>
                    <Navbar />
                    {children}
                </Providers>

                <Script src="./alpine.min.js" />
            </body>
        </html>
    );
}
