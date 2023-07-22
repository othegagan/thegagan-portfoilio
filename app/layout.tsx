"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
    title: "thegagan's portfolio",
    description:
        "Explore my portfolio, where each pixel reveals my journey in web.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="dark:bg-background bg-foreground min-h-screen">
                <ThemeProvider enableSystem={true} attribute="class">
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
