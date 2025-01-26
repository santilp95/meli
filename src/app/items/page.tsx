"use client";
import { useRouter } from "next/navigation";

import { CardProducts } from "@/infrastructure/components";
import { sampleProducts } from "@/utils";
import { IProduct } from "@/domain";

export default function SearchResultPage() {
    const products: IProduct[] = sampleProducts;

    const router = useRouter();
    const handleProductClick = (id: string) => {
        router.push(`/items/${id}`);
    };

    return (
        <div className="page">
            <main className="main">
                <CardProducts products={products} onProductClick={handleProductClick} />
            </main>
        </div>
    );
}
