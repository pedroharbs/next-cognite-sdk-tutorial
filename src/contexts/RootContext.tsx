import { createContext, ReactNode, useContext, useState } from 'react';

interface RootContextData {
    offset:  number;
    currentPagination:  number;
    lastPage:  number;
    loading:  boolean;
    handleCurrentPagination: (currentPage: number) => void;
    handleOffset: (offset: number) => void;
    handleLastPage: (lastPage: number) => void;
    handleLoading: (loading: boolean) => void;
}

interface RootProviderProps {
    children: ReactNode;
}

export const RootContext = createContext({} as RootContextData);

export function RootProvider({ children }: RootProviderProps) {
    const [currentPagination, setCurrentPagination] = useState(1);
    const [offset, setOffset] = useState(10);
    const [lastPage, setLastPage] = useState(0);
    const [loading, setLoading] = useState(false);

    function handleCurrentPagination(currentPage: number) {
        setCurrentPagination(currentPage);
    };

    function handleOffset(offset: number) {
        setOffset(offset);
    };

    function handleLoading(loading: boolean) {
        setLoading(loading);
    };

    function handleLastPage(lastPage: number) {
        setLastPage(lastPage);
    };

    return(
        <RootContext.Provider
            value={{
                currentPagination,
                offset,
                lastPage,
                loading,
                handleCurrentPagination,
                handleOffset,
                handleLastPage,
                handleLoading,
            }}
        >
            {children}
        </RootContext.Provider>
    )
}

export const useRoot = () => useContext(RootContext);
