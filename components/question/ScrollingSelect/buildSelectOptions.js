export const buildSelectOptions = (survey, answers) => {
  const selectOptions = [];

  answers.map(answer => {
    const answerObject = survey.included.find(includedItem => includedItem.id === answer.id);
    selectOptions.push({
      label: answerObject.attributes.text,
      value: answerObject.id,
      selected: false,
    });
  });

  return selectOptions;
};
