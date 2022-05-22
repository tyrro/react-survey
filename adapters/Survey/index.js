import baseAdapter from 'adapters/Base';

const SurveyAdapter = () => {
  const fetchSurveys = currentPage => baseAdapter.get(`surveys?page[number]=${currentPage}`);

  const fetchSurvey = surveyId => baseAdapter.get(`surveys/${surveyId}`);

  const submitSurvey = surveyResponse => baseAdapter.post('responses', surveyResponse);

  return {
    fetchSurveys,
    fetchSurvey,
    submitSurvey,
  };
};

const surveyAdapter = SurveyAdapter();

export default surveyAdapter;
