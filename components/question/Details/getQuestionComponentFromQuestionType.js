import Rating from '../Rating';

export const questionComponentMapper = {
  heart: Rating,
  smiley: Rating,
  star: Rating,
  money: Rating,
  thumb: Rating,
};

export const getQuestionComponentFromQuestionType = questionType => {
  return questionComponentMapper[questionType];
};
