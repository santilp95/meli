"use client";
import { FC, useState } from "react";

import { BarInput, IconProduct, ShortButton } from "../../atoms";

import styles from "./searchBar.module.css";

interface SearchBarProps {
    /**
     * Placeholder text
     */
    placeholder?: string;
    /**
     * Function to handle the search
     */
    onSearch?: (value: string) => void;
}

/**
 * Search bar component
 */
export const SearchBar: FC<SearchBarProps> = ({
    placeholder,
    onSearch,

}) => {
    const [search, setSearch] = useState("");
    const handleInputChange = (newValue: string) => {
        setSearch(newValue);
    };

    const handleSearch = () => {
        if (onSearch) {
            onSearch(search);
        }
    };
    return (
        <div
            className={styles.searchBar}
        >
            <IconProduct />
            <BarInput
                placeholder={placeholder}
                value={search}
                onChange={(e) => handleInputChange(e.target.value)}
            />
            <ShortButton onClick={handleSearch} />
        </div>
    );
};
