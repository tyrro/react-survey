import Rating from '../Rating';
import RangeSlider from '../RangeSlider';
import Textfield from '../Textfield';

export const questionComponentMapper = {
  heart: Rating,
  smiley: Rating,
  star: Rating,
  money: Rating,
  thumb: Rating,
  slider: RangeSlider,
  textfield: Textfield,
};

export const getQuestionComponentFromQuestionType = questionType => {
  return questionComponentMapper[questionType];
};
