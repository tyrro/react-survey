import useSWR from 'swr';

import surveyAdapter from 'adapters/Survey';
import { authorizationHeader } from 'adapters/Base';

const fetcher = async (_url, currentPage) => {
  const response = await surveyAdapter.fetchSurveys(currentPage, authorizationHeader());

  return response;
};

export default function useSurveys(user, currentPage) {
  const { data: surveys } = useSWR(user?.isLoggedIn ? ['surveys', currentPage] : null, fetcher);

  return surveys;
}
