import Link from 'next/link';
import PropTypes from 'prop-types';

import Image from '@/components/Image';
import angleRightIcon from '@/public/angle-right.svg';

export const surveyCardTestIds = {
  base: 'survey-card',
  coverImageUrl: 'survey-card__cover_image_url',
  title: 'survey-card__title',
  description: 'survey-card__description',
  angleRightIcon: 'survey-card__details',
};

const SurveyCard = ({ slideId, title, description, coverImageUrl }) => (
  <div data-test-id={surveyCardTestIds.base}>
    <div className="relative w-full h-[302px] mb-8" data-test-id={surveyCardTestIds.coverImageUrl}>
      <Image className="rounded-xl" src={`${coverImageUrl}l`} alt="cover image" layout="fill" objectFit="cover" />
    </div>
    <div className="flex justify-between">
      <div className="w-4/5 truncate">
        <div className="font-extrabold text-white text-base-xxl truncate mb-2" data-test-id={surveyCardTestIds.title}>
          {title}
        </div>
        <div className="text-white/60 text-base-large" data-test-id={surveyCardTestIds.description}>
          {description}
        </div>
      </div>
      <div className="w-14 h-14" data-test-id={surveyCardTestIds.angleRightIcon}>
        <Link href={`/surveys/${slideId}`}>
          <a>
            <Image className="cursor-pointer" src={angleRightIcon} alt="go to survey" />
          </a>
        </Link>
      </div>
    </div>
  </div>
);

SurveyCard.propTypes = {
  slideId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
};

export default SurveyCard;
