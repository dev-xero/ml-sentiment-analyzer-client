'use client';

import Button from '@/components/Button';
import Header from '@/components/Header';
import InputField from '@/components/InputField';
import TextBox from '@/components/TextBox';
import React, { useEffect, useState } from 'react';

export default function Home() {
    const [product, setProduct] = useState('');
    const [review, setReview] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [buttonText, setButtonText] = useState(
        isPending ? 'Analyzing' : 'Analyze'
    );

    const togglePendingState = () => {
        setIsPending((prev) => !prev);
    };

    const handlePredictSentiment = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        togglePendingState();
        setTimeout(() => togglePendingState(), 1000);
    };

    useEffect(() => {
        setButtonText(isPending ? 'Analyzing' : 'Analyze');
    }, [isPending]);

    return (
        <main className="w-full py-8 px-4">
            <Header />
            <form
                action="/"
                method="POST"
                className="mt-8 w-full max-w-lg mx-auto"
            >
                <InputField
                    type="text"
                    placeholder="Product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                />
                <TextBox
                    placeholder="Your review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    style={{ marginTop: '16px' }}
                />
                <Button
                    text={buttonText}
                    disabled={isPending}
                    style={{ marginTop: '32px' }}
                    onClick={handlePredictSentiment}
                />
            </form>
        </main>
    );
}
