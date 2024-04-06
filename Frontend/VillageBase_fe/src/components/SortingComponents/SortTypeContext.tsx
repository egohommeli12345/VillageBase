// SortTypeContext.tsx
import React, { ReactNode, createContext, useContext, useState } from "react";

// Define a type for the context value
type SortTypeContextType = {
    sortType: string;
    setSortType: React.Dispatch<React.SetStateAction<string>>;
    sortKeys: string[];
    setSortKeys: React.Dispatch<React.SetStateAction<string[]>>;
    sortBy: string;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
};

// Create the context
const SortTypeContext = createContext<SortTypeContextType>({
    sortType: "default",
    setSortType: () => {}, // Default value, won't be used
    sortKeys: [],
    setSortKeys: () => {},
    sortBy: "",
    setSortBy: () => {},
});

// Export a custom hook to use the context
export const useSortType = () => useContext(SortTypeContext);

// Create a provider component
export const SortTypeProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [sortType, setSortType] = useState("default");
    const [sortKeys, setSortKeys] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState("");

    return (
        <SortTypeContext.Provider
            value={{
                sortType,
                setSortType,
                sortKeys,
                setSortKeys,
                sortBy,
                setSortBy,
            }}
        >
            {children}
        </SortTypeContext.Provider>
    );
};
