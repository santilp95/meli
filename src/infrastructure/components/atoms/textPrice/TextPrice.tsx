"use client";

import { FC } from "react";

interface TextPriceProps {
    /**
     * Price to describe a product price
     */
    price: number;
}

/**
 *  Text to describe a product price
 */
export const TextPrice: FC<TextPriceProps> = ({ price }) => {
    return (
        <p
            style={{
                fontSize: "24px",
                color: "#333333",
                margin: 0,
            }}
            data-testid="text-price"
        >
            $ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </p>
    );
};