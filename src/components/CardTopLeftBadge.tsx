import { HStack, Text } from "@chakra-ui/react";
import { Clock } from "react-feather";
import { theme } from "../theme";

const CardTopLeftBadge = () => {
  return (
    <HStack
      pos={"absolute"}
      bg={"white"}
      p={"8px"}
      borderTopLeftRadius={"8px"}
      borderBottomRightRadius={"5px"}
    >
      <Clock color={theme.colors.tigerOrange[400]} size={14} />
      <Text color="grey.900" fontSize={12} fontWeight={700}>
        30% Completed
      </Text>
    </HStack>
  );
};

export default CardTopLeftBadge;
