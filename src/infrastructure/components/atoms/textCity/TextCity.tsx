"use client";
import { FC } from "react";

import './textCity.scss'

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
            className="text-city"
        >
            {text}
        </p>
    );
};