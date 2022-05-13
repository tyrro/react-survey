export const buildSurveyQuestionsWithAnswers = (questionId, answerId) => ({
  id: questionId,
  answers: [
    {
      id: answerId,
    },
  ],
});
