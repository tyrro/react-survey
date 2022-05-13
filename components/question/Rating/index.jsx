import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { buildSurveyResponse } from '../Details/buildSurveyResponse';
import { emojiMapper } from './emojiMapper';

export const ratingTestIds = {
  base: 'rating',
  emoji: 'rating__emoji',
};

const Rating = ({ id, type, answers, setSurveyResponse }) => {
  const [currentRating, setCurrentRating] = useState();
  const emoji = emojiMapper[type];
  const totalEmojis = [...Array(answers.length)];

  useEffect(() => {
    setCurrentRating();
  }, [id]);

  const onRatingChange = index => {
    const newSurveyResponse = buildSurveyResponse(id, answers[index].id);
    setCurrentRating(index);
    setSurveyResponse(surveyResponse => {
      surveyResponse = surveyResponse.filter(response => response.id !== id);
      return [...surveyResponse, newSurveyResponse];
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
  setSurveyResponse: PropTypes.func.isRequired,
};

export default Rating;
