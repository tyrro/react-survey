import useSWR from 'swr';

import profileAdapter from 'adapters/Profile';

const fetcher = async () => {
  const response = await profileAdapter.fetchUser();
  const { name, avatarUrl } = response?.data?.attributes;

  return { name, avatarUrl };
};

export default function useProfile(user) {
  const { data: profile } = useSWR(user?.isLoggedIn ? 'profile' : null, fetcher);

  return profile;
}
