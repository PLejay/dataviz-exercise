import { gql } from '@apollo/client';

export const TESTQUERY = gql`
  query {
    allPosts(count: 200) {
      createdAt
      likelyTopics {
        label
      }
    }
  }
`;
