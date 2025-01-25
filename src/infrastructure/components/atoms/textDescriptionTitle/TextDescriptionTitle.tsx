"use client";

import { FC } from "react";

interface TextDescriptionTitleProps {
    /**
     * The text to display
     */
    text?: string;
}

/**
 * Component to display a description title
 */
export const TextDescriptionTitle: FC<TextDescriptionTitleProps> = ({
    text = "Descripción del producto",
}) => {
    return (
        <h2
            style={{
                color: "#333333",
                fontSize: "28px",
                margin: 0,
            }}
        >
            {text}
        </h2>
    );
};