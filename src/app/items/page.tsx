"use client";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useGetQuery } from "@/adapters/hooks";
import { CardProducts, Loading } from "@/infrastructure/components";
import { useBreadContext } from "@/adapters/shared/context/breadCrumb";

const SearchResultContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get("search") ?? '';

    useEffect(() => {
        document.title = search || "Mercado Libre";
    }, [search]);

    const { categories, products, loading, error } = useGetQuery(search);
    const { setCategories } = useBreadContext();

    useEffect(() => {
        setCategories(categories);
    }, [categories, setCategories]);

    const handleProductClick = (id: string) => {
        router.push(`/items/${id}`);
    };

    return (
        <div className="page" key={search}>
            <main className="main">
                {loading && <Loading />}
                {error && <p>Error: {error}</p>}
                {!loading && !error && (
                    <CardProducts products={products} onProductClick={handleProductClick} />
                )}
            </main>
        </div>
    );
};

export default function SearchResultPage() {
    return (
        <Suspense fallback={<Loading />}>
            <SearchResultContent />
        </Suspense>
    );
}