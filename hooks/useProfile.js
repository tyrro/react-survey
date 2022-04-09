import useSWR from 'swr';

import profileAdapter from 'adapters/Profile';
import { authorizationHeader } from 'adapters/Base';

const fetcher = async () => {
  const {
    data: { attributes },
  } = await profileAdapter.fetchUser(authorizationHeader());

  const { name, avatarUrl } = attributes;
  return { name, avatarUrl };
};

export default function useProfile(user) {
  const { data: profile } = useSWR(user?.isLoggedIn ? 'profile' : null, fetcher);

  return profile;
}
