import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { buildSurveyQuestionsWithAnswers } from '../Details/buildSurveyQuestionsWithAnswers';

export const netPromotingScoreTestIds = {
  base: 'nps',
  score: 'nps__score',
  unlikelyText: 'nps__unlikely-text',
  likelyText: 'nps__likely-text',
};

const NetPromotingScore = ({ id, answers, setSurveyQuestionsWithAnswers, helpText }) => {
  const [currentScore, setCurrentScore] = useState(-1);
  const totalScore = [...Array(answers.length - 1)];

  useEffect(() => {
    setCurrentScore(-1);
  }, [id]);

  const OnScoreChange = index => {
    const surveyQuestionsWithAnswers = buildSurveyQuestionsWithAnswers(id, answers[index + 1].id);
    setCurrentScore(index);
    setSurveyQuestionsWithAnswers(surveyQuestionWithAnswer => {
      surveyQuestionWithAnswer = surveyQuestionWithAnswer.filter(response => response.id !== id);
      return [...surveyQuestionWithAnswer, surveyQuestionsWithAnswers];
    });
  };

  return (
    <div className="w-[335px] m-auto mt-16" data-test-id={netPromotingScoreTestIds.base}>
      <ul aria-label={helpText} className="h-14 flex justify-center mb-[15px]">
        {totalScore.map((_key, index) => (
          <li
            className={classNames(
              'w-full h-full flex justify-center items-center cursor-pointer font-extrabold text-white text-base-xl border-[0.5px] border-white first:rounded-l-[10px] last:rounded-r-[10px]',
              { 'opacity-50': index > currentScore },
            )}
            key={index}
            onClick={() => OnScoreChange(index)}
            data-test-id={netPromotingScoreTestIds.score}
          >
            {index + 1}
          </li>
        ))}
      </ul>
      <div className="flex justify-between font-extrabold text-base-large -tracking-[0.41px]">
        <div className="text-white/50" data-test-id={netPromotingScoreTestIds.unlikelyText}>
          Not at all Likely
        </div>
        <div className="text-white" data-test-id={netPromotingScoreTestIds.likelyText}>
          Extremely Likely
        </div>
      </div>
    </div>
  );
};

NetPromotingScore.propTypes = {
  id: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  setSurveyQuestionsWithAnswers: PropTypes.func.isRequired,
  helpText: PropTypes.string,
};

export default NetPromotingScore;
