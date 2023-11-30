import { Box, VStack, Text } from "@chakra-ui/react";
import PodcastCard from "../components/PodcastCard";
import { NetworkStatus, useQuery } from "@apollo/client";
import { GET_CONTENT_CARDS } from "../operations";
import CardSkeleton from "../components/CardSkeleton";
import { ContentType, Podcast } from "../gql/graphql";
import { useEffect } from "react";
import { range } from "lodash";
import { useSearchContext } from "../hooks/useSearchContext";

const ContentList = () => {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_CONTENT_CARDS,
    {
      notifyOnNetworkStatusChange: true,
    }
  );

  const { searchTerm } = useSearchContext();

  useEffect(() => {
    refetch({
      limit: 40,
      keywords: searchTerm,
      types: ContentType.Podcast,
    });
  }, [searchTerm, refetch]);

  const edges = data?.contentCards?.edges || [];

  if (error) {
    return (
      <VStack>
        <Text>Something is not right...</Text>
      </VStack>
    );
  }

  if (!loading && edges.length === 0 && searchTerm) {
    return (
      <VStack>
        <Text>No content matching the search term...</Text>
      </VStack>
    );
  }

  return loading || networkStatus === NetworkStatus.refetch ? (
    <Box gap={5} display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
      {range(8).map((count) => (
        <CardSkeleton key={count} />
      ))}
    </Box>
  ) : (
    <Box gap={5} display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
      {edges.map((content: Podcast) => (
        <PodcastCard
          key={content.id}
          categoryName={content.categories[0]?.name}
          title={content.name}
          userName={`${content?.experts[0]?.firstName} ${content?.experts[0]?.lastName}`}
          company={`${content?.experts[0]?.company}`}
          length={content?.length}
          imageUri={content?.image?.uri}
        />
      ))}
    </Box>
  );
};

export default ContentList;
