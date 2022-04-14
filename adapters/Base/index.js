import snakecaseKeys from 'snakecase-keys';

import httpClient from 'lib/httpClient';
import { getToken } from 'helpers/authentication';

export const authorizationHeader = () => ({
  Authorization: `${getToken()?.tokenType} ${getToken()?.accessToken}`,
});

const BaseAdapter = () => {
  const get = (path, requestOptions = {}) => {
    requestOptions = snakecaseKeys(requestOptions);

    return httpClient('get', path, requestOptions);
  };

  const post = (path, params) => {
    let requestOptions = { data: snakecaseKeys(params) };

    return httpClient('post', path, requestOptions);
  };

  return {
    get,
    post,
  };
};

const baseAdapter = BaseAdapter();

export default baseAdapter;
