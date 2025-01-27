"use client";
import { FC } from "react";

import './textDescriptionDetail.scss'

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
            className="text-description-detail"
            style={{
                maxWidth,
            }}
        >
            {text}
        </p>
    );
};