import { createContext, useContext, useState } from "react";

// Search context
const SearchContext = createContext();

// Custom Hook
export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};
