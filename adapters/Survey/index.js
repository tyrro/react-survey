import baseAdapter from 'adapters/Base';

const SurveyAdapter = () => {
  const fetchSurveys = (currentPage, authorizationHeader) =>
    baseAdapter.get(`surveys?page[number]=${currentPage}`, {
      headers: authorizationHeader,
    });

  const fetchSurvey = (surveyId, authorizationHeader) =>
    baseAdapter.get(`surveys/${surveyId}`, {
      headers: authorizationHeader,
    });

  return {
    fetchSurveys,
    fetchSurvey,
  };
};

const surveyAdapter = SurveyAdapter();

export default surveyAdapter;
