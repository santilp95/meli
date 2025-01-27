"use client";

import { FC } from "react";
import "./textTitleProduct.scss";

interface TextTitleProductProps {
  /**
   * The text to display
   */
  text: string;
}

/**
 * Component to display the product title
 */
export const TextTitleProduct: FC<TextTitleProductProps> = ({ text }) => {
  return <h1 className="text-title-product">{text}</h1>;
};