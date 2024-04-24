import React from 'react';

interface TextBoxProps {
    placeholder: string;
    value: string;
    style?: React.CSSProperties;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextBox({
    placeholder,
    value,
    style,
    onChange,
}: TextBoxProps) {
    return (
        <textarea
            onChange={onChange}
            placeholder={placeholder}
            spellCheck="false"
            autoComplete="off"
            value={value}
            style={style}
            className="block max-w-lg w-[100%] bg-neutral-900 p-3 border-[1.5px] border-neutral-400 rounded-xl outline-none focus:border-vibrant-green bg-opacity-60 backdrop-blur-md text-neutral-100 transition-all resize-y max-h-[200px] min-h-[120px] h-[120px] tracking-wide"
        />
    );
}
