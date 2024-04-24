'use client';

import Header from '@/components/Header';
import InputField from '@/components/InputField';
import TextBox from '@/components/TextBox';
import { useState } from 'react';

export default function Home() {
    const [product, setProduct] = useState('');
    const [review, setReview] = useState('');

    return (
        <main className="w-[calc(100%-32px)] min-h-screen flex flex-col justify-center items-center m-4 py-8">
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
