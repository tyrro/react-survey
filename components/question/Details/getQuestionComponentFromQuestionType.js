import Dropdown from '../Dropdown';
import NetPromotingScore from '../NetPromotingScore';
import RangeSlider from '../RangeSlider';
import Rating from '../Rating';
import ScrollingSelect from '../ScrollingSelect';
import Textarea from '../Textarea';
import Textfield from '../Textfield';

export const questionComponentMapper = {
  heart: Rating,
  smiley: Rating,
  star: Rating,
  money: Rating,
  thumb: Rating,
  dropdown: Dropdown,
  nps: NetPromotingScore,
  slider: RangeSlider,
  choice: ScrollingSelect,
  textarea: Textarea,
  textfield: Textfield,
};

export const getQuestionComponentFromQuestionType = questionType => {
  return questionComponentMapper[questionType];
};
