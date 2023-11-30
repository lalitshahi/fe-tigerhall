import React, { ReactNode, useState } from "react";

export const SearchContext = React.createContext({
  searchTerm: "",
  setSearchTerm: (term: string) => {},
});

function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");

  const value = { searchTerm, setSearchTerm };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export { SearchProvider };
