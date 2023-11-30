import { VStack, useColorModeValue } from "@chakra-ui/react";
import SearchBox from "./components/SearchBox";
import ContentList from "./containers/ContentList";
import { SearchProvider } from "./contexts/searchContext";

function App() {
  const bg = useColorModeValue("backgroundLight", "backgroundDark");

  return (
    <SearchProvider>
      <VStack p={5} gap={5} minH={"100vh"} bg={bg}>
        <SearchBox />
        <ContentList />
      </VStack>
    </SearchProvider>
  );
}

export default App;
