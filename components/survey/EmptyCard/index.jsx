import PropTypes from 'prop-types';
import { useEffect } from 'react';

import Image from '@/components/Image';
import sunglasses from '@/public/sunglasses.svg';

export const emptySurveyCardTestIds = {
  base: 'empty-survey-card',
  sunglassesIcon: 'empty-survey-card__sunglasses-icon',
  surveyCompletedText: 'empty-survey-card__survey-completed-text',
};

const EmptySurveyCard = ({ setBackgroundImagePath }) => {
  useEffect(() => {
    setBackgroundImagePath('/dark.png');
  });

  return (
    <div
      className="w-[275px] md:w-[320px] lg:w-[443px] absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
      data-test-id={emptySurveyCardTestIds.base}
    >
      <div className="w-16 h-16 m-auto mb-8">
        <Image src={sunglasses} alt="sunglasses" data-test-id={emptySurveyCardTestIds.sunglassesIcon} />
      </div>
      <div
        className="font-extrabold text-white text-base-xxxl lg:text-center -tracking-[0.5px]"
        data-test-id={emptySurveyCardTestIds.surveyCompletedText}
      >
        You&apos;ve completed all the surveys. Take a moment.
      </div>
    </div>
  );
};

EmptySurveyCard.propTypes = {
  setBackgroundImagePath: PropTypes.func.isRequired,
};

export default EmptySurveyCard;
