"use client";

import { FC } from "react";
import './textCategory.scss'

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
            className="text-category"
            style={{
                fontWeight: isBold ? "bold" : "normal",
            }}
        >
            {text}
        </p>
    );
};
