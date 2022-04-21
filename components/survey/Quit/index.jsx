import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/router';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import closeIcon from '@/public/circle-xmark.svg';

const SurveyQuit = () => {
  const router = useRouter();
  const [quitConfirmationModalOpen, setQuitConfirmationModalOpen] = useState(false);

  return (
    <>
      <Icon src={closeIcon} alt="close survey" onClick={() => setQuitConfirmationModalOpen(value => !value)} />
      {quitConfirmationModalOpen &&
        createPortal(
          <div className="w-[467px] absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
            <div className="bg-sidebar/100 backdrop-blur-4xl rounded-[14px] p-6">
              <div className="font-extrabold text-white text-base-xxl mb-2">Warning!</div>
              <div className="text-white/70 text-base-large mb-8">Are you sure you want to quit the survey?</div>
              <div className="w-[188px] flex ml-auto justify-between">
                <Button size="xs" dark onClick={() => router.push('/')}>
                  Yes
                </Button>
                <Button size="xs" onClick={() => setQuitConfirmationModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default SurveyQuit;
