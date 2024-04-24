import React from 'react';

interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    style?: React.CSSProperties;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
    type,
    placeholder,
    value,
    style,
    onChange,
}: InputFieldProps) {
    return (
        <input
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            spellCheck="false"
            autoComplete="off"
            value={value}
            style={style}
            className="block max-w-lg w-[100%] bg-neutral-900 p-3 border-[1.5px] border-neutral-400 rounded-xl outline-none focus:border-neutral-000 bg-opacity-70 backdrop-blur-lg text-neutral-100 transition-all tracking-wide"
        />
    );
}
