"use client";
import { FC } from "react";
import Image from "next/image";

interface ShortButtonProps {
  /**
   * Function to handle the button click
   */
  onClick: () => void;
}

const icon = "/assets/ic_Search.png";

/**
 * Short button component
 */
export const ShortButton: FC<ShortButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ border: "none", background: "none", cursor: "pointer" }}
    >
      <Image
        src={icon}
        alt="Search Icon"
        style={{ width: "20px", height: "20px" }}
      />
    </button>
  );
};
