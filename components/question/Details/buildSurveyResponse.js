export const buildSurveyResponse = (questionId, answerId) => ({
  id: questionId,
  answers: [
    {
      id: answerId,
    },
  ],
});
