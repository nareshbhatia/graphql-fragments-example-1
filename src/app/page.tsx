'use client';

import { graphql } from '@/generated/gql';
import { useQuery } from '@apollo/client';
import { UserProfileHeader } from './UserProfileHeader';
import { FriendList } from './FriendList';
import Link from 'next/link';

const userId = 'naresh.bhatia';

/*
 * "query userProfile" generates:
 *   1. UserProfileQuery
 *   2. UserProfileQueryVariables
 *   3. UserProfileDocument
 */
const userProfileDocument = graphql(/* GraphQL */ `
  query userProfile($id: ID!) {
    user(id: $id) {
      id
      ...UserProfileHeader
      ...FriendList
    }
  }
`);

export default function UserProfilePage() {
  const { data } = useQuery(userProfileDocument, {
    variables: {
      id: userId,
    },
  });
  const user = data?.user;
  if (!user) return undefined;

  return (
    <div className="flex flex-col mx-auto max-w-3xl p-4 gap-6">
      <UserProfileHeader user={user} />
      <FriendList user={user} />
      <Link href="/hello">
        <span className="px-6 text-sm font-semibold leading-6">
          Say Hello &gt;
        </span>
      </Link>
    </div>
  );
}
