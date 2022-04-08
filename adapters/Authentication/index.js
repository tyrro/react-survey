import baseAdapter from 'adapters/Base';
import { Config } from 'config';

const AuthenticationAdapter = () => {
  const login = (email, password) =>
    baseAdapter.post('oauth/token', {
      grantType: 'password',
      clientId: Config.clientId,
      clientSecret: Config.clientSecret,
      email,
      password,
    });

  const refreshToken = token =>
    baseAdapter.post('oauth/token', {
      grantType: 'refresh_token',
      clientId: Config.clientId,
      clientSecret: Config.clientSecret,
      refreshToken: token,
    });

  return {
    login,
    refreshToken,
  };
};

const authenticationAdapter = AuthenticationAdapter();

export default authenticationAdapter;
