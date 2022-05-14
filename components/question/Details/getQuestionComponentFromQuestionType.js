import NetPromotingScore from '../NetPromotingScore';
import Rating from '../Rating';
import Textarea from '../Textarea';

export const questionComponentMapper = {
  heart: Rating,
  smiley: Rating,
  star: Rating,
  money: Rating,
  thumb: Rating,
  textarea: Textarea,
  nps: NetPromotingScore,
};

export const getQuestionComponentFromQuestionType = questionType => {
  return questionComponentMapper[questionType];
};
