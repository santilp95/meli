"use client";

import { FC } from "react";
import Image from "next/image";

interface ProductImageProps {
    /**
     * Image source
     */
    image: string;
}

/**
 * Component to render the main product image
 */
export const ProductImage: FC<ProductImageProps> = ({ image }) => {
    return (
        <Image
            src={image}
            alt="Product image"
            width={680}
            height={680}
            style={{
                objectFit: "cover",
            }}
        />
    );
};