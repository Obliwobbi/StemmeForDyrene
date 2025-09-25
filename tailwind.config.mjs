/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: '#FFD4D0',
                    text: '#2C2C2C',
                    primary: '#FFEED6',
                    secondary: '#F5B7B1',
                    accent: '#A7C7E7',
                }
            },
            fontFamily: {
                heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
                body: ['Inter', 'ui-sans-serif', 'system-ui']
            },
            boxShadow: {
                soft: '0 10px 30px rgba(0,0,0,0.05)'
            }
        },
    },
    plugins: [],
}