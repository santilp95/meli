"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";

import { CardDetail, Loading } from "@/infrastructure/components";
import { useGetDataByID } from "@/adapters/hooks";

export default function DetailProductPage() {
    const params = useParams();
    const { id } = params;
    const { data, error, loading } = useGetDataByID(id as string)

    useEffect(() => {
        document.title = data?.title ?? "Mercado Libre";
    }, [data?.title]);

    return (
        <div className="page">
            <main className="main">
                <div className="container container-middle">
                    {loading && <Loading/>}
                    {error && <p>Error: {error}</p>}
                    {!loading && !error && !!data && (
                        <CardDetail
                            alt={data.alt}
                            image={data.image}
                            buttonText="Comprar"
                            description={data.description}
                            price={data.price}
                            state={data.state}
                            title={data.title}
                        />
                    )}
                </div>
            </main>
        </div>
    );
}
