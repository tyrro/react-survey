import Dropdown from '../Dropdown';
import NetPromotingScore from '../NetPromotingScore';
import Rating from '../Rating';
import Textarea from '../Textarea';

export const questionComponentMapper = {
  heart: Rating,
  smiley: Rating,
  star: Rating,
  money: Rating,
  thumb: Rating,
  dropdown: Dropdown,
  nps: NetPromotingScore,
  textarea: Textarea,
};

export const getQuestionComponentFromQuestionType = questionType => {
  return questionComponentMapper[questionType];
};
