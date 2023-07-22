"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { userAgent } from "next/server";
import { Provider } from "react-wrap-balancer";

const Providers = ({ children }: any) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <ThemeProvider attribute="class">
            <Provider>{children}</Provider>
            {/* {children} */}
        </ThemeProvider>
    );
};

export default Providers;
