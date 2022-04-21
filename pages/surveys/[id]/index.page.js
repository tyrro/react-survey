import { useState } from 'react';

import Background from '@/components/Background';
import SurveyOverview from '@/components/survey/Overview';

import useUser from 'hooks/useUser';
import BackButton from '@/components/BackButton';

const Survey = () => {
  const [backgroundImagePath, setBackgroundImagePath] = useState('/background.png');

  const { user } = useUser({
    redirectTo: '/login',
  });

  if (!user || !user.isLoggedIn) {
    return <div>Loading</div>;
  }

  return (
    <Background imagePath={backgroundImagePath}>
      <div className="h-full">
        <div className="pl-8 pt-8 mb-[98px]">
          <BackButton />
        </div>
        <SurveyOverview setBackgroundImagePath={setBackgroundImagePath} />
      </div>
    </Background>
  );
};

export default Survey;