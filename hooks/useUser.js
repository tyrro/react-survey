import Router from 'next/router';
import useSWR from 'swr';
import { useEffect } from 'react';

import { getToken } from 'helpers/authentication';

const fetcher = () => {
  const accessToken = getToken()?.accessToken;

  return accessToken ? { isLoggedIn: true } : { isLoggedIn: false };
};

export default function useUser({ redirectTo = '', redirectIfFound = false } = {}) {
  const { data: user, mutate: mutateUser } = useSWR('user', fetcher);

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) {
      return;
    }

    const hasRedirectButNoUser = redirectTo && !redirectIfFound && !user?.isLoggedIn;
    const hasRedirectIfFoundAndUser = redirectIfFound && user?.isLoggedIn;
    const isRedirectNeeded = hasRedirectButNoUser || hasRedirectIfFoundAndUser;

    if (isRedirectNeeded) {
      Router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo]);

  return { user, mutateUser };
}
