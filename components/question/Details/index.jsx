import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Image from '@/components/Image';
import SurveyQuit from '@/components/survey/Quit';
import SurveySubmit from '@/components/question/Submit';
import angleRightIcon from '@/public/angle-right.svg';
import { getQuestionsFromSurvey } from '@/components/survey/Details/getQuestionsFromSurvey';
import { getQuestionComponentFromQuestionType } from './getQuestionComponentFromQuestionType';

import useUser from 'hooks/useUser';
import useSurvey from 'hooks/useSurvey';

export const questionDetailsTestIds = {
  base: 'question-details',
  serial: 'question-details__serial',
  text: 'question-details__text',
  angleRightIcon: 'question-details__icon-next',
};

const QuestionDetails = ({ setBackgroundImagePath }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [surveyQuestionsWithAnswers, setSurveyQuestionsWithAnswers] = useState([]);
  const [isSurveySubmitted, setIsSurveySubmitted] = useState(false);

  const router = useRouter();
  const surveyId = router.query.id;
  const { user } = useUser();
  const survey = useSurvey(user, surveyId);

  useEffect(() => {
    if (survey) {
      setBackgroundImagePath(survey.data.attributes.coverImageUrl);
    }
  }, [survey, setBackgroundImagePath]);

  useEffect(() => {
    if (isSurveySubmitted) {
      setBackgroundImagePath('');
    }
  }, [isSurveySubmitted, setBackgroundImagePath]);

  if (!survey) {
    return null;
  }

  const questions = getQuestionsFromSurvey(survey);
  const surveyQuestions = questions.filter(question => question.type !== 'intro' && question.type !== 'outro');
  const currentQuestion = surveyQuestions[currentQuestionIndex];
  const currentQuestionSerial = `${currentQuestionIndex + 1} / ${surveyQuestions.length}`;
  const isLastQuestion = currentQuestionIndex + 1 === surveyQuestions.length;
  const QuestionComponent = getQuestionComponentFromQuestionType(currentQuestion.type);

  if (isSurveySubmitted) {
    return <div>TODO: Show a thank you message</div>;
  }

  const renderQuestionComponent = () =>
    QuestionComponent && (
      <QuestionComponent {...currentQuestion} survey={survey} setSurveyQuestionsWithAnswers={setSurveyQuestionsWithAnswers} />
    );

  const goToNextQuestion = () => {
    if (isLastQuestion) {
      return (
        <SurveySubmit
          surveyId={surveyId}
          surveyQuestionsWithAnswers={surveyQuestionsWithAnswers}
          setIsSurveySubmitted={setIsSurveySubmitted}
        />
      );
    }

    return (
      <div className="w-14 h-14 fixed bottom-0 right-0 mb-8 mr-8">
        <Image
          className="cursor-pointer"
          src={angleRightIcon}
          alt="next question"
          data-test-id={questionDetailsTestIds.angleRightIcon}
          onClick={() => setCurrentQuestionIndex(currentIndex => currentIndex + 1)}
        />
      </div>
    );
  };

  return (
    <>
      <div className="w-7 h-[30px] ml-auto mr-8 pt-8">
        <SurveyQuit />
      </div>
      <div
        className="w-[313px] md:w-[419px] lg:w-[702px] absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
        data-test-id={questionDetailsTestIds.base}
      >
        <div className="text-white/50 font-extrabold text-base-small mb-4" data-test-id={questionDetailsTestIds.serial}>
          {currentQuestionSerial}
        </div>
        <div className="font-extrabold text-white text-base-xxxxl" data-test-id={questionDetailsTestIds.text}>
          {currentQuestion.text}
        </div>
        {renderQuestionComponent()}
      </div>
      {goToNextQuestion()}
    </>
  );
};

QuestionDetails.propTypes = {
  setBackgroundImagePath: PropTypes.func.isRequired,
};

export default QuestionDetails;
