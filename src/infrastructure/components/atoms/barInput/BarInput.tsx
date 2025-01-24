"use client";
import { ChangeEvent, FC } from "react";

import styles from "./barInput.module.css";

interface BarInputProps {
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Value of the input
   */
  value?: string;
  /**
   * Function to handle the input change
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Bar input component
 */
export const BarInput: FC<BarInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      className={styles.barInput}
      onChange={onChange}
      placeholder={placeholder ?? "Nunca dejes de buscar"}
      type="text"
      value={value}
    />
  );
};
