import PropTypes from 'prop-types';
import Select from 'react-select';
import { useEffect, useState } from 'react';

import { buildSurveyQuestionsWithAnswers } from '../Details/buildSurveyQuestionsWithAnswers';
import { buildDropdownOptions } from './buildDropdownOptions';
import { dropdownStyles } from './dropdownStyles';

export const dropdownTestIds = {
  base: 'dropdown',
  option: 'dropdown__option',
};

const Dropdown = ({ id, survey, answers, setSurveyQuestionsWithAnswers }) => {
  const [dropdownOptions, setDropdownOptions] = useState([]);

  useEffect(() => {
    setDropdownOptions(buildDropdownOptions(survey, answers));
  }, [id, survey, answers]);

  const onOptionSelect = answerId => {
    const surveyQuestionsWithAnswers = buildSurveyQuestionsWithAnswers(id, answerId);
    setSurveyQuestionsWithAnswers(prevSurveyQuestionWithAnswer => {
      let newSurveyQuestionWithAnswer = prevSurveyQuestionWithAnswer.slice();
      newSurveyQuestionWithAnswer = newSurveyQuestionWithAnswer.filter(response => response.id !== id);

      return [...newSurveyQuestionWithAnswer, surveyQuestionsWithAnswers];
    });
  };

  return (
    <div className="mt-16" data-test-id={dropdownTestIds.base}>
      <Select
        data-test-id={dropdownTestIds.option}
        options={dropdownOptions}
        onChange={option => onOptionSelect(option.value)}
        styles={dropdownStyles}
      />
    </div>
  );
};

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  survey: PropTypes.object.isRequired,
  answers: PropTypes.array.isRequired,
  setSurveyQuestionsWithAnswers: PropTypes.func.isRequired,
};

export default Dropdown;
