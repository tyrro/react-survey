import { SWRConfig } from 'swr';

import '@/styles/globals.scss';
import '@/styles/fonts.scss';

import fetchJson from 'lib/fetchJson';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: err => {
          console.error(err);
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
