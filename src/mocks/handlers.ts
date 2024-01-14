import type {
  UserProfile_QueryQuery,
  UserProfile_QueryQueryVariables,
} from '@/generated/gql/graphql';
import { graphql, HttpResponse } from 'msw';

export const handlers = [
  graphql.query<UserProfile_QueryQuery, UserProfile_QueryQueryVariables>(
    'UserProfile_Query',
    () =>
      HttpResponse.json({
        data: {
          UserProfile_Query: {
            __typename: 'User',
            id: 'john.smith',
            fullName: 'John Smith',
          },
        },
      }),
  ),
];
