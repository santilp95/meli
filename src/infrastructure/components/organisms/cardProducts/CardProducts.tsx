"use client";
import { FC } from "react";

import { IProduct } from "@/domain";
import { CardProduct } from "../../molecules";

import "./cardProducts.scss";

interface CardProductsProps {
    /**
     * List of products
     */
    products: IProduct[];
    /**
    * Function to handle product click
    */
    onProductClick?: (id: string) => void;
}

/**
 * List card products
 */
export const CardProducts: FC<CardProductsProps> = ({ products, onProductClick }) => {
    const limitedProducts = products.slice(0, 4);

    return (
        <div className="container container-middle card-products">
            {limitedProducts.map((product) => (
                <CardProduct
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    price={product.price}
                    detail={product.detail}
                    stateOfTheProduct={product.stateOfTheProduct}
                    city={product.city}
                    hasShippingIcon={product.hasShippingIcon}
                    onClick={onProductClick}
                />
            ))}
        </div>
    );
};
