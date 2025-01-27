'use client';
import {
  useReducer,
  useMemo,
  PropsWithChildren,
  FC,
} from "react";

import { breadCrumbReducer } from "./breadCrumbReducer";
import { BreadCrumbContext } from "./BreadCrumbContext";

export interface BreadCrumbState {
  categories: string[]
}

const BREAD_INITIAL_STATE: BreadCrumbState = {
  categories: []
};

export const BreadCrumbProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(breadCrumbReducer, BREAD_INITIAL_STATE);

  const setCategories = (categories: string[]) => {
    dispatch({ type: 'SET_BREADCRUMB', payload: categories });
  };


  const value = useMemo(() => ({ ...state, setCategories }), [state]);

  return (
    <BreadCrumbContext.Provider value={value}>
      {children}
    </BreadCrumbContext.Provider>
  );
};
