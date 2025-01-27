"use client";
import { FC } from "react";

import { TextCategory } from "../../atoms/textCategory/TextCategory";

import "./textCategories.scss";

interface TextCategoriesProps {
    /**
     * Array of category strings
     */
    categories?: string[];
}

/**
 * TextCategories component
 */
export const TextCategories: FC<TextCategoriesProps> = ({ categories=[] }) => {
    return (
        <div className="text-categories">
            {categories.map((category, index) => (
                <span key={category} className="category-item">
                    <TextCategory
                        text={category}
                        isBold={index === categories.length - 1}
                    />
                    {index < categories.length - 1 && (
                        <span className="separator"> &gt; </span>
                    )}
                </span>
            ))}
        </div>
    );
};
