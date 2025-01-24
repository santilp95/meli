"use client";
import { ChangeEvent, FC } from "react";

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
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder ?? "Nunca dejes de buscar"}
      style={{
        flex: 1,
        border: "none",
        padding: "10px",
        fontSize: "16px",
        outline: "none",
      }}
    />
  );
};
