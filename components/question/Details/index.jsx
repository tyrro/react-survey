import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useUser from 'hooks/useUser';
import useSurvey from 'hooks/useSurvey';

export const questionDetailsTestIds = {
  base: 'question-details',
};

const QuestionDetails = ({ setBackgroundImagePath }) => {
  const router = useRouter();
  const surveyId = router.query.id;
  const { user } = useUser();
  const survey = useSurvey(user, surveyId);

  useEffect(() => {
    if (survey) {
      setBackgroundImagePath(survey.data.attributes.coverImageUrl);
    }
  }, [survey, setBackgroundImagePath]);

  if (!survey) {
    return null;
  }

  return <div data-test-id={questionDetailsTestIds.base}>TODO: Question rendering goes here</div>;
};

QuestionDetails.propTypes = {
  setBackgroundImagePath: PropTypes.func.isRequired,
};

export default QuestionDetails;
