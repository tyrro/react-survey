import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import SurveyCard from '@/components/survey/Card';

import useUser from 'hooks/useUser';
import useSurveys from 'hooks/useSurveys';
import { sliderSettings } from './sliderSettings';
import { surveysPerPage } from './surveysPerPage';
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
  const [slideId, setSlideId] = useState();

  const date = new Date();
  const { user } = useUser();
  const surveyResponse = useSurveys(user, currentPage);

  useEffect(() => {
    if (surveyResponse) {
      const newSurveys = surveys.length === 0 ? Array(surveyResponse.meta.records).fill(null) : surveys;
      const startIndex = (currentPage - 1) * surveysPerPage;
      newSurveys.splice(startIndex, surveysPerPage, ...surveyResponse.data);
      setSurveys(newSurveys);
      setSlideId(surveyResponse.data[0].id);
    }
  }, [surveyResponse]);

  if (surveys.length === 0) {
    return null;
  }

  const sliderEvents = {
    beforeChange: (_oldIndex, newIndex) => beforeSlideChange(newIndex),
  };

  const renderSurvey = survey => {
    if (survey) {
      return (
        <SurveyCard
          key={survey?.id}
          slideId={slideId}
          title={survey?.attributes?.title}
          description={survey?.attributes?.description}
          coverImageUrl={survey?.attributes?.coverImageUrl}
        />
      );
    } else {
      return <div className="">Loading</div>;
    }
  };

  const beforeSlideChange = newSlideIndex => {
    const currentSurvey = surveys[newSlideIndex];

    if (currentSurvey) {
      setBackgroundImagePath(currentSurvey.attributes.coverImageUrl);
      setSlideId(currentSurvey.id);
    } else {
      const currentPageFromSlideIndex = Math.floor(newSlideIndex / surveysPerPage) + 1;
      setCurrentPage(currentPageFromSlideIndex);
    }
  };

  const sliderConfig = { ...sliderSettings, dotsClass: `slick-dots ${styles.slickDots}`, ...sliderEvents };

  return (
    <div className="w-[313px] md:w-[419px] lg:w-[704px] m-auto">
      <div className="font-extrabold text-white text-base-xs uppercase mb-1" data-test-id={surveyListTestIds.date}>
        {formatDate(date)}
      </div>
      <div className="font-extrabold text-white text-base-xxxl mb-8" data-test-id={surveyListTestIds.text}>
        Today
      </div>
      <Slider {...sliderConfig}>{surveys.map(survey => renderSurvey(survey))}</Slider>
    </div>
  );
};

SurveyList.propTypes = {
  setBackgroundImagePath: PropTypes.func.isRequired,
};

export default SurveyList;
