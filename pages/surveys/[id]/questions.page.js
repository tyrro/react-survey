import { useState } from 'react';

import Background from '@/components/Background';
import QuestionView from '@/components/question/View';

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
        <QuestionView setBackgroundImagePath={setBackgroundImagePath} />
      </div>
    </Background>
  );
};

export default Questions;
