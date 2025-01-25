"use client";

import { FC } from "react";
import Image from "next/image";

interface ProductImageProps {
    /**
     * Image source
     */
    image: string;
    /**
     * Image alt
     */
    alt: string;
}

/**
 * Component to render the main product image
 */
export const ProductImage: FC<ProductImageProps> = ({ image , alt}) => {
    return (
        <Image
            src={image}
            alt={alt}
            width={680}
            height={680}
            style={{
                objectFit: "cover",
            }}
        />
    );
};