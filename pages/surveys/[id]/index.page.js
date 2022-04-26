import { useState } from 'react';

import Background from '@/components/Background';
import SurveyDetails from '@/components/survey/Details';

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
        <div className="pl-8 pt-8">
          <BackButton />
        </div>
        <SurveyDetails setBackgroundImagePath={setBackgroundImagePath} />
      </div>
    </Background>
  );
};

export default Survey;
