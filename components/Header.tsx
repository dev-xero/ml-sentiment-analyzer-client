import Image from 'next/image';

export default function Header() {
    return (
        <section className="flex items-center justify-center md:flex-row flex-col w-max-xl mx-auto">
            <Image
                src={'/icon-smiley.svg'}
                alt={'Icon Smiley'}
                width={64}
                height={64}
                className="mb-3 md:mb-0 md:mr-4"
            />
            <h1 className="text-2xl md:text-3xl font-bold inline text-center">
                AI Sentiment Analyzer
            </h1>
        </section>
    );
}
