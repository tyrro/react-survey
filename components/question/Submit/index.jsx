import PropTypes from 'prop-types';

import Button from '@/components/Button';

export const surveySubmitTestIds = {
  base: 'survey-submit',
};

const SurveySubmit = ({ surveyId, surveyResponse, setIsSurveySubmitted }) => {
  return (
    <div className="w-[120px] fixed bottom-0 right-0 mb-8 mr-8">
      <Button type="submit" size="large" data-test-id={surveySubmitTestIds.base} onClick={() => setIsSurveySubmitted(true)}>
        <div className="pt-1">Submit</div>
      </Button>
    </div>
  );
};

SurveySubmit.propTypes = {
  surveyId: PropTypes.string.isRequired,
  surveyResponse: PropTypes.array.isRequired,
  setIsSurveySubmitted: PropTypes.func.isRequired,
};

export default SurveySubmit;
