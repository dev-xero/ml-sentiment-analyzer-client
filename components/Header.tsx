import Image from 'next/image';

export default function Header() {
    return (
        <section className="max-w-lg mx-auto">
            <header className="flex items-center justify-center ">
                <Image
                    src={'/icon-smiley.svg'}
                    alt={'Icon Smiley'}
                    width={32}
                    height={32}
                    className="mr-3 md:mr-4 md:w-12 md:h-12"
                />
                <div className="mt-[-16px]">
                    <span className="text-xs font-bold block text-vibrant-orange w-full text-right">
                        BETA
                    </span>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold inline text-center">
                        AI Sentiment Analyzer
                    </h1>
                </div>
            </header>
            <p className="mt-4 text-center text-neutral-600 text-sm md:text-md">
                This app runs on an ML model trained using TensorFlow to analyze
                product review sentiments.
            </p>
        </section>
    );
}
