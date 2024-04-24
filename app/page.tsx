'use client';

import Header from '@/components/Header';
import InputField from '@/components/InputField';
import { ChangeEvent, useState } from 'react';

export default function Home() {
    const [product, setProduct] = useState('');

    return (
        <main className="w-[calc(100%-32px)] h-full flex flex-col justify-center align-center mx-4">
            <Header />
            <form action="/" method="POST" className='mt-12 w-[100%] max-w-lg mx-auto'>
                <InputField
                    type="text"
                    placeholder="Product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                />
            </form>
        </main>
    );
}
