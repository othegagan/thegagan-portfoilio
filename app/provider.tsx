"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { userAgent } from "next/server";

const Providers = ({ children }: any) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>;
    }

    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
