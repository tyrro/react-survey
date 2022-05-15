import Rating from '../Rating';
import Textfield from '../Textfield';

export const questionComponentMapper = {
  heart: Rating,
  smiley: Rating,
  star: Rating,
  money: Rating,
  thumb: Rating,
  textfield: Textfield,
};

export const getQuestionComponentFromQuestionType = questionType => {
  return questionComponentMapper[questionType];
};
