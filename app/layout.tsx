import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'AI Sentiment Analyzer',
    description: 'Sentiment Analysis using Machine Learning models.',
    icons: {
        shortcut: ['/favicon.svg'],
    },
    openGraph: {
        title: 'AI Sentiment Analyzer',
        description: 'Sentiment Analysis using Machine Learning models.',
        url: 'https://ml-sentiment-analyzer.vercel.app',
        images: [
            {
                url: 'https://ml-sentiment-analyzer.vercel.app/opengraph-image.png',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    metadataBase: new URL('https://ml-sentiment-analyzer.vercel.app')
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={manrope.className}>{children}</body>
        </html>
    );
}
