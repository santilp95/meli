'use client';
import {
  useMemo,
  PropsWithChildren,
  FC,
  useState,
  createContext,
  useContext,
} from "react";

interface ContextProps {
    categories: string[];
    setCategories: (categories: string[]) => void;
}

export const BreadCrumbContext = createContext<ContextProps>({
    categories: [],
    setCategories: () => {},
});

export type BreadCrumbState = string[]

export const BreadCrumbProvider: FC<PropsWithChildren> = ({ children }) => {
  const [categories, setCategories] = useState<string[]>([]);

  const setData = (data: string[]) => {
    setCategories(data);
  };

  const value = useMemo(() => ({ categories, setCategories: setData }), [categories]);

  return (
    <BreadCrumbContext.Provider value={value}>
      {children}
    </BreadCrumbContext.Provider>
  );
};

export const useBreadContext = () => {
  const context = useContext(BreadCrumbContext);

  if (context === undefined) {
    throw new Error('useBreadContext must be used within a BreadCrumbProvider');
  }

  return context;
};