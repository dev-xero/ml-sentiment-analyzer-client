import React from 'react';

interface ButtonProps {
    text: string;
    disabled: boolean;
    style?: React.CSSProperties;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ text, disabled, style, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={style}
            className="block max-w-lg w-[100%] p-4 rounded-xl outline-none transition-all font-bold bg-vibrant-green tracking-wide disabled:cursor-default disabled:bg-opacity-30"
        >
            {text}
        </button>
    );
}
