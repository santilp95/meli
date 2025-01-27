"use client";
import { useRouter, useSearchParams } from "next/navigation";

import { useGetQuery } from "@/application/hooks";
import { CardProducts, Loading } from "@/infrastructure/components";


export default function SearchResultPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get("search") ?? '';

    const { products, loading, error } = useGetQuery(search);

    const handleProductClick = (id: string) => {
        router.push(`/items/${id}`);
    };

    return (
        <div className="page">
            <main className="main">
                {loading && <Loading/>}
                {error && <p>Error: {error}</p>}
                {!loading && !error && (
                    <CardProducts products={products} onProductClick={handleProductClick} />
                )}
            </main>
        </div>
    );
}