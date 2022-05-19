import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { buildSurveyQuestionsWithAnswers } from '../Details/buildSurveyQuestionsWithAnswers';
import styles from './index.module.scss';

export const ACTIVE_SLIDER_BACKGROUND = 'rgba(255, 255, 255)';
export const INACTIVE_SLIDER_BACKGROUND = 'rgba(255, 255, 255, 0.18)';

export const rangeSliderTestIds = {
  base: 'range-slider',
  input: 'range-slider__input',
};

const RangeSlider = ({ id, answers, setSurveyQuestionsWithAnswers, helpText }) => {
  const [currentValue, setCurrentValue] = useState(-1);
  const minValue = 0;
  const maxValue = answers.length - 1;
  const progress = `${(currentValue / maxValue) * 100}%`;

  useEffect(() => {
    setCurrentValue(-1);
  }, [id]);

  const onRangeValueChange = value => {
    const surveyQuestionsWithAnswers = buildSurveyQuestionsWithAnswers(id, answers[value].id);
    setCurrentValue(value);
    setSurveyQuestionsWithAnswers(prevSurveyQuestionWithAnswer => {
      let newSurveyQuestionWithAnswer = prevSurveyQuestionWithAnswer.slice();
      newSurveyQuestionWithAnswer = newSurveyQuestionWithAnswer.filter(response => response.id !== id);

      return [...newSurveyQuestionWithAnswer, surveyQuestionsWithAnswers];
    });
  };

  const inputStyle = {
    background: `linear-gradient(to right, ${ACTIVE_SLIDER_BACKGROUND} 0% ${progress}, ${INACTIVE_SLIDER_BACKGROUND} ${progress} 100%)`,
  };

  return (
    <div className="h-14 flex items-center mt-16" aria-label={helpText} data-test-id={rangeSliderTestIds.base}>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={currentValue}
        className={styles.rangeSlider}
        onChange={event => onRangeValueChange(event.target.value)}
        style={inputStyle}
        data-test-id={rangeSliderTestIds.input}
      />
    </div>
  );
};

RangeSlider.propTypes = {
  id: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  setSurveyQuestionsWithAnswers: PropTypes.func.isRequired,
  helpText: PropTypes.string,
};

export default RangeSlider;
