'use client';

import { graphql } from '@/generated/gql';
import { useQuery } from '@apollo/client';

const userId = 'john.smith';

const getUserQuery = graphql(/* GraphQL */ `
  query User($id: ID!) {
    user(id: $id) {
      id
      fullName
    }
  }
`);

export default function UserProfile() {
  const { data } = useQuery(getUserQuery, {
    variables: {
      id: userId,
    },
  });
  const user = data?.user;
  if (!user) return undefined;

  return (
    <div className="mx-auto max-w-3xl p-4">
      {user.id} {user.fullName}
    </div>
  );
}
