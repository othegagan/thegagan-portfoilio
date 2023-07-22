"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Head from "./head";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head />
            <body className="dark:bg-background bg-foreground min-h-screen">
                <ThemeProvider enableSystem={true} attribute="class">
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
