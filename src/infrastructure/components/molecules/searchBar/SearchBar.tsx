"use client";
import { FC } from "react";
import { IconProduct, SearchInput, ShortButton } from "../../atoms";

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
            style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffd400",
                padding: "5px 10px",
                borderRadius: "5px",
                width: "100%",
            }}
        >
            <IconProduct />
            <SearchInput
                placeholder={placeholder}
                value={value}
                onChange={(e) => onInputChange && onInputChange(e.target.value)}
            />
            <ShortButton onClick={onSearch} />
        </div>
    );
};
