export const getQuestionsFromSurvey = survey => {
  let questions = survey.data.relationships.questions.data;
  const included = survey.included;

  questions.forEach(question => {
    const questionDetails = included.find(survey => survey.id === question.id);

    question['type'] = questionDetails.attributes.displayType;
    question['pick'] = questionDetails.attributes.pick;
    question['text'] = questionDetails.attributes.text;
    question['answers'] = questionDetails.relationships.answers.data;
  });

  return questions;
};
