"use client";
import { useParams } from "next/navigation";

import { CardDetail } from "@/infrastructure/components";

export default function DetailProductPage() {
    const params = useParams();
    const { id } = params;
    console.log({ id });
    const image =
        "https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2024/09/iPhone-16-pro-1.jpg?x=480&y=375&quality=80";

    return (
        <div className="page">
            <main className="main">
                <div className="container container-middle">
                    <CardDetail
                        alt="iphone"
                        image={image}
                        buttonText="Comprar"
                        description="This is a detailed product description."
                        price={1980}
                        state="Nuevo - 234 vendidos"
                        title="Deco Reverse Sombrero Oxford"
                    />
                </div>
            </main>
        </div>
    );
}
