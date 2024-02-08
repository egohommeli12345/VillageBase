// SortTypeContext.tsx
import React, { ReactNode, createContext, useContext, useState } from "react";

// Define a type for the context value
type SortTypeContextType = {
    sortType: string;
    setSortType: React.Dispatch<React.SetStateAction<string>>;
};

// Create the context
const SortTypeContext = createContext<SortTypeContextType>({
    sortType: "default",
    setSortType: () => {}, // Default value, won't be used
});

// Export a custom hook to use the context
export const useSortType = () => useContext(SortTypeContext);

// Create a provider component
export const SortTypeProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [sortType, setSortType] = useState("default");

    return (
        <SortTypeContext.Provider value={{ sortType, setSortType }}>
            {children}
        </SortTypeContext.Provider>
    );
};
