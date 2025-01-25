"use client";

import { useParams } from 'next/navigation';

export default function DetailProductPage() {
    const params = useParams();
    const { id } = params;

    return (
        <div className="page">
            <main className="main">
                <h1>{id}</h1>
            </main>
        </div>
    );
}