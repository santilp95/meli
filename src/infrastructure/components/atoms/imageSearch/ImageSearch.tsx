"use client";

import { FC } from "react";
import Image from "next/image";

interface ImageSearchProps {
    /**
     * Image source
     */
    src: string;
    /**
     * Image alt
     */
    alt: string;
}


/**
 * Image to describe a product
 */
export const ImageSearch: FC<ImageSearchProps> = ({ src, alt }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={180}
            height={180}
            style={{
                borderRadius: "4px",
                objectFit: "cover",
            }}
        />
    );
};