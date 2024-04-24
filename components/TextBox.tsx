import React from 'react';

interface TextBoxProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextBox({
    placeholder,
    value,
    onChange,
}: TextBoxProps) {
    return (
        <textarea
            onChange={onChange}
            placeholder={placeholder}
            spellCheck="false"
            autoComplete="off"
            value={value}
            className="block max-w-lg w-[100%] bg-neutral-900 p-3 border-[1.5px] border-neutral-400 rounded-xl outline-none focus:border-neutral-000 bg-opacity-70 backdrop-blur-lg text-neutral-100 transition-all resize-y max-h-[200px] h-[120px]"
        />
    );
}
