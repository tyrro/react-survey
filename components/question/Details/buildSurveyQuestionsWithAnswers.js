export const buildSurveyQuestionsWithAnswers = (questionId, answerId, textInputValue) => {
  let answerObject;

  if (textInputValue) {
    answerObject = {
      id: answerId,
      answer: textInputValue,
    };
  } else {
    answerObject = {
      id: answerId,
    };
  }

  return {
    id: questionId,
    answers: [answerObject],
  };
};
