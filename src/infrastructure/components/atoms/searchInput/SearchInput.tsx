"use client";
import { ChangeEvent, FC } from "react";

import styles from "./searchInput.module.css";

interface SearchInputProps {
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
 * Search input component
 */
export const SearchInput: FC<SearchInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      className={styles.searchInput}
      onChange={onChange}
      placeholder={placeholder ?? "Nunca dejes de buscar"}
      type="text"
      value={value}
    />
  );
};
