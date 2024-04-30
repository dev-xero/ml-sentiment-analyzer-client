import Image from 'next/image';

interface SentimentModalProps {
    sentiment: number;
    product: string;
    onCloseClicked: () => void;
}

export default function SentimentModal({
    sentiment,
    product,
    onCloseClicked,
}: SentimentModalProps) {
    let reactionIcon = '/reactions/positive.svg';
    let reaction = 'POSITIVE!';
    let color = 'text-reaction-green';
    let summary =
        'Our model evaluated your review to sound positive! Thank you for your review!';

    if (sentiment == 0) {
        reactionIcon = '/reactions/neutral.svg';
        reaction = 'NEUTRAL';
        color = 'text-reaction-yellow';
        summary =
            "Our model evaluated your review to sound neutral. We'll work on improving our product.";
    } else if (sentiment == -1) {
        reactionIcon = '/reactions/negative.svg';
        reaction = 'NEGATIVE';
        color = 'text-reaction-red';
        summary =
            "Our model evaluated a negative review. We're so sorry you didn't enjoy our product.";
    }

    return (
        <div className="fixed w-screen h-screen top-0 left-0 overflow-hidden z-50 backdrop-filter backdrop-blur-md grid place-items-center cursor-pointer">
            <div className="relative w-[min(540px,85%)] h-[min(320px,80%)] z-30 rounded-2xl bg-dark-bg border-2 border-modal-border flex flex-col items-center justify-center text-center p-2">
                <div className="flex justify-end w-full absolute right-4 top-4">
                    <Image
                        src="/icon-close.svg"
                        alt="close"
                        width={24}
                        height={24}
                        onClick={onCloseClicked}
                        priority={true}
                    />
                </div>
                <h4 className="text-[#A7ADAF] overflow-hidden mt-2">
                    Your review on{' '}
                    <span className=" text-[#FFF]">{product}</span> sounds
                </h4>
                <h2 className="flex items-center mt-6">
                    <Image
                        src={reactionIcon}
                        alt="reaction-icon"
                        width={48}
                        height={48}
                        className="md:w-16 md:h-16"
                    />
                    <span className={`text-4xl ml-4 font-extrabold ${color}`}>
                        {reaction}
                    </span>
                </h2>
                <p className="text-center max-w-[400px] w-full text-[#A7ADAF] mt-6">
                    {summary}
                </p>
            </div>
            <div className="absolute top-0 left-0 w-screen h-screen bg-[#000] opacity-45"></div>
        </div>
    );
}
