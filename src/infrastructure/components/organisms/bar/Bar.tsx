"use client";
import { FC } from 'react';

import { SearchBar, TextCategories } from '../../molecules';

import "./bar.css";
import { useBreadContext } from '@/adapters/shared/context/breadCrumb';


interface BarProps {
    /**
     * placeholder to show text
     */
    placeholder?: string;
    /**
     * get data search
     */
    onSearch?: (value: string) => void;
    /**
    * click in icon
    */
    onClickIcon?: () => void;
}

/**
 * Bar component
 */
export const Bar: FC<BarProps> = ({
    placeholder,
    onSearch,
    onClickIcon,
}) => {
    const { categories } = useBreadContext();


    return (
        <header className="header">
            <div className="container searchContainer">
                <SearchBar
                    placeholder={placeholder}
                    onSearch={onSearch}
                    onClickIcon={onClickIcon}
                />
            </div>
            <div className="container container-middle">
                <TextCategories categories={categories} />
            </div>
        </header>
    )
}
