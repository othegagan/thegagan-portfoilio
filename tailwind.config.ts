import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

const config = {
    darkMode: ['class'],
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                wiggle: {
                    '0%, 100%': {
                        transform: 'translateX(0%)',
                        transformOrigin: '50% 50%',
                    },
                    '15%': { transform: 'translateX(-6px) rotate(-6deg)' },
                    '30%': { transform: 'translateX(9px) rotate(6deg)' },
                    '45%': { transform: 'translateX(-9px) rotate(-3.6deg)' },
                    '60%': { transform: 'translateX(3px) rotate(2.4deg)' },
                    '75%': { transform: 'translateX(-2px) rotate(-1.2deg)' },
                },
                /**
                 * Original source:
                 * @see https://github.com/juliusmarminge/acme-corp/blob/main/tooling/tailwind/index.ts
                 */
                'fade-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)',
                    },
                    '75%': {
                        opacity: '0.6',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                'fade-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-20px)',
                    },
                    '75%': {
                        opacity: '0.6',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                shimmer: {
                    from: {
                        backgroundPosition: '0 0',
                    },
                    to: {
                        backgroundPosition: '-200% 0',
                    },
                },
            },
            /* */
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-up': 'fade-up 0.5s ease-in-out',
                'fade-down': 'fade-down 0.5s ease-out',
                wiggle: 'wiggle 0.8s both',
                shimmer: 'shimmer 2s linear infinite',
            },
        },
    },
    plugins: [require('tailwindcss-animate'), addVariablesForColors],
} satisfies Config;

export default config;

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme('colors'));
    let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

    addBase({
        ':root': newVars,
    });
}
