/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-base':  '#050508',
                'bg-dark':  '#0a0a0f',
                'bg-card':  '#111118',
                'primary':  '#22d3ee',
                'secondary':'#a78bfa',
            },
            fontFamily: {
                'space': ['var(--font-space)', 'sans-serif'],
                'inter': ['var(--font-inter)', 'sans-serif'],
                'mono':  ['var(--font-jbmono)', 'monospace'],
            },
            animation: {
                'float':      'float 6s ease-in-out infinite',
                'float-slow': 'float 9s ease-in-out infinite',
                'glow':       'glow 3s ease-in-out infinite',
                'fade-in-up': 'fadeInUp 0.6s ease forwards',
                'spin-slow':  'spin 12s linear infinite',
            },
        },
    },
    plugins: [],
}
