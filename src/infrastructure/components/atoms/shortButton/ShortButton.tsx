"use client";
import { FC } from "react";
import Image from "next/image";

import styles from "./shortButton.module.css";

interface ShortButtonProps {
  /**
   * Function to handle the button click
   */
  onClick?: () => void;
}

const icon = "/assets/ic_Search.png";

/**
 * Short button component
 */
export const ShortButton: FC<ShortButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles.shortButton}
    >
      <Image
        src={icon}
        alt="Search Icon"
        width={20}
        height={20}
      />
    </button>
  );
};
