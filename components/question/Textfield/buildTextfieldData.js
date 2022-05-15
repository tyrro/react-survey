export const buildTextfieldData = (survey, answers) => {
  answers.map((answer, index) => {
    const answerObject = survey.included.find(includedItem => includedItem.id === answer.id);
    answers[index].placeholder = answerObject.attributes.text;
  });

  return answers;
};
