import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

import forwardButton from '@/public/angle-right.svg';

export const surveyCardTestIds = {
  base: 'survey-card',
  coverImageUrl: 'survey-card__cover_image_url',
  title: 'survey-card__title',
  description: 'survey-card__description',
  forwardButton: 'survey-card__forward',
};

const SurveyCard = ({ id, title, description, coverImageUrl }) => (
  <div data-test-id={surveyCardTestIds.base}>
    <div className="w-[704px] h-[302px] mb-8" data-test-id={surveyCardTestIds.coverImageUrl}>
      <Image className="rounded-xl" src={coverImageUrl} alt="cover image" width={704} height={302} />
    </div>
    <div className="flex justify-between mb-[155px]">
      <div>
        <div className="font-extrabold text-white text-base-xxl mb-2" data-test-id={surveyCardTestIds.title}>
          {title}
        </div>
        <div className="text-white/60 text-base-large" data-test-id={surveyCardTestIds.description}>
          {description}
        </div>
      </div>
      <div className="w-14 h-14" data-test-id={surveyCardTestIds.forwardButton}>
        <Link href={`/surveys/${id}`}>
          <a>
            <Image className="cursor-pointer" src={forwardButton} alt="forward" />
          </a>
        </Link>
      </div>
    </div>
  </div>
);

SurveyCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
};

export default SurveyCard;
