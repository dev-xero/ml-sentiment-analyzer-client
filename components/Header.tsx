import Image from 'next/image';

export default function Header() {
    return (
        <section className="flex items-center justify-center">
            <Image
                src={'/icon-smiley.svg'}
                alt={'Icon Smiley'}
                width={32}
                height={32}
                className="mr-4 md:w-16 md:h-16"
            />
            <h1 className="text-xl md:text-3xl font-bold inline">AI Sentiment Analyzer</h1>
        </section>
    );
}
