import Slider from 'react-slick';
import { PropTypes } from 'prop-types';

import SurveyCard from '@/components/survey/Card';

import useUser from 'hooks/useUser';
import useSurveys from 'hooks/useSurveys';
import { sliderSettings } from './sliderSettings';
import { formatTodaysDate } from 'helpers/date';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.scss';

const SurveyList = ({ setBackgroundImagePath }) => {
  const { user } = useUser();
  const surveys = useSurveys(user);

  if (surveys.length === 0) {
    return null;
  }

  const sliderEvents = {
    beforeChange: (_oldIndex, newIndex) => setBackgroundImagePath(surveys[newIndex].attributes.coverImageUrl),
  };

  const sliderConfig = { ...sliderSettings, dotsClass: `slick-dots ${styles.slickDots}`, ...sliderEvents };

  return (
    <div className="w-[704px] mx-auto my-0">
      <div className="font-extrabold text-white text-base-xs mb-1">{formatTodaysDate()}</div>
      <div className="font-extrabold text-white text-base-xxxl mb-8">Today</div>
      <Slider {...sliderConfig}>
        {surveys.map(survey => (
          <SurveyCard
            key={survey.id}
            id={survey.id}
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
