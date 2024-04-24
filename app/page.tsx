'use client';

import Header from '@/components/Header';
import InputField from '@/components/InputField';
import TextBox from '@/components/TextBox';
import { useState } from 'react';

export default function Home() {
    const [product, setProduct] = useState('');
    const [review, setReview] = useState('');

    return (
        <main className="w-[calc(100%-32px)] h-[calc(100%-32px)] flex flex-col justify-center align-center m-4">
            <Header />
            <form
                action="/"
                method="POST"
                className="mt-12 w-[100%] max-w-lg mx-auto"
            >
                <InputField
                    type="text"
                    placeholder="Product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                />
                <div className="h-4"></div>
                <TextBox
                    placeholder="Your review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
            </form>
        </main>
    );
}
