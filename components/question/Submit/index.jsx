import PropTypes from 'prop-types';
import Router from 'next/router';

import Button from '@/components/Button';

import surveyAdapter from 'adapters/Survey';

export const surveySubmitTestIds = {
  base: 'survey-submit',
};

const SurveySubmit = ({ surveyId, surveyQuestionsWithAnswers, setIsSurveySubmitted }) => {
  const onSubmitButtonClick = async () => {
    try {
      const surveyResponse = {
        surveyId,
        questions: surveyQuestionsWithAnswers,
      };

      await surveyAdapter.submitSurvey(surveyResponse);
      setIsSurveySubmitted(true);
    } catch (error) {
      console.log(error);
      Router.push('/');
    }
  };

  return (
    <div className="w-[120px] fixed bottom-0 right-0 mb-8 mr-8">
      <Button type="submit" size="large" data-test-id={surveySubmitTestIds.base} onClick={onSubmitButtonClick}>
        <div className="pt-1">Submit</div>
      </Button>
    </div>
  );
};

SurveySubmit.propTypes = {
  surveyId: PropTypes.string.isRequired,
  surveyQuestionsWithAnswers: PropTypes.array.isRequired,
  setIsSurveySubmitted: PropTypes.func.isRequired,
};

export default SurveySubmit;
