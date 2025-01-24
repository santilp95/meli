"use client";

import { FC } from "react";

interface TextPriceProps {
    /**
     * Text to describe a product price
     */
    text: string | number;
}

/**
 *  Text to describe a product price
 */
export const TextPrice: FC<TextPriceProps> = ({ text }) => {
    return (
        <p
            style={{
                fontSize: "18px",
                color: "#333333",
                fontWeight: "bold",
                margin: 0,
            }}
        >
            {text}
        </p>
    );
};