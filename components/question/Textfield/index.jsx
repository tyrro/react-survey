import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Input from '@/components/Input';

import { buildSurveyQuestionsWithAnswers } from '../Details/buildSurveyQuestionsWithAnswers';
import { buildTextfieldData } from './buildTextfieldData';

export const textfieldTestIds = {
  base: 'textfield',
  input: 'textfield__input',
};

const Textfield = ({ id, survey, answers, setSurveyQuestionsWithAnswers }) => {
  const [textFieldData, setTextFieldData] = useState([]);

  useEffect(() => {
    setTextFieldData(buildTextfieldData(survey, answers));
  }, [id, survey, answers]);

  const onInputValueChange = (value, answerId) => {
    const surveyQuestionsWithAnswers = buildSurveyQuestionsWithAnswers(id, answerId, value);
    const newAnswerObject = surveyQuestionsWithAnswers.answers[0];

    setSurveyQuestionsWithAnswers(prevSurveyQuestionWithAnswer => {
      const newSurveyQuestionWithAnswer = prevSurveyQuestionWithAnswer.slice();
      const questionObject = newSurveyQuestionWithAnswer.find(response => response.id === id);

      if (!questionObject) {
        return [...newSurveyQuestionWithAnswer, surveyQuestionsWithAnswers];
      }

      let answerObject = questionObject.answers.find(answer => answer.id === answerId);
      if (answerObject) {
        answerObject.answer = newAnswerObject.answer;
      } else {
        questionObject.answers.push(newAnswerObject);
      }

      return newSurveyQuestionWithAnswer;
    });
  };

  return (
    <div className="mt-16" data-test-id={textfieldTestIds.base}>
      {textFieldData.map(textField => (
        <Input
          key={textField.id}
          id={textField.id}
          data-test-id={textfieldTestIds.input}
          className="h-14 mb-4 last:mb-0"
          placeholder={textField.placeholder}
          onChange={event => onInputValueChange(event.target.value, textField.id)}
        />
      ))}
    </div>
  );
};

Textfield.propTypes = {
  id: PropTypes.string.isRequired,
  survey: PropTypes.object.isRequired,
  answers: PropTypes.array.isRequired,
  setSurveyQuestionsWithAnswers: PropTypes.func.isRequired,
};

export default Textfield;
