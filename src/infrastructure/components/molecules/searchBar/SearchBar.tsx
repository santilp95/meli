"use client";
import { FC } from "react";

import { BarInput, IconProduct, ShortButton } from "../../atoms";

import styles from "./searchBar.module.css";

interface SearchBarProps {
    placeholder?: string;
    onSearch?: () => void;
    onInputChange?: (value: string) => void;
    value?: string;
}

export const SearchBar: FC<SearchBarProps> = ({
    placeholder,
    onSearch,
    onInputChange,
    value,
}) => {
    return (
        <div
            className={styles.searchBar}
        >
            <IconProduct />
            <BarInput
                placeholder={placeholder}
                value={value}
                onChange={(e) => onInputChange && onInputChange(e.target.value)}
            />
            <ShortButton onClick={onSearch} />
        </div>
    );
};
