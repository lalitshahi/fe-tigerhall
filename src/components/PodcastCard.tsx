import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  HStack,
  Box,
} from "@chakra-ui/react";
import { theme } from "../theme";
import { Share2 as Share, Bookmark, Clock, Headphones } from "react-feather";
import CardTopLeftBadge from "./CardTopLeftBadge";
import ProgressBar from "./ProgressBar";

interface Props {
  categoryName: string;
  title: string;
  userName: string;
  company: string;
  length: number;
  imageUri: string | undefined;
}
export default function PodcastCard(props: Props) {
  const { categoryName, title, userName, company, length, imageUri } = props;
  const urlObj = new URL(imageUri || "");

  const newImageUri = `${urlObj.origin}/resize/1048x,960x${urlObj.pathname}`;

  return (
    <Card maxW="sm" borderRadius={"8px"} bg={"white"} minW="xs" w={"100%"}>
      <CardBody padding={0}>
        <Box pos={"relative"} maxW="sm" minH={"200px"}>
          <CardTopLeftBadge />
          <Image
            src={newImageUri}
            alt={`${categoryName}-${title}`}
            borderRadius="lg"
            borderBottomRadius={0}
            fallbackSrc="https://via.placeholder.com/250"
            width={"100%"}
            height={"204px"}
            fit={"cover"}
          />
          <HeadphoneIcon />
          <TotalTimeBox length={length} />
          <ProgressBar />
        </Box>
        <Stack spacing={"8px"} textAlign={"left"} p={"8px"} pb={0} bg={"white"}>
          <Stack spacing={"2px"}>
            <Heading
              color={"grey.700"}
              fontWeight={"normal"}
              textTransform={"uppercase"}
              fontSize={12}
            >
              {categoryName}
            </Heading>
            <Heading
              size="md"
              fontSize={16}
              color={"black"}
              lineHeight={"19.2px"}
              letterSpacing={"0.24px"}
            >
              {title}
            </Heading>
          </Stack>
          <Stack spacing={"2px"}>
            <Text
              fontSize={"12px"}
              color={"grey.800"}
              fontWeight={500}
              lineHeight={"14px"}
              letterSpacing={"0.18px"}
            >
              {userName}
            </Text>
            <Text
              fontSize={"12px"}
              letterSpacing={"0.18px"}
              fontWeight={700}
              color={"grey.700"}
              lineHeight={"14px"}
            >
              {company || "Company Name"}
            </Text>
          </Stack>
        </Stack>
      </CardBody>
      <CardFooter
        justifyContent={"end"}
        p={"8px"}
        pb={"12px"}
        bg={"white"}
        borderBottomRadius={"8px"}
      >
        <HStack gap={"12px"}>
          <Share color={theme.colors.brand.primary} size={18} />
          <Bookmark color={theme.colors.brand.primary} size={18} />
        </HStack>
      </CardFooter>
    </Card>
  );
}

const HeadphoneIcon = () => (
  <Box
    pos={"absolute"}
    bg={"brand.primary"}
    p={"5px"}
    bottom={"10px"}
    left={"8px"}
    borderRadius={"50%"}
  >
    <Headphones color={"white"} size={14} />
  </Box>
);

const TotalTimeBox = ({ length }: { length: number }) => (
  <HStack
    pos={"absolute"}
    bg={"transparentBlack"}
    px={"8px"}
    py={"4px"}
    bottom={"10px"}
    right={"8px"}
    borderRadius={"100px"}
    gap={"4px"}
  >
    <Clock color={"white"} size={12} />
    <Text fontSize={12} fontWeight={700} color={"white"}>
      {`${length}m`}
    </Text>
  </HStack>
);
