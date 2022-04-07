import authenticationAdapter from 'adapters/Authentication';
import { clearToken, setToken } from 'helpers/authentication';

export const refreshToken = async token => {
  await authenticationAdapter
    .refreshToken(token)
    .then(response => {
      const auth = response.data;
      const { tokenType, accessToken, refreshToken } = auth.attributes;
      setToken(tokenType, accessToken, refreshToken);
    })
    .catch(() => {
      clearToken();

      window.location.href = '/login';
    });
};
