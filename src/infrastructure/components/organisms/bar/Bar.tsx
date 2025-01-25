"use client";
import { FC } from 'react';

import { SearchBar, TextCategories } from '../../molecules';

import "./bar.css";


interface BarProps {
    placeholder?: string;
    onSearch?: (value: string) => void;
    categories: string[];
}

export const Bar: FC<BarProps> = ({
    placeholder,
    categories,
    onSearch
}) => {

    return (
        <header className="header">
            <div className="container searchContainer">
                <SearchBar
                    placeholder={placeholder}
                    onSearch={onSearch}
                />
            </div>
            <div className="container container-middle">
                <TextCategories categories={categories} />
            </div>
        </header>
    )
}
