import {
  HStack,
  IconButton,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import SearchBox from "./components/SearchBox";
import ContentList from "./containers/ContentList";
import { SearchProvider } from "./contexts/searchContext";
import { Moon, Sun } from "react-feather";

function App() {
  const bg = useColorModeValue("backgroundLight", "backgroundDark");
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <SearchProvider>
      <VStack p={5} gap={5} minH={"100vh"} bg={bg}>
        <HStack w={"100%"}>
          <SearchBox />
          <IconButton
            variant="outline"
            colorScheme="tigerOrange"
            aria-label={
              colorMode === "light"
                ? "Switch to Dark Theme"
                : "Switch to Light Theme"
            }
            fontSize="20px"
            icon={colorMode === "light" ? <Moon /> : <Sun />}
            onClick={toggleColorMode}
          />
        </HStack>
        <ContentList />
      </VStack>
    </SearchProvider>
  );
}

export default App;
