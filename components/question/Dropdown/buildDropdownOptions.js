export const buildDropdownOptions = (survey, answers) => {
  const dropdownOptions = [];

  answers.map(answer => {
    const answerObject = survey.included.find(includedItem => includedItem.id === answer.id);
    dropdownOptions.push({
      label: answerObject.attributes.text,
      value: answerObject.id,
    });
  });

  return dropdownOptions;
};
