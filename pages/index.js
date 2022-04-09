import Head from 'next/head';

import Background from '@/components/Background';
import Header from '@/components/Header';

import useUser from 'hooks/useUser';

export default function Home() {
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
        <Background imagePath="/background.png">
          <div className="h-full">
            <Header />
          </div>
        </Background>
      </main>
    </>
  );
}
