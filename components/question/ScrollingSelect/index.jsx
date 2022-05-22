import classNames from 'classnames';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useCallback, useEffect, useRef, useState } from 'react';

import { buildSurveyQuestionsWithAnswers } from '../Details/buildSurveyQuestionsWithAnswers';
import { buildSelectOptions } from './buildSelectOptions';
import { sliderSettings } from './sliderSettings';

import Image from '@/components/Image';
import circleCheckIcon from '@/public/circle-check.svg';
import circleCheckEmptyIcon from '@/public/circle-check-empty.svg';

import styles from './index.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const scrollingSelectTestIds = {
  base: 'scrolling-select',
  option: 'scrolling-select__option',
  icon: 'scrolling-select__icon',
};

const ScrollingSelect = ({ id, pick, survey, answers, setSurveyQuestionsWithAnswers }) => {
  const [selectOptions, setSelectOptions] = useState([]);
  const [activeOption, setActiveOption] = useState(null);
  const isMultipleSelect = pick === 'any';

  useEffect(() => {
    setSelectOptions(buildSelectOptions(survey, answers));
  }, [id, survey, answers]);

  useEffect(() => {
    setActiveOption(selectOptions[0]?.value);
    sliderRef.current.slickGoTo(0);
  }, [selectOptions]);

  const sliderRef = useRef();
  const scroll = useCallback(
    y => {
      if (y > 0) {
        return sliderRef?.current?.slickNext();
      } else {
        return sliderRef?.current?.slickPrev();
      }
    },
    [sliderRef],
  );

  useEffect(() => {
    window.addEventListener('wheel', e => {
      scroll(e.deltaY);
    });
  }, [scroll]);

  const onOptionSelect = index => {
    const newSelectOptions = selectOptions.slice();
    newSelectOptions[index].selected = !newSelectOptions[index].selected;
    setSelectOptions(newSelectOptions);

    const answerId = newSelectOptions[index].value;
    const surveyQuestionsWithAnswers = buildSurveyQuestionsWithAnswers(id, answerId);
    const newAnswerObject = surveyQuestionsWithAnswers.answers[0];

    setSurveyQuestionsWithAnswers(prevSurveyQuestionWithAnswer => {
      let newSurveyQuestionWithAnswer = prevSurveyQuestionWithAnswer.slice();
      const questionObject = newSurveyQuestionWithAnswer.find(response => response.id === id);

      if (!isMultipleSelect) {
        newSurveyQuestionWithAnswer = newSurveyQuestionWithAnswer.filter(response => response.id !== id);
        return [...newSurveyQuestionWithAnswer, surveyQuestionsWithAnswers];
      }

      if (!questionObject) {
        return [...newSurveyQuestionWithAnswer, surveyQuestionsWithAnswers];
      }

      let answerObject = questionObject.answers.find(answer => answer.id === answerId);
      if (answerObject) {
        questionObject.answers = questionObject.answers.filter(answer => answer.id !== answerId);
      } else {
        questionObject.answers.push(newAnswerObject);
      }

      return newSurveyQuestionWithAnswer;
    });
  };

  const renderCheckBox = option => {
    if (!isMultipleSelect) {
      return null;
    } else if (option.selected) {
      return (
        <Image
          className={classNames({ 'opacity-50': activeOption !== option.value })}
          src={circleCheckIcon}
          alt="circle check icon"
          data-test-id={scrollingSelectTestIds.icon}
        />
      );
    } else {
      return <Image src={circleCheckEmptyIcon} alt="circle check empty icon" data-test-id={scrollingSelectTestIds.icon} />;
    }
  };

  const sliderEvents = { afterChange: currentIndex => setActiveOption(selectOptions[currentIndex].value) };
  const sliderConfig = { ...sliderSettings, ...sliderEvents };

  return (
    <Slider {...sliderConfig} ref={sliderRef} className={styles.scrollingSelect}>
      {selectOptions.map((option, index) => (
        <div
          className={classNames(
            'h-14 !flex items-center',
            isMultipleSelect ? 'justify-between' : 'justify-center',
            {
              'border-y-[0.5px] border-white': activeOption === option.value,
            },
            { 'cursor-pointer': activeOption === option.value },
          )}
          key={option.value}
          data-test-id={scrollingSelectTestIds.option}
          onClick={() => onOptionSelect(index)}
        >
          <div className={classNames('text-base-xl', activeOption === option.value ? 'text-white' : 'text-white/50')}>
            {option.label}
          </div>
          {renderCheckBox(option)}
        </div>
      ))}
    </Slider>
  );
};

ScrollingSelect.propTypes = {
  id: PropTypes.string.isRequired,
  pick: PropTypes.string.isRequired,
  survey: PropTypes.object.isRequired,
  answers: PropTypes.array.isRequired,
  setSurveyQuestionsWithAnswers: PropTypes.func.isRequired,
};

export default ScrollingSelect;
