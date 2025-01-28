"use client";
import { FC } from 'react';

import { SearchBar, TextCategories } from '../../molecules';
import { useBreadContext } from '@/adapters/shared/context/breadCrumb';

import "./bar.scss";


export interface BarProps {
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
            <div className="container search-container">
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
