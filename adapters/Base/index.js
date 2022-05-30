import snakecaseKeys from 'snakecase-keys';

import httpClient from 'lib/httpClient';
import { getToken } from 'helpers/authentication';

export const authorizationHeader = () => ({
  Authorization: `${getToken()?.tokenType} ${getToken()?.accessToken}`,
});

const defaultRequestOptions = () => ({ headers: authorizationHeader() });

const BaseAdapter = () => {
  const get = (path, params) => {
    const requestOptions = { ...defaultRequestOptions() };
    if (params) {
      requestOptions.params = snakecaseKeys(params);
    }

    return httpClient('get', path, requestOptions);
  };

  const post = (path, params) => {
    const requestOptions = { ...defaultRequestOptions(), data: snakecaseKeys(params) };

    return httpClient('post', path, requestOptions);
  };

  return {
    get,
    post,
  };
};

const baseAdapter = BaseAdapter();

export default baseAdapter;
