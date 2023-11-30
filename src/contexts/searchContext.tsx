import React, { ReactNode, useState } from "react";

type ContextType = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export const SearchContext = React.createContext<ContextType | undefined>(
  undefined
);

function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");

  const value = { searchTerm, setSearchTerm };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export { SearchProvider };
