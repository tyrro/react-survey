import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Image from '@/components/Image';
import circleCheckGreenAnimation from '@/public/circle-check-green-animation.gif';

export const surveyOutroTestIds = {
  base: 'survey-outro',
  animation: 'survey-outro__animation',
  text: 'survey-outro__text',
};

const SurveyOutro = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className="h-full flex flex-col justify-center items-center" data-test-id={surveyOutroTestIds.base}>
      <Image
        src={circleCheckGreenAnimation}
        alt="circle check green gif"
        width={200}
        height={125}
        objectFit="cover"
        data-test-id={surveyOutroTestIds.animation}
      />
      <div
        className="w-[327px] font-extrabold text-white text-base-xxxl text-center -tracking-[0.5px] mt-10"
        data-test-id={surveyOutroTestIds.text}
      >
        Thanks for taking the survey.
      </div>
    </div>
  );
};

export default SurveyOutro;
