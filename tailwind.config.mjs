import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */

export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'brand-bg': '#FFD4D0',
                'brand-text': '#b80101',
                'brand-text-secondary': '#A7C7E7',
                'brand-primary': '#FFEED6',
                'brand-secondary': '#F5B7B1',
                'brand-accent': '#A7C7E7',
                'brand-footer': '#CDEAC0',
                'brand-hover': '#97A13B',
            },
            fontFamily: {
                heading: ['StemmeForDyrene', ...defaultTheme.fontFamily.sans],
                body: ['StemmeForDyrene', ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                soft: '0 10px 30px rgba(0,0,0,0.05)'
            }
        },
    },
    plugins: [],
}