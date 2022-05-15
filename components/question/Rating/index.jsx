import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { buildSurveyQuestionsWithAnswers } from '../Details/buildSurveyQuestionsWithAnswers';
import { emojiMapper } from './emojiMapper';

export const ratingTestIds = {
  base: 'rating',
  emoji: 'rating__emoji',
};

const Rating = ({ id, type, answers, setSurveyQuestionsWithAnswers }) => {
  const [currentRating, setCurrentRating] = useState(-1);
  const emoji = emojiMapper[type];
  const totalEmojis = [...Array(answers.length)];

  useEffect(() => {
    setCurrentRating(-1);
  }, [id]);

  const onRatingChange = index => {
    const surveyQuestionsWithAnswers = buildSurveyQuestionsWithAnswers(id, answers[index].id);
    setCurrentRating(index);
    setSurveyQuestionsWithAnswers(prevSurveyQuestionWithAnswer => {
      let newSurveyQuestionWithAnswer = prevSurveyQuestionWithAnswer.slice();
      newSurveyQuestionWithAnswer = newSurveyQuestionWithAnswer.filter(response => response.id !== id);

      return [...newSurveyQuestionWithAnswer, surveyQuestionsWithAnswers];
    });
  };

  return (
    <div className="w-[215px] m-auto mt-8" data-test-id={ratingTestIds.base}>
      <ul className="flex">
        {totalEmojis.map((_key, index) => (
          <li
            className={classNames('cursor-pointer text-base-xxxl tracking-[16px]', { 'opacity-50': index > currentRating })}
            key={index}
            onClick={() => onRatingChange(index)}
            data-test-id={ratingTestIds.emoji}
          >
            {emoji}
          </li>
        ))}
      </ul>
    </div>
  );
};

Rating.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  setSurveyQuestionsWithAnswers: PropTypes.func.isRequired,
};

export default Rating;
