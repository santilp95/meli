"use client";
import { FC } from "react";

import { TextDescriptionDetail, TextDescriptionTitle } from "../../atoms";

import "./productDetail.scss";


interface ProductDetailProps {
    /**
     * The title of the section
     */
    title?: string;
    /**
     * The detailed description
     */
    description: string;
}

/**
 * Molecule to display product details
 */
export const ProductDetail: FC<ProductDetailProps> = ({
    title = "Descripción del producto",
    description,
}) => {
    return (
        <section className="product-detail">
            <TextDescriptionTitle text={title} />
            <TextDescriptionDetail text={description} />
        </section>
    );
};