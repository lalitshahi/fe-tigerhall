import {
  Card,
  Box,
  HStack,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Card maxW="sm" borderRadius={"8px"} w={"100%"} minW={"xs"}>
      <Box borderRadius={"8px"} overflow={"hidden"}>
        <SkeletonText
          mt="0"
          noOfLines={1}
          spacing="4"
          skeletonHeight="200"
          borderRadius={"8px"}
          speed={2}
        />
        <Box p={"8px"}>
          <SkeletonText
            mt="4"
            noOfLines={2}
            spacing="4"
            skeletonHeight="3"
            borderRadius={"8px"}
            speed={2}
          />
          <SkeletonText
            mt="4"
            width={50}
            noOfLines={2}
            spacing="4"
            skeletonHeight="3"
            borderRadius={"8px"}
            speed={2}
          />
        </Box>
        <HStack justifyContent={"end"} p={"8px"}>
          <SkeletonCircle size="5" speed={2} />
          <SkeletonCircle size="5" speed={2} />
        </HStack>
      </Box>
    </Card>
  );
};

export default CardSkeleton;
