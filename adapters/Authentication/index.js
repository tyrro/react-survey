import baseAdapter from 'adapters/Base';
import { Config } from 'config';

const AuthenticationAdapter = () => {
  const DEFAULT_PAYLOAD = () => ({
    clientId: Config.clientId,
    clientSecret: Config.clientSecret,
  });

  const login = (email, password) =>
    baseAdapter.post('oauth/token', {
      ...DEFAULT_PAYLOAD(),
      grantType: 'password',
      email,
      password,
    });

  const refreshToken = token =>
    baseAdapter.post('oauth/token', {
      ...DEFAULT_PAYLOAD(),
      grantType: 'refresh_token',
      refreshToken: token,
    });

  return {
    login,
    refreshToken,
  };
};

const authenticationAdapter = AuthenticationAdapter();

export default authenticationAdapter;
