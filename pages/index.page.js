import Head from 'next/head';
import { useState } from 'react';

import Background from '@/components/Background';
import Header from '@/components/Header';
import SurveyList from '@/components/survey/List';

import useUser from 'hooks/useUser';

export default function Home() {
  const [backgroundImagePath, setBackgroundImagePath] = useState('/background.png');

  const { user } = useUser({
    redirectTo: '/login',
  });

  if (!user || !user.isLoggedIn) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Head>
        <title>React Survey</title>
        <meta name="description" content="A survey application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Background imagePath={backgroundImagePath}>
          <div className="h-full">
            <Header />
            <SurveyList setBackgroundImagePath={setBackgroundImagePath} />
          </div>
        </Background>
      </main>
    </>
  );
}
