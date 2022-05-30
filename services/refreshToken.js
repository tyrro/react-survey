import authenticationAdapter from 'adapters/Authentication';
import { clearToken, setToken } from 'helpers/authentication';

export const refreshTokenErrorPath = '/login';

export const refreshToken = async token => {
  await authenticationAdapter
    .refreshToken(token)
    .then(response => {
      const { tokenType, accessToken, refreshToken } = response?.data?.attributes;
      setToken(tokenType, accessToken, refreshToken);
    })
    .catch(() => {
      clearToken();

      window.location.href = refreshTokenErrorPath;
    });
};
