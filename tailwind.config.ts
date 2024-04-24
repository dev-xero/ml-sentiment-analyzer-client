import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            'neutral-000': '#FFFFFF',
            'neutral-400': '#2D2D35',
            'neutral-500': '#E0E0E0',
            'neutral-600': '#A6A8AA',
            'neutral-800': '#121316',
            'neutral-900': '#050507',
            'vibrant-green': '#00CB8E'
        },
    },
    plugins: [],
};
export default config;
