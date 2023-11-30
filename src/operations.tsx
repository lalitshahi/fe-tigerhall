import { gql } from "@apollo/client";

export const GET_CONTENT_CARDS = gql`
  query GetContentCards(
    $limit: Int = 20
    $keywords: String = ""
    $types: ContentType! = PODCAST
  ) {
    contentCards(
      filter: { limit: $limit, keywords: $keywords, types: [$types] }
    ) {
      edges {
        ... on Podcast {
          id
          name
          length
          timeSpentOnByUsers
          image {
            ...Image
          }
          categories {
            ...Category
          }
          experts {
            ...Expert
          }
        }
      }
    }
  }

  fragment Image on Image {
    uri
  }

  fragment Category on Category {
    name
  }

  fragment Expert on Expert {
    firstName
    lastName
    title
    company
  }
`;
