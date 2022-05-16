import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { buildSurveyQuestionsWithAnswers } from '../Details/buildSurveyQuestionsWithAnswers';
import styles from './index.module.scss';

export const ACTIVE_SLIDER_BACKGROUND = 'rgba(255, 255, 255)';
export const INACTIVE_SLIDER_BACKGROUND = 'rgba(255, 255, 255, 0.18)';

export const sliderTestIds = {
  base: 'slider',
  input: 'slider__input',
};

const Slider = ({ id, answers, setSurveyQuestionsWithAnswers }) => {
  const [currentValue, setCurrentValue] = useState(-1);
  const minValue = 0;
  const maxValue = answers.length - 1;
  const progress = `${(currentValue / maxValue) * 100}%`;

  useEffect(() => {
    setCurrentValue(-1);
  }, [id]);

  const onSliderChange = value => {
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
    <div className="h-14 flex items-center mt-16" data-test-id={sliderTestIds.base}>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={currentValue}
        className={styles.slider}
        onChange={event => onSliderChange(event.target.value)}
        style={inputStyle}
        data-test-id={sliderTestIds.input}
      />
    </div>
  );
};

Slider.propTypes = {
  id: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  setSurveyQuestionsWithAnswers: PropTypes.func.isRequired,
};

export default Slider;
