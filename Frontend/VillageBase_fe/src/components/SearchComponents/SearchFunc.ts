const SearchItems = (search: string, searchId: string) => {
    const element = document.getElementById(searchId);

    return element?.textContent?.toLowerCase().includes(search.toLowerCase());
};

export default SearchItems;
