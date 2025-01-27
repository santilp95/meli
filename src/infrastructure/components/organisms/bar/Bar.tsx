"use client";
import { FC } from 'react';

import { SearchBar, TextCategories } from '../../molecules';

import "./bar.css";
import { useBreadContext } from '@/application/shared/context/breadCrumb';


interface BarProps {
    placeholder?: string;
    onSearch?: (value: string) => void;
}

export const Bar: FC<BarProps> = ({
    placeholder,
    onSearch
}) => {
    const { categories } = useBreadContext();


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
