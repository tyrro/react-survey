import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import SurveyCard from '@/components/survey/Card';

import useUser from 'hooks/useUser';
import useSurveys from 'hooks/useSurveys';
import { sliderSettings } from './sliderSettings';
import { formatDate } from 'helpers/date';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.scss';

export const surveyListTestIds = {
  base: 'survey-list',
  date: 'survey-list__date',
  text: 'survey-list__text',
};

const SurveyList = ({ setBackgroundImagePath }) => {
  const [surveys, setSurveys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [slideId, setSlideId] = useState(1);
  const date = new Date();
  const { user } = useUser();

  const surveyResponse = useSurveys(user, currentPage);
  console.log(surveyResponse);

  useEffect(() => {
    if (typeof surveyResponse !== 'undefined') {
      const updatedSurveyResponse = [...surveys, ...surveyResponse.data];
      setSurveys(updatedSurveyResponse);
      setTotalPages(surveyResponse.meta.pages);
    }
  }, [surveyResponse]);

  if (surveys.length === 0) {
    return null;
  }

  const sliderEvents = {
    beforeChange: (_oldIndex, newIndex) => beforeSlideChange(newIndex),
    afterChange: () => afterSlideChange(),
  };

  const beforeSlideChange = newSlideIndex => {
    setBackgroundImagePath(surveys[newSlideIndex].attributes.coverImageUrl);
    setSlideId(surveys[newSlideIndex].id);
  };

  const afterSlideChange = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage => currentPage + 1);
    }
  };

  const sliderConfig = { ...sliderSettings, dotsClass: `slick-dots ${styles.slickDots}`, ...sliderEvents };

  return (
    <div className="w-[704px] m-auto">
      <div className="font-extrabold text-white text-base-xs mb-1" data-test-id={surveyListTestIds.date}>
        {formatDate(date)}
      </div>
      <div className="font-extrabold text-white text-base-xxxl mb-8" data-test-id={surveyListTestIds.text}>
        Today
      </div>
      <Slider {...sliderConfig}>
        {surveys.map(survey => (
          <SurveyCard
            key={survey.id}
            slideId={slideId}
            title={survey.attributes.title}
            description={survey.attributes.description}
            coverImageUrl={survey.attributes.coverImageUrl}
          />
        ))}
      </Slider>
    </div>
  );
};

SurveyList.propTypes = {
  setBackgroundImagePath: PropTypes.func.isRequired,
};

export default SurveyList;
