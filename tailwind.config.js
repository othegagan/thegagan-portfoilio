/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            screens: { sm: "480px", md: "768px", lg: "976px", xl: "1440pd" },
            colors: {
                background: "hsl(240, 10%, 3%)",
                foreground: "hsl(0, 0%, 98%)",
                muted: "hsl(240, 3.7%, 15.9%)",
                "muted-foreground": "hsl(240, 5%, 64.9%)",
                popover: "hsl(240, 10%, 3.9%)",
                "popover-foreground": "hsl(0, 0%, 98%)",
                card: "hsl(240, 10%, 3.9%)",
                "card-foreground": "hsl(0, 0%, 98%)",
                border: "hsl(240, 3.7%, 15.9%)",
                input: "hsl(240, 3.7%, 15.9%)",
                primary: "hsl(0, 0%, 98%)",
                "primary-foreground": "hsl(240, 5.9%, 10%)",
                secondary: "hsl(240, 3.7%, 15.9%)",
                "secondary-foreground": "hsl(0, 0%, 98%)",
                accent: "hsl(240, 3.7%, 15.9%)",
                "accent-foreground": "hsl(0, 0%, 98%)",
                destructive: "hsl(0, 62.8%, 30.6%)",
                "destructive-foreground": "hsl(0, 85.7%, 97.3%)",
                ring: "hsl(240, 3.7%, 15.9%)",
            },
        },
    },
    plugins: [],
};
