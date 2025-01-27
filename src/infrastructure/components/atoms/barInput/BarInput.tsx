"use client";
import { ChangeEvent, FC, KeyboardEvent } from "react";

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
  /**
   * Function to handle the key down event
   */
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

/**
 * Bar input component
 */
export const BarInput: FC<BarInputProps> = ({
  placeholder,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <input
      className={styles.barInput}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder ?? "Nunca dejes de buscar"}
      type="text"
      value={value}
    />
  );
};