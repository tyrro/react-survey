import Router from 'next/router';
import useSWR from 'swr';

import surveyAdapter from 'adapters/Survey';
import { authorizationHeader } from 'adapters/Base';

const fetcher = async (_url, id) => {
  try {
    return await surveyAdapter.fetchSurvey(id, authorizationHeader());
  } catch (error) {
    console.log(error);
    Router.push('/');
  }
};

export default function useSurvey(user, id) {
  const { data: profile } = useSWR(user?.isLoggedIn && id ? ['survey', id] : null, fetcher);

  return profile;
}
