"use client";

import { FC } from "react";

interface TextPriceProps {
    /**
     * Price to describe a product price
     */
    price: number;
    /**
     * font size
     */
    fontSize?: string;
}

/**
 *  Text to describe a product price
 */
export const TextPrice: FC<TextPriceProps> = ({ price, fontSize = "24px" }) => {
    return (
        <p
            style={{
                fontSize,
            }}
            className="text-color-black"
            data-testid="text-price"
        >
            $ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </p>
    );
};
