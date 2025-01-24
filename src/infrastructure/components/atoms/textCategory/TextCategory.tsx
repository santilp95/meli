"use client";

import { FC } from "react";

interface TextCategoryProps {
    /**
     * The text to display
     */
    text: string;
    /**
     * Whether the text should be bold
     */
    isBold?: boolean;
}

/**
 * TextCategory component
 */
export const TextCategory: FC<TextCategoryProps> = ({
    text,
    isBold = false,
}) => {
    return (
        <p
            style={{
                fontSize: "14px",
                color: "#999999",
                fontWeight: isBold ? "bold" : "normal",
                margin: 0,
                padding: 0,
            }}
        >
            {text}
        </p>
    );
};
