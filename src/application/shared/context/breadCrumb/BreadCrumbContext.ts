import { createContext } from 'react';

interface ContextProps {
    categories: string[];
    setCategories: (categories: string[]) => void;
}

export const BreadCrumbContext = createContext<ContextProps>({
    categories: [],
    setCategories: () => {},
});