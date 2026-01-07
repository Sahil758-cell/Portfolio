/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-dark': '#050505',
                'bg-card': '#0a0a0a',
                'primary': '#00f3ff',
                'secondary': '#bd00ff',
            },
            fontFamily: {
                'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
                'outfit': ['"Outfit"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
