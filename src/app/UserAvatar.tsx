import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type UserAvatarProps = {
  avatarUrl: string;
};

export function UserAvatar({ avatarUrl }: UserAvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={avatarUrl} />
      <AvatarFallback>UN</AvatarFallback>
    </Avatar>
  );
}
