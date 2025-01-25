"use client";
import { FC } from "react";

import {
    DefaultButton,
    TextPrice,
    TextStateProduct,
    TextTitleProduct,
} from "../../atoms";

import "./productInfo.css";

interface ProductInfoProps {
    /**
     * The state of the product
     */
    state: string;
    /**
     * The title of the product
     */
    title: string;
    /**
     * The price of the product
     */
    price: number;
    /**
     * The text of the button
     */
    buttonText: string;
    /**
     * Function to handle button click
     */
    onButtonClick?: () => void;
}

/**
 * Display product information
 */
export const ProductInfo: FC<ProductInfoProps> = ({
    state,
    title,
    price,
    buttonText,
    onButtonClick,
}) => {
    return (
        <div className="product-info">
            <TextStateProduct text={state} />
            <TextTitleProduct text={title} />
            <TextPrice price={price} fontSize="46px"/>
            <div className="button-container">
                <DefaultButton text={buttonText} onClick={onButtonClick} />
            </div>
        </div>
    );
};
