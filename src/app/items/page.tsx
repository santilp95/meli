"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { CardProducts } from "@/infrastructure/components";
import { msQuery } from "@/infrastructure/services/msQuery/msQuery";
import { IProduct, IResponseTransformQuery } from "@/domain";


export default function SearchResultPage() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get("search");

    useEffect(() => {
        if (search) {
            setLoading(true);
            msQuery(search)
                .then((response: IResponseTransformQuery) => {
                    const products: IProduct[] = response.items.map((item)=>({
                        id: item.id,
                        image: item.picture,
                        price: item.price.amount,
                        detail: item.title,
                        stateOfTheProduct: item.condition,
                        city: 'Bogotá',
                        hasShippingIcon: item.free_shipping,
                    }))
                    console.log(response);
                    setProducts(products);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [search]);

    const handleProductClick = (id: string) => {
        router.push(`/items/${id}`);
    };

    return (
        <div className="page">
            <main className="main">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && !error && (
                    <CardProducts products={products} onProductClick={handleProductClick} />
                )}
            </main>
        </div>
    );
}