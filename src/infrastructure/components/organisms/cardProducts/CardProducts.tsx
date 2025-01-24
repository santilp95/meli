"use client";

import { FC } from "react";

import { IProduct } from "@/domain";
import { CardProduct } from '../../molecules';

import styles from "./cardProducts.module.css";


interface CardProductsProps {
    /**
     * List of products
     */
    products: IProduct[];
}

/**
 * List card products
 */
export const CardProducts: FC<CardProductsProps> = ({ products }) => {
    const limitedProducts = products.slice(0, 4);

    return (
        <div className={styles.cardProducts}>
            {limitedProducts.map((product) => (
                <CardProduct
                    key={product.id}
                    image={product.image}
                    price={product.price}
                    detail={product.detail}
                    stateOfTheProduct={product.stateOfTheProduct}
                    city={product.city}
                    hasShippingIcon={product.hasShippingIcon}
                />
            ))}
        </div>
    );
};