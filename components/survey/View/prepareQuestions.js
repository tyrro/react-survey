export const prepareQuestions = surveyResponse => {
  let questions = surveyResponse.data.relationships.questions.data;
  const included = surveyResponse.included;

  questions.forEach(question => {
    const questionDetails = included.find(surveyResponse => surveyResponse.id === question.id);

    question['type'] = questionDetails.attributes.displayType;
    question['pick'] = questionDetails.attributes.pick;
    question['text'] = questionDetails.attributes.text;
    question['answers'] = questionDetails.relationships.answers.data;
  });

  return questions;
};
