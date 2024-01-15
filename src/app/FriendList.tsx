import { graphql, getFragmentData, FragmentType } from '@/generated/gql';
import { UserListItem } from './UserListItem';

/*
 * "fragment FriendList" generates:
 *   1. FriendListFragment
 *   2. FriendListFragmentDoc
 */
const FriendListFragment = graphql(/* GraphQL */ `
  fragment FriendList on User {
    friends {
      id
      ...UserListItem
    }
  }
`);

type FriendListProps = {
  user: FragmentType<typeof FriendListFragment>;
};

export function FriendList(props: FriendListProps) {
  const user = getFragmentData(FriendListFragment, props.user);
  return (
    <div className="px-6">
      <h2 className="font-semibold">Friends</h2>
      <ul className="divide-y">
        {user.friends.map((friend) => (
          <UserListItem key={friend.id} userSummary={friend} />
        ))}
      </ul>
    </div>
  );
}
