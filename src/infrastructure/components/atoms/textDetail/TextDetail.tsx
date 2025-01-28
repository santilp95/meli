"use client";

import { FC } from "react";

import  "./textDetail.scss";

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
    return <p className="text-detail">{text}</p>;
};
