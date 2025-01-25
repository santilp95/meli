"use client";

import { FC } from "react";
import "./textStateProduct.css";

interface TextStateProductProps {
    /**
     * The text to display
     */
    text: string;
}

/**
 * Component to display the product state
 */
export const TextStateProduct: FC<TextStateProductProps> = ({ text }) => {
    return <p className="text-state-product">{text}</p>;
};