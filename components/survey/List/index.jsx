import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import SurveyCard from '@/components/survey/Card';
import EmptySurveyCard from '@/components/survey/EmptyCard';

import useUser from 'hooks/useUser';
import useSurveys from 'hooks/useSurveys';
import { sliderSettings } from './sliderSettings';
import { surveysPerPage } from '../../../constants/surveyConfig';
import { formatDate } from 'helpers/date';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.scss';
import LoadingScreen from '@/components/LoadingScreen';

export const surveyListTestIds = {
  base: 'survey-list',
  date: 'survey-list__date',
  text: 'survey-list__text',
};

const SurveyList = ({ setBackgroundImagePath }) => {
  const [surveys, setSurveys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSurveyOffset, setCurrentSurveyOffset] = useState(0);
  const [currentSurveyId, setCurrentSurveyId] = useState();

  const date = new Date();
  const { user } = useUser();
  const surveyResponse = useSurveys(user, currentPage);

  useEffect(() => {
    if (surveyResponse) {
      const newSurveys = surveys.length === 0 ? Array(surveyResponse.meta.records).fill(null) : surveys;
      const startIndex = (currentPage - 1) * surveysPerPage;
      newSurveys.splice(startIndex, surveysPerPage, ...surveyResponse.data);
      setSurveys(newSurveys);
    }
  }, [surveyResponse]);

  useEffect(() => {
    if (surveyResponse?.data.length > 0) {
      setCurrentSurveyId(surveyResponse.data[currentSurveyOffset].id);
      setBackgroundImagePath(surveyResponse.data[currentSurveyOffset].attributes.coverImageUrl);
    }
  }, [surveyResponse, currentSurveyOffset, setBackgroundImagePath]);

  if (surveys.length === 0 && surveyResponse?.meta?.records === 0) {
    return <EmptySurveyCard />;
  }

  const renderSurveyCard = survey => {
    if (!survey) {
      return (
        <div key={currentSurveyOffset}>
          <SurveyCard isSurveyLoading={true} />
        </div>
      );
    }

    return (
      <SurveyCard
        key={survey.id}
        surveyId={currentSurveyId}
        title={survey.attributes.title}
        description={survey.attributes.description}
        coverImageUrl={survey.attributes.coverImageUrl}
      />
    );
  };

  const beforeSlideChange = newSlideIndex => {
    const currentSurvey = surveys[newSlideIndex];
    const currentSurveyOffset = newSlideIndex % surveysPerPage;
    setCurrentSurveyOffset(currentSurveyOffset);

    if (currentSurvey) {
      setBackgroundImagePath(currentSurvey.attributes.coverImageUrl);
      setCurrentSurveyId(currentSurvey.id);
    } else {
      const currentPageFromSlideIndex = Math.floor(newSlideIndex / surveysPerPage) + 1;
      setCurrentPage(currentPageFromSlideIndex);
    }
  };

  const sliderEvents = {
    beforeChange: (_oldIndex, newIndex) => beforeSlideChange(newIndex),
  };

  const sliderConfig = { ...sliderSettings, dotsClass: `slick-dots ${styles.slickDots}`, ...sliderEvents };
  const isSurveyLoading = surveys.length === 0;

  return (
    <div className="w-[313px] md:w-[419px] lg:w-[704px] m-auto">
      <div className="font-extrabold text-white text-base-xs uppercase mb-1" data-test-id={surveyListTestIds.date}>
        {isSurveyLoading ? <LoadingScreen width={117} height={18} className="mb-1" /> : formatDate(date)}
      </div>
      <div className="font-extrabold text-white text-base-xxxxl mb-8" data-test-id={surveyListTestIds.text}>
        {isSurveyLoading ? <LoadingScreen width={90} height={18} /> : 'Today'}
      </div>
      {isSurveyLoading ? (
        <SurveyCard isSurveyLoading={true} />
      ) : (
        <Slider {...sliderConfig}>{surveys.map(survey => renderSurveyCard(survey))}</Slider>
      )}
    </div>
  );
};

SurveyList.propTypes = {
  setBackgroundImagePath: PropTypes.func.isRequired,
};

export default SurveyList;
