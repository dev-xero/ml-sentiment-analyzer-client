import Image from 'next/image';

export default function Header() {
    return (
        <section className="flex items-center justify-center">
            <Image
                src={'/icon-smiley.svg'}
                alt={'Icon Smiley'}
                width={64}
                height={64}
                className="mr-4"
            />
            <h1 className="text-3xl font-bold">AI Sentiment Analyzer</h1>
        </section>
    );
}
