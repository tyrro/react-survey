import { useState } from 'react';

import Background from '@/components/Background';
import QuestionDetails from '@/components/question/Details';
import SurveyQuit from '@/components/survey/Quit';

import useUser from 'hooks/useUser';

const Questions = () => {
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
        <div className="w-7 h-[30px] ml-auto mr-8 pt-8">
          <SurveyQuit />
        </div>
        <QuestionDetails setBackgroundImagePath={setBackgroundImagePath} />
      </div>
    </Background>
  );
};

export default Questions;
