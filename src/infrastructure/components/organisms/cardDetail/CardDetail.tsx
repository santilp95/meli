"use client";

import { FC } from "react";

import { ProductImage } from "../../atoms";
import { ProductDetail, ProductInfo } from "../../molecules";

import "./cardDetail.css";

interface CardDetailProps {
    /**
     * The image of the product
     */
    image: string;
    /**
     * The alt text for the image
     */
    alt: string;
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
    /**
     * The description of the product
     */
    description: string;
}

/**
 * Organism to display complete product details
 */
export const CardDetail: FC<CardDetailProps> = ({
    image,
    alt,
    state,
    title,
    price,
    buttonText,
    onButtonClick,
    description,
}) => {
    return (
        <div className="card-detail">
            <div className="card-detail__image">
                <ProductImage image={image} alt={alt} />
            </div>
            <div className="card-detail__info">
                <ProductInfo
                    state={state}
                    title={title}
                    price={price}
                    buttonText={buttonText}
                    onButtonClick={onButtonClick}
                />
            </div>
            <div className="card-detail__description">
                <ProductDetail
                    title="Descripción del producto"
                    description={description}
                />
            </div>
        </div>
    );
};
