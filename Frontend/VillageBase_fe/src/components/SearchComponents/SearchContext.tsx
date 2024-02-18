import { ReactNode, createContext, useContext, useState } from "react";

type SearchContextType = {
    data: string[];
    setData: React.Dispatch<React.SetStateAction<string[]>>;
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    SearchShowState: boolean;
    setSearchShowState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchContext = createContext<SearchContextType>({
    data: [],
    setData: () => {},
    searchQuery: "",
    setSearchQuery: () => {},
    SearchShowState: false,
    setSearchShowState: () => {},
});

export const useSearch = () => useContext(SearchContext);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [data, setData] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [SearchShowState, setSearchShowState] = useState(false);

    return (
        <SearchContext.Provider
            value={{
                data,
                setData,
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
