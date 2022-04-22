import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Icon from '@/components/Icon';
import Button from '@/components/Button';

import useUser from 'hooks/useUser';
import useSurvey from 'hooks/useSurvey';
import { prepareQuestions } from './prepareQuestions';

export const surveyOverviewTestIds = {
  base: 'survey-overview',
  coverImageUrl: 'survey-overview__cover_image_url',
  title: 'survey-overview__title',
  introText: 'survey-overview__intro-text',
  startSurveyButton: 'survey-overview__start-survey',
};

const SurveyOverview = ({ setBackgroundImagePath }) => {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useUser();
  const survey = useSurvey(user, id);

  useEffect(() => {
    if (survey) {
      setBackgroundImagePath(survey.data.attributes.coverImageUrl);
    }
  });

  if (!survey) {
    return null;
  }

  const { title, coverImageUrl } = survey.data.attributes;
  const questions = prepareQuestions(survey);
  const introText = questions.find(question => question.type === 'intro').text;

  return (
    <div
      className="w-[704px] absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
      data-test-id={surveyOverviewTestIds.base}
    >
      <div className="w-[704px] h-[302px] mb-8" data-test-id={surveyOverviewTestIds.coverImageUrl}>
        <Icon className="rounded-xl" src={coverImageUrl} alt="cover image" width={704} height={302} />
      </div>
      <div className="font-extrabold text-white text-base-xxxl mb-2" data-test-id={surveyOverviewTestIds.title}>
        {title}
      </div>
      <div className="text-white/70 text-base-large mb-8" data-test-id={surveyOverviewTestIds.introText}>
        {introText}
      </div>
      <Link href={`/surveys/${id}/questions`}>
        <a>
          <Button type="button" size="huge" data-test-id={surveyOverviewTestIds.startSurveyButton}>
            <div className="pt-1 pr-2">Start Survey</div>
          </Button>
        </a>
      </Link>
    </div>
  );
};

SurveyOverview.propTypes = {
  setBackgroundImagePath: PropTypes.func.isRequired,
};

export default SurveyOverview;
