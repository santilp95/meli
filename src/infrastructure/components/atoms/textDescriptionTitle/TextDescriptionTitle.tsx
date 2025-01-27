"use client";
import { FC } from "react";

import './textDescriptionTitle.scss'


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
            className="text-description-title"
        >
            {text}
        </h2>
    );
};