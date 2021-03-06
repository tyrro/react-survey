export const getQuestionsFromSurvey = survey => {
  let questions = survey.data.relationships.questions.data;
  const includedItems = survey.included;

  questions.forEach(question => {
    const questionDetails = includedItems.find(survey => survey.id === question.id);

    question['type'] = questionDetails.attributes.displayType;
    question['pick'] = questionDetails.attributes.pick;
    question['text'] = questionDetails.attributes.text;
    question['helpText'] = questionDetails.attributes.helpText;
    question['answers'] = questionDetails.relationships.answers.data;
  });

  return questions;
};
