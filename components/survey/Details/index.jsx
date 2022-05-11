import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Image from '@/components/Image';
import Button from '@/components/Button';

import useUser from 'hooks/useUser';
import useSurvey from 'hooks/useSurvey';
import { getQuestionsFromSurvey } from './getQuestionsFromSurvey';

import { highResolutionImageUrl } from 'helpers/highResolutionImageUrl';

export const surveyDetailsTestIds = {
  base: 'survey-details',
  coverImageUrl: 'survey-details__cover_image_url',
  title: 'survey-details__title',
  introText: 'survey-details__intro-text',
  startSurveyButton: 'survey-details__start-survey',
};

const SurveyDetails = ({ setBackgroundImagePath }) => {
  const router = useRouter();
  const surveyId = router.query.id;
  const { user } = useUser();
  const survey = useSurvey(user, surveyId);

  useEffect(() => {
    if (survey) {
      setBackgroundImagePath(survey.data.attributes.coverImageUrl);
    }
  }, [survey, setBackgroundImagePath]);

  if (!survey) {
    return null;
  }

  const { title, coverImageUrl } = survey.data.attributes;
  const questions = getQuestionsFromSurvey(survey);
  const introText = questions.find(question => question.type === 'intro').text;

  return (
    <div
      className="w-[313px] md:w-[419px] lg:w-[704px] absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
      data-test-id={surveyDetailsTestIds.base}
    >
      <div className="relative w-full h-[302px] mb-8">
        <Image
          className="rounded-xl"
          src={highResolutionImageUrl(coverImageUrl)}
          alt="cover image"
          layout="fill"
          objectFit="cover"
          data-test-id={surveyDetailsTestIds.coverImageUrl}
        />
      </div>
      <div className="font-extrabold text-white text-base-xxxl mb-2" data-test-id={surveyDetailsTestIds.title}>
        {title}
      </div>
      <div className="text-white/70 text-base-large mb-8" data-test-id={surveyDetailsTestIds.introText}>
        {introText}
      </div>
      <Link href={`/surveys/${surveyId}/questions`}>
        <a>
          <Button type="button" size="large" data-test-id={surveyDetailsTestIds.startSurveyButton}>
            <div className="pt-1 pr-2">Start Survey</div>
          </Button>
        </a>
      </Link>
    </div>
  );
};

SurveyDetails.propTypes = {
  setBackgroundImagePath: PropTypes.func.isRequired,
};

export default SurveyDetails;
