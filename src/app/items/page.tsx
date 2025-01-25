"use client";

import { CardProducts } from "@/infrastructure/components";
import { sampleProducts } from "@/utils";
import { IProduct } from "@/domain";


export default function Items() {
    const products: IProduct[] = sampleProducts;

    return (
        <div className="page">
            <main className="main">
                <CardProducts products={products} />
            </main>
        </div>
    );
}