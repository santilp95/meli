"use client";
import { FC } from "react";
import Image from "next/image";

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
      onClick={onClick}
      style={{
        border: "none",
        background: "none",
        padding: 0,
        cursor: "pointer",
      }}
      data-testid="logo-icon"
    >
      <Image src={logo} alt="Logo" width={40} height={30} />
    </button>
  );
};
