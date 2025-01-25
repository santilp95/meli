"use client";
import { FC } from "react";

import styles from "./textCategories.module.css";
import { TextCategory } from "../../atoms/textCategory/TextCategory";

interface TextCategoriesProps {
    /**
     * Array of category strings
     */
    categories: string[];
}

/**
 * TextCategories component
 */
export const TextCategories: FC<TextCategoriesProps> = ({ categories }) => {
    return (
        <div className={styles.textCategories}>
            {categories.map((category, index) => (
                <span key={category} className={styles.categoryItem}>
                    <TextCategory
                        text={category}
                        isBold={index === categories.length - 1}
                    />
                    {index < categories.length - 1 && (
                        <span className={styles.separator}> &gt; </span>
                    )}
                </span>
            ))}
        </div>
    );
};
