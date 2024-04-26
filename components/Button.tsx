import React from 'react';
import Lottie from 'lottie-react';
import spinnerAnim from '@/animated/spinner.json';

interface ButtonProps {
    text: string;
    disabled: boolean;
    style?: React.CSSProperties;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
    text,
    disabled,
    style,
    onClick,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={style}
            className="flex justify-center items-center max-w-lg w-[100%] px-4 h-12 rounded-xl outline-none transition-all font-bold bg-vibrant-orange tracking-wide disabled:cursor-default disabled:bg-opacity-50 text-lg select-none text-neutral-000"
        >
            {disabled && (
                <div className="w-12 max-w-12 h-12 max-h-12 ml-[-24px]">
                    <Lottie
                        animationData={spinnerAnim}
                        loop={true}
                        width={48}
                        height={48}
                        rendererSettings={{
                            preserveAspectRatio: 'xMidYMid slice',
                        }}
                    />
                </div>
            )}
            <span>{text}</span>
        </button>
    );
}
