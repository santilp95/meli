"use client";
import { FC, useState } from "react";

import { BarInput, IconProduct, ShortButton } from "../../atoms";

import "./searchBar.scss";

interface SearchBarProps {
    /**
     * Placeholder text
     */
    placeholder?: string;
    /**
     * Function to handle the search
     */
    onSearch?: (value: string) => void;
    /**
     * click in icon
     */
    onClickIcon?: () => void;

}

/**
 * Search bar component
 */
export const SearchBar: FC<SearchBarProps> = ({
    placeholder,
    onSearch,
    onClickIcon,
}) => {
    const [search, setSearch] = useState('');

    const handleInputChange = (newValue: string) => {
        setSearch(newValue);
    };

    const handleSearch = () => {
        if (onSearch) {
            onSearch(search);
        }
    };

    const handleClickIconButton = ()=>{
        if (onClickIcon) {
            onClickIcon();
            setSearch('');
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="search-bar container">
            <IconProduct onClick={handleClickIconButton} />
            <BarInput
                placeholder={placeholder}
                value={search}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <ShortButton onClick={handleSearch} />
        </div>
    );
};
