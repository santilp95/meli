"use client";
import { FC } from "react";
import Image from "next/image";

import './iconProduct.scss';

const logo = "/assets/Logo_ML.png";

interface IconProductProps {
  /**
   * Function to handle the click event
   */
  onClick?: () => void;
}

/**
 * Icon product component
 */
export const IconProduct: FC<IconProductProps> = ({ onClick }) => {
  return (
    <button
      className="icon-product"
      data-testid="logo-icon"
      onClick={onClick}
    >
      <Image src={logo} alt="Logo" width={40} height={30} />
    </button>
  );
};
