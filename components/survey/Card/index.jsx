import Link from 'next/link';
import PropTypes from 'prop-types';
import requiredIf from 'react-required-if';

import LoadingSkeleton from '@/components/LoadingSkeleton';
import Image from '@/components/Image';
import angleRightIcon from '@/public/angle-right.svg';

import { highResolutionImageUrl } from 'helpers/highResolutionImageUrl';

export const surveyCardTestIds = {
  base: 'survey-card',
  coverImageUrl: 'survey-card__cover_image_url',
  title: 'survey-card__title',
  description: 'survey-card__description',
  angleRightIcon: 'survey-card__details',
};

const SurveyCard = ({ isSurveyLoading = false, surveyId, title, description, coverImageUrl }) => (
  <div data-test-id={surveyCardTestIds.base}>
    <div className="relative w-full h-[302px] mb-8">
      {isSurveyLoading ? (
        <LoadingSkeleton className="h-full" />
      ) : (
        <Image
          className="rounded-xl"
          src={highResolutionImageUrl(coverImageUrl)}
          alt="cover image"
          layout="fill"
          objectFit="cover"
          data-test-id={surveyCardTestIds.coverImageUrl}
        />
      )}
    </div>
    <div className="flex justify-between">
      <div className="w-4/5 truncate">
        <div className="font-extrabold text-white text-base-xxl truncate mb-2" data-test-id={surveyCardTestIds.title}>
          {isSurveyLoading ? (
            <div className="w-[280px] md:w-[300px] lg:w-[318px]">
              <LoadingSkeleton height={18} />
            </div>
          ) : (
            title
          )}
        </div>
        <div className="text-white/60 text-base-large" data-test-id={surveyCardTestIds.description}>
          {isSurveyLoading ? (
            <div className="w-[244px] md:w-[262px] lg:w-[280px]">
              <LoadingSkeleton height={18} />
            </div>
          ) : (
            description
          )}
        </div>
      </div>
      <div className="w-14 h-14" data-test-id={surveyCardTestIds.angleRightIcon}>
        {isSurveyLoading ? (
          <LoadingSkeleton height={56} circle={true} />
        ) : (
          <Link href={`/surveys/${surveyId}`}>
            <a>
              <Image className="cursor-pointer" src={angleRightIcon} alt="go to survey" />
            </a>
          </Link>
        )}
      </div>
    </div>
  </div>
);

SurveyCard.propTypes = {
  isSurveyLoading: PropTypes.bool,
  surveyId: requiredIf(PropTypes.string, props => !props.isSurveyLoading),
  title: requiredIf(PropTypes.string, props => !props.isSurveyLoading),
  description: requiredIf(PropTypes.string, props => !props.isSurveyLoading),
  coverImageUrl: requiredIf(PropTypes.string, props => !props.isSurveyLoading),
};

export default SurveyCard;
