import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

import forwardButton from '@/public/angle-right.svg';

const SurveyCard = ({ id, title, description, coverImageUrl }) => (
  <>
    <div className="w-[704px] h-[302px] mb-8">
      <Image className="rounded-xl" src={coverImageUrl} alt="sdf" width={704} height={302} />
    </div>
    <div className="flex justify-between mb-[155px]">
      <div>
        <div className="font-extrabold text-white text-base-xxl mb-2">{title}</div>
        <div className="text-white/60 text-base-large">{description}</div>
      </div>
      <div className="w-14 h-14">
        <Link href={`/surveys/${id}`}>
          <a>
            <Image className="cursor-pointer" src={forwardButton} alt="back" />
          </a>
        </Link>
      </div>
    </div>
  </>
);

SurveyCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
};

export default SurveyCard;
