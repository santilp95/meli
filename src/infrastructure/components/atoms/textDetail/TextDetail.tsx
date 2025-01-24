"use client";

import { FC } from "react";

import style from "./textDetail.module.css";

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
    return <p className={style.textDetail}>{text}</p>;
};
