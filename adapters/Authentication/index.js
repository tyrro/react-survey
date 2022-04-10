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

  const resetPassword = email =>
    baseAdapter.post('passwords', {
      ...DEFAULT_PAYLOAD(),
      user: { email },
    });

  return {
    login,
    refreshToken,
    resetPassword,
  };
};

const authenticationAdapter = AuthenticationAdapter();

export default authenticationAdapter;
