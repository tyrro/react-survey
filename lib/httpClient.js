import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

import { authenticatedHeader } from 'adapters/Base';
import { Config } from 'config';
import { clearToken, getToken } from 'helpers/authentication';
import { refreshToken } from 'services/refreshToken';

export const successResponseInterceptor = response => {
  const responseData = response.data;
  const formattedData = camelcaseKeys(responseData, { deep: true });
  response.data = formattedData;

  return response;
};

export const errorInterceptor = async error => {
  if (error.response) {
    if (error.response.status === 401) {
      const tokens = getToken();
      const blankResponse = { data: {} };

      if (tokens?.refreshToken) {
        await refreshToken(tokens.refreshToken);

        // Retry the request with new header
        error.config.headers = {
          ...error.config.headers,
          ...authenticatedHeader(),
        };

        return axios.request(error.config);
      }

      clearToken();

      window.location.href = '/login';

      return Promise.resolve(blankResponse);
    }

    const errorData = error.response.data;
    const formattedData = camelcaseKeys(errorData, { deep: true });
    error.response.data = formattedData;
  }

  return Promise.reject(error);
};

export const defaultOptions = () => ({
  responseType: 'json',
  baseURL: `${Config.apiUrl}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

const httpClient = (method, endpoint, requestOptions = {}) => {
  const requestParams = {
    method,
    url: endpoint,
    ...defaultOptions(),
    ...requestOptions,
  };

  axios.interceptors.response.use(successResponseInterceptor, errorInterceptor);

  return axios
    .request(requestParams)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};

export default httpClient;
