"use client";
import { FC } from "react";

import {
    ImageSearch,
    TextPrice,
    SmallIcon,
    TextCity,
    TextDetail,
} from "../../atoms";

import styles from "./CardProduct.module.css";

export interface CardProductProps {
    /**
     * Image of the product
     */
    image: string;
    /**
     * Price of the product
     */
    price: number;
    /**
     * Detail of the product
     */
    detail: string;
    /**
     * State of the product
     */
    stateOfTheProduct?: string;
    /**
     * City of the product
     */
    city: string;
    /**
     * Shipping icon
     */
    hasShippingIcon?: boolean;
    /**
     * Product id
     */
    id: string;
    /**
     * Click handler
     */
    onClick?: (id: string) => void;
}

/**
 * Card product
 */
export const CardProduct: FC<CardProductProps> = ({
    image,
    price,
    detail,
    city,
    stateOfTheProduct = "Completo unico!",
    hasShippingIcon = false,
    id,
    onClick,
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick(id);
        }
    };

    return (
        <button className={styles.card} onClick={handleClick}>

            <div className={styles.imageContainer}>
                <ImageSearch src={image} alt={detail} />
            </div>


            <div className={styles.infoContainer}>
                <div className={styles.priceContainer}>
                    <TextPrice price={price} />
                    {hasShippingIcon && <SmallIcon />}
                </div>
                <div className={styles.detailContainer}>
                    <TextDetail text={detail} />
                    <TextDetail text={stateOfTheProduct} />
                </div>

            </div>


            <div className={styles.cityContainer}>
                <TextCity text={city} />
            </div>
        </button>
    );
};