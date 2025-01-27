"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useGetQuery } from "@/application/hooks";
import { CardProducts, Loading } from "@/infrastructure/components";
import { useBreadContext } from "@/application/shared/context/breadCrumb";


export default function SearchResultPage() {


    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get("search") ?? '';

    const { categories, products, loading, error } = useGetQuery(search);
    const { setCategories } = useBreadContext();

    useEffect(() => {
        setCategories(categories)
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
}