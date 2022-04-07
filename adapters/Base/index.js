import snakecaseKeys from 'snakecase-keys';

import httpClient from 'lib/httpClient';

import { getToken } from 'helpers/authentication';

export const authenticatedHeader = () => ({
  Authorization: `${getToken()?.tokenType} ${getToken()?.accessToken}`,
});

const BaseAdapter = () => {
  const get = ({ path, params, authenticationHeaderPresent }) => {
    let requestOptions = {};
    if (params) {
      requestOptions.params = snakecaseKeys(params);
    }

    if (authenticationHeaderPresent) {
      requestOptions = { ...requestOptions, ...authenticatedHeader() };
    }

    return httpClient('get', path, requestOptions);
  };

  const post = ({ path, params, authenticationHeaderPresent }) => {
    let requestOptions = { data: snakecaseKeys(params) };

    if (authenticationHeaderPresent) {
      requestOptions = { ...requestOptions, ...authenticatedHeader() };
    }

    return httpClient('post', path, requestOptions);
  };

  return {
    get,
    post,
  };
};

const baseAdapter = BaseAdapter();

export default baseAdapter;
