import { useEffect, useState } from 'react';

import surveyAdapter from 'adapters/Survey';
import { authorizationHeader } from 'adapters/Base';

export default function useSurveys(user) {
  const [surveys, setSurveys] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const fetchSurveys = async () => {
    const response = await surveyAdapter.fetchSurveys(currentPage + 1, authorizationHeader());
    const newSurveys = [...surveys, ...response.data];
    setSurveys(newSurveys);
    setCurrentPage(response.meta.page);
    setTotalPages(response.meta.pages);
  };

  useEffect(() => {
    if (!user?.isLoggedIn) {
      return;
    }

    if (currentPage < totalPages) {
      fetchSurveys();
    }
  }, [user, currentPage, totalPages]);

  return surveys;
}
