import useSWR from 'swr';

export default function useProfile(user) {
  const { data: profile } = useSWR(user?.isLoggedIn ? '/api/profile' : null);

  return profile;
}
