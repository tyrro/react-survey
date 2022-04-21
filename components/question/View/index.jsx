import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { prepareQuestions } from '@/components/survey/View/prepareQuestions';

import useUser from 'hooks/useUser';
import useSurvey from 'hooks/useSurvey';

const Question = ({ setBackgroundImagePath }) => {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useUser();
  const survey = useSurvey(user, id);

  useEffect(() => {
    if (survey) {
      setBackgroundImagePath(survey.data.attributes.coverImageUrl);
    }
  });

  if (!survey) {
    return null;
  }

  return <div>Hello World</div>;
};

Question.propTypes = {
  setBackgroundImagePath: PropTypes.func.isRequired,
};

export default Question;
