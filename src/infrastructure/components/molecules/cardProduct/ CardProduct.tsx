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

interface CardProductProps {
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
}) => {
    return (
        <div className={styles.card}>

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
        </div>
    );
};