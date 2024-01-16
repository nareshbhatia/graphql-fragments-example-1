import type {
  UserProfileQuery,
  UserProfileQueryVariables,
  User,
  UserSummary,
} from '@/generated/gql/graphql';
import { graphql, HttpResponse } from 'msw';

function toUser(summary: UserSummary, friends: UserSummary[]): User {
  const { __typename, ...userFields } = summary;
  return {
    __typename: 'User',
    ...userFields,
    friends,
  };
}

const nareshBhatiaSummary: UserSummary = {
  __typename: 'UserSummary',
  id: 'naresh.bhatia',
  fullName: 'Naresh Bhatia',
  avatarUrl: 'http://github.com/nareshbhatia.png',
  location: 'Boston',
};

const adamWathanSummary: UserSummary = {
  __typename: 'UserSummary',
  id: 'adam.wathan',
  fullName: 'Adam Wathan',
  avatarUrl: 'https://github.com/adamwathan.png',
  location: 'Ontario',
};

const danAbramovSummary: UserSummary = {
  __typename: 'UserSummary',
  id: 'dan.abramov',
  fullName: 'Dan Abramov',
  avatarUrl: 'https://github.com/gaearon.png',
  location: 'London',
};

const kentDoddsSummary: UserSummary = {
  __typename: 'UserSummary',
  id: 'kent.dodds',
  fullName: 'Kent C. Dodds',
  avatarUrl: 'https://github.com/kentcdodds.png',
  location: 'Salt Lake City',
};

const leeRobinsonSummary: UserSummary = {
  __typename: 'UserSummary',
  id: 'lee.robinson',
  fullName: 'Lee Robinson',
  avatarUrl: 'https://github.com/leerob.png',
  location: 'Des Moines',
};

const shadcnSummary: UserSummary = {
  __typename: 'UserSummary',
  id: 'shadcn',
  fullName: 'Shadcn',
  avatarUrl: 'http://github.com/shadcn.png',
  location: 'San Francisco',
};

const users: Record<string, User> = {
  'naresh.bhatia': toUser(nareshBhatiaSummary, [
    adamWathanSummary,
    danAbramovSummary,
    kentDoddsSummary,
    leeRobinsonSummary,
    shadcnSummary,
  ]),
  'adam.wathan': toUser(adamWathanSummary, [
    nareshBhatiaSummary,
    shadcnSummary,
  ]),
  'dan.abramov': toUser(danAbramovSummary, [
    nareshBhatiaSummary,
    shadcnSummary,
  ]),
  'kent.dodds': toUser(kentDoddsSummary, [nareshBhatiaSummary, shadcnSummary]),
  'lee.robinson': toUser(leeRobinsonSummary, [
    nareshBhatiaSummary,
    shadcnSummary,
  ]),
  shadcn: toUser(shadcnSummary, [danAbramovSummary, nareshBhatiaSummary]),
};

export const handlers = [
  graphql.query<UserProfileQuery, UserProfileQueryVariables>(
    'userProfile',
    ({ variables }) => {
      const { id } = variables;

      return HttpResponse.json({
        data: {
          user: users[id],
        },
      });
    },
  ),
];
