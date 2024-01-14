import type { UserQuery, UserQueryVariables } from '@/generated/gql/graphql';
import { graphql, HttpResponse } from 'msw';

/* TODO: Temporary */
interface UserFragment {
  __typename: 'User';
  id: string;
  fullName: string;
}

const users: Record<string, UserFragment> = {
  'john.smith': {
    __typename: 'User',
    id: 'john.smith',
    fullName: 'John Smith',
  },
  'jane.smith': {
    __typename: 'User',
    id: 'jane.smith',
    fullName: 'Jane Smith',
  },
};

export const handlers = [
  graphql.query<UserQuery, UserQueryVariables>('User', ({ variables }) => {
    const { id } = variables;

    return HttpResponse.json({
      data: {
        user: users[id],
      },
    });
  }),
];
