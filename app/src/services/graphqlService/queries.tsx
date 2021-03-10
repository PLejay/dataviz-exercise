import { gql } from '@apollo/client';

export const TESTQUERY = gql`
  query {
    allPosts(count: 500) {
      createdAt
      likelyTopics {
        label
      }
    }
  }
`;
