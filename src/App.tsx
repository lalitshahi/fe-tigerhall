import {
  // HStack,
  VStack,
  useColorModeValue,
  // IconButton,
} from "@chakra-ui/react";
import SearchBox from "./components/SearchBox";
import ContentList from "./containers/ContentList";
import { SearchProvider } from "./searchContext";
// import { Moon } from "react-feather";

function App() {
  const bg = useColorModeValue("backgroundLight", "backgroundDark");

  return (
    <SearchProvider>
      <VStack p={5} gap={5} minH={"100vh"} bg={bg}>
        {/* <HStack> */}
        <SearchBox />
        {/* <IconButton
            variant="outline"
            colorScheme="tigerOrange"
            aria-label="Theme Change"
            fontSize="20px"
            icon={<Moon />}
          /> */}
        {/* </HStack> */}
        <ContentList />
      </VStack>
    </SearchProvider>
  );
}

export default App;
