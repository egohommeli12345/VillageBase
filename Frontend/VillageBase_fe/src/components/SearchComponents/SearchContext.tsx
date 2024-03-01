import { ReactNode, createContext, useContext, useState } from "react";

type SearchContextType = {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    SearchShowState: boolean;
    setSearchShowState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchContext = createContext<SearchContextType>({
    searchQuery: "",
    setSearchQuery: () => {},
    SearchShowState: false,
    setSearchShowState: () => {},
});

export const useSearch = () => useContext(SearchContext);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [SearchShowState, setSearchShowState] = useState(false);

    return (
        <SearchContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                SearchShowState,
                setSearchShowState,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
