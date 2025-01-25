"use client";

import { FC } from "react";

interface TextDescriptionDetailProps {
    /**
     * The text to display
     */
    text: string;
    /**
     * Maximum width of the text container
     */
    maxWidth?: string;
}

/**
 * Component to display a detailed product description
 */
export const TextDescriptionDetail: FC<TextDescriptionDetailProps> = ({
    text,
    maxWidth = "60%",
}) => {
    return (
        <p
            style={{
                color: "#EEEEEE",
                fontSize: "16px",
                maxWidth,
                lineHeight: "1.5",
                margin: 0,
                width: "100%",
            }}
        >
            {text}
        </p>
    );
};