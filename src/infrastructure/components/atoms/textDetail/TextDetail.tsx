"use client";

import { FC } from "react";

interface TextDetailProps {
    /**
    * Text to describe a product
    */
    text: string;
}

/**
 * Text to describe a product
 */
export const TextDetail: FC<TextDetailProps> = ({ text }) => {
    return (
        <p
            style={{
                fontSize: "18px",
                color: "#333333",
                margin: 0,
                fontWeight: "normal",
            }}
        >
            {text}
        </p>
    );
};