import Button from '@/components/Button';

export const surveySubmitTestIds = {
  base: 'survey-submit',
};

const SurveySubmit = ({ surveyId, surveyResponse }) => {
  return (
    <div className="w-[120px] fixed bottom-0 right-0 mb-8 mr-8">
      <Button type="submit" size="large" data-test-id={surveySubmitTestIds.base}>
        <div className="pt-1">Submit</div>
      </Button>
    </div>
  );
};

export default SurveySubmit;
