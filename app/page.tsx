'use client';

import Button from '@/components/Button';
import Header from '@/components/Header';
import InputField from '@/components/InputField';
import TextBox from '@/components/TextBox';
import React, { useEffect, useState } from 'react';
import { API } from '@/utils/constants';
import SentimentModal from '@/components/SentimentModal';

export default function Home() {
    const [product, setProduct] = useState('');
    const [review, setReview] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [isUnfit, setIsUnfit] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [sentiment, setSentiment] = useState(1);
    const [buttonText, setButtonText] = useState(
        isPending ? 'Analyzing' : 'Analyze'
    );

    const togglePendingState = () => {
        setIsPending((prev) => !prev);
    };

    const handlePredictSentiment = async (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();
        setIsUnfit(true);
        togglePendingState();
        if (product != '' && review != '') {
            setIsUnfit(false);
            try {
                const res = await fetch(`${API}/analyze`, {
                    mode: 'cors',
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ review }),
                });
                const data = await res.json();
                console.log(data);
                const sentiment = data.payload;
                if (parseInt(sentiment)) {
                    setSentiment(parseInt(sentiment));
                    setIsModalVisible(true);
                }
            } catch (e) {
                console.error('An error occurred.');
                console.error(e);
            } finally {
                togglePendingState();
            }
        } else {
            togglePendingState();
        }
    };

    useEffect(() => {
        setButtonText(isPending ? 'Analyzing' : 'Analyze');
    }, [isPending]);

    return (
        <>
            {isModalVisible && (
                <SentimentModal
                    sentiment={sentiment}
                    product={product}
                    onCloseClicked={() => setIsModalVisible(false)}
                />
            )}
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
                        onChange={(e) => {
                            setIsUnfit(false);
                            setProduct(e.target.value);
                        }}
                    />
                    <TextBox
                        placeholder="Your review"
                        value={review}
                        onChange={(e) => {
                            setIsUnfit(false);
                            setReview(e.target.value);
                        }}
                        style={{ marginTop: '16px' }}
                    />
                    {isUnfit && (
                        <p className="text-lighter-orange text-sm w-full mx-auto text-center mt-4 font-medium tracking-wide">
                            *Please fill both product and review fields.
                        </p>
                    )}
                    <Button
                        text={buttonText}
                        disabled={isPending}
                        style={{ marginTop: '32px' }}
                        onClick={handlePredictSentiment}
                    />
                </form>
            </main>
        </>
    );
}
