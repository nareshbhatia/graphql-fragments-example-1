'use client';

import { graphql } from '@/generated/gql';
import { useQuery } from '@apollo/client';

const UserProfileRoute_Query = graphql(/* GraphQL */ `
  query UserProfile_Query {
    UserProfile_Query {
      id
      fullName
    }
  }
`);

export default function UserProfile() {
  const { data } = useQuery(UserProfileRoute_Query);
  const userProfile = data?.UserProfile_Query;
  if (!userProfile) return undefined;

  return (
    <div className="mx-auto max-w-3xl p-4">
      {userProfile.id} {userProfile.fullName}
    </div>
  );
}
