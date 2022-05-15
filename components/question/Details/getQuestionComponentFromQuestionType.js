import Rating from '../Rating';
import Slider from '../Slider';
import Textfield from '../Textfield';

export const questionComponentMapper = {
  heart: Rating,
  smiley: Rating,
  star: Rating,
  money: Rating,
  thumb: Rating,
  slider: Slider,
  textfield: Textfield,
};

export const getQuestionComponentFromQuestionType = questionType => {
  return questionComponentMapper[questionType];
};
