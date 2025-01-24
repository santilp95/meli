/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";

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
        <img
            src={src}
            alt={alt}
            style={{
                width: "180px",
                height: "180px",
                borderRadius: "4px",
                objectFit: "cover",
            }}
        />
    );
};