import { UserAvatar } from './UserAvatar';
import { graphql, useFragment, FragmentType } from '@/generated/gql';

/*
 * "fragment UserListItem" generates:
 *   1. UserListItemFragmentFragment
 *   2. UserListItemFragmentFragmentDoc
 */
const UserListItemFragment = graphql(/* GraphQL */ `
  fragment UserListItem on UserSummary {
    fullName
    avatarUrl
  }
`);

type UserListItemProps = {
  userSummary: FragmentType<typeof UserListItemFragment>;
};

export function UserListItem(props: UserListItemProps) {
  const userSummary = useFragment(UserListItemFragment, props.userSummary);
  return (
    <li className="flex items-center gap-3 py-4">
      <UserAvatar avatarUrl={userSummary.avatarUrl} /> {userSummary.fullName}
    </li>
  );
}
