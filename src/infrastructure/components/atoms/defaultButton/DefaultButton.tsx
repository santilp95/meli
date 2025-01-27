"use client";
import { FC } from "react";

import "./defaultButton.scss";

interface DefaultButtonProps {
    /**
     * The button text
     */
    text: string;
    /**
     * Function to handle button click
     */
    onClick?: () => void;
}

/**
 * Default button component
 */
export const DefaultButton: FC<DefaultButtonProps> = ({ text, onClick }) => {
    return (
        <button className="default-button" onClick={onClick}>
            {text}
        </button>
    );
};
