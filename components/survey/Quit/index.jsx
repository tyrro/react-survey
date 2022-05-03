import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/router';

import Button from '@/components/Button';
import Image from '@/components/Image';
import circleXmarkIcon from '@/public/circle-xmark.svg';

export const surveyQuitTestIds = {
  base: 'survey-quit',
  quitSurveyIcon: 'survey-quit__close-icon',
  warningText: 'survey-quit__warning-text',
  quitConfirmationText: 'survey-quit__confirmation-text',
  button: 'survey-quit__button',
};

const SurveyQuit = () => {
  const router = useRouter();
  const [quitConfirmationModalOpen, setQuitConfirmationModalOpen] = useState(false);

  return (
    <>
      <Image
        className="cursor-pointer"
        src={circleXmarkIcon}
        alt="quit survey"
        data-test-id={surveyQuitTestIds.quitSurveyIcon}
        onClick={() => setQuitConfirmationModalOpen(value => !value)}
      />
      {quitConfirmationModalOpen &&
        createPortal(
          <div
            className="w-[313px] md:w-[390px] lg:w-[467px] absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 bg-sidebar/100 backdrop-blur-4xl rounded-[14px] p-6"
            data-test-id={surveyQuitTestIds.base}
          >
            <div className="font-extrabold text-white text-base-xxl mb-2" data-test-id={surveyQuitTestIds.warningText}>
              Warning!
            </div>
            <div className="text-white/70 text-base-large mb-8" data-test-id={surveyQuitTestIds.quitConfirmationText}>
              Are you sure you want to quit the survey?
            </div>
            <div className="w-[188px] flex ml-auto" data-test-id={surveyQuitTestIds.button}>
              <Button size="small" dark className="mr-2" onClick={() => router.push('/')}>
                Yes
              </Button>
              <Button size="small" onClick={() => setQuitConfirmationModalOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default SurveyQuit;
