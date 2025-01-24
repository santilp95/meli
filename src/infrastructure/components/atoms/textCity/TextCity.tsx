"use client";

import { FC } from "react";

interface TextCityProps {
    /**
    * Text to describe a city
    */
    text: string;
}

/**
 * Text to describe a city
 */
export const TextCity: FC<TextCityProps> = ({ text }) => {
    return (
        <p
            style={{
                fontSize: "12px",
                color: "#999999", // Gris claro
                margin: 0, // Sin márgenes
            }}
        >
            {text}
        </p>
    );
};