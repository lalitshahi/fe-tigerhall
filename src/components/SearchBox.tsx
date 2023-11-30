import {
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { Search } from "react-feather";
import { theme } from "../theme";
import { useRef, useState } from "react";
import { debounce } from "lodash";
import { useSearchContext } from "../hooks/useSearchContext";

const SearchBox = () => {
  const bg = useColorModeValue("grey.200", "grey.900");
  const color = useColorModeValue(theme.colors.grey[900], "white");
  const { setSearchTerm } = useSearchContext();
  const [searchText, setSearchText] = useState("");

  const debouncedSearch = useRef(
    debounce((searchText: string) => setSearchTerm(searchText), 300)
  ).current;

  const searchQueryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Search color={color} />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search Podcasts..."
        bg={bg}
        borderColor={"gray.700"}
        onChange={searchQueryHandler}
        value={searchText}
      />
    </InputGroup>
  );
};

export default SearchBox;
