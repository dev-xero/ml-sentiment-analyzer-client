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
            'neutral-200': '#BAADAB',
            'neutral-400': '#4F423C',
            'neutral-500': '#E0E0E0',
            'neutral-600': '#D0C3BE',
            'neutral-800': '#121316',
            'neutral-900': '#110908',
            'vibrant-orange': '#F77B35',
            'lighter-orange': '#EAC2B1'
        },
    },
    plugins: [],
};
export default config;
