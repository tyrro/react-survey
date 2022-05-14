import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { buildSurveyQuestionsWithAnswers } from '../Details/buildSurveyQuestionsWithAnswers';

export const textareaTestIds = {
  base: 'textarea',
  inputField: 'textarea__input-field',
};

const Textarea = ({ id, answers, setSurveyQuestionsWithAnswers }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue('');
  }, [id]);

  const onInputValueChange = value => {
    const surveyQuestionsWithAnswers = buildSurveyQuestionsWithAnswers(id, answers[0].id, value);
    setInputValue(value);
    setSurveyQuestionsWithAnswers(surveyQuestionWithAnswer => {
      surveyQuestionWithAnswer = surveyQuestionWithAnswer.filter(response => response.id !== id);
      return [...surveyQuestionWithAnswer, surveyQuestionsWithAnswers];
    });
  };

  return (
    <div className="h-[112px]" data-test-id={textareaTestIds.base}>
      <textarea
        className="w-full h-full bg-dark text-white text-base-large rounded-xl px-3 pt-[19px] pb-[15px] mt-16 focus:outline-none focus:shadow-none"
        value={inputValue}
        onChange={event => onInputValueChange(event.target.value)}
        data-test-id={textareaTestIds.inputField}
      />
    </div>
  );
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  setSurveyQuestionsWithAnswers: PropTypes.func.isRequired,
};

export default Textarea;
