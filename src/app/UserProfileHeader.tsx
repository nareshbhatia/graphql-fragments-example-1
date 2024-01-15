import { graphql, useFragment, FragmentType } from '@/generated/gql';
import { UserAvatar } from './UserAvatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

/*
 * "fragment UserProfileHeader" generates:
 *   1. UserProfileHeaderFragment
 *   2. UserProfileHeaderFragmentDoc
 */
const UserProfileHeaderFragment = graphql(/* GraphQL */ `
  fragment UserProfileHeader on User {
    fullName
    location
    avatarUrl
  }
`);

type UserProfileHeaderProps = {
  user: FragmentType<typeof UserProfileHeaderFragment>;
};

export function UserProfileHeader(props: UserProfileHeaderProps) {
  const user = useFragment(UserProfileHeaderFragment, props.user);
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>{user.fullName}</CardTitle>
          <CardDescription>{user.location}</CardDescription>
        </div>
        <UserAvatar avatarUrl={user.avatarUrl} />
      </CardHeader>
    </Card>
  );
}
