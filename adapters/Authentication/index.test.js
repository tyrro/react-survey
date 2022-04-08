import baseAdapter from 'adapters/Base';
import { Config } from 'config';

import authenticationAdapter from '.';

jest.mock('adapters/Base');
jest.mock('config');

const mockPostMethod = jest.fn();

describe('AuthenticationAdapter', () => {
  describe('login', () => {
    describe('given an email and a password', () => {
      it('calls the post method from base adapter', () => {
        baseAdapter.post = mockPostMethod;
        const clientId = 'client id';
        const clientSecret = 'client secret';
        Config.clientId = clientId;
        Config.clientSecret = clientSecret;

        const email = 'john@doe.io';
        const password = 'asd123';

        const expectedPath = 'oauth/token';
        const expectedPayload = {
          grantType: 'password',
          clientId,
          clientSecret,
          email,
          password,
        };

        authenticationAdapter.login(email, password);

        expect(mockPostMethod).toHaveBeenCalledWith(expectedPath, expectedPayload);
      });
    });
  });

  describe('refreshToken', () => {
    describe('given a valid refresh token', () => {
      it('calls the post method from base adapter', () => {
        baseAdapter.post = mockPostMethod;
        const clientId = 'client id';
        const clientSecret = 'client secret';
        Config.clientId = clientId;
        Config.clientSecret = clientSecret;

        const refreshToken = 'valid refresh token';

        const expectedPath = 'oauth/token';
        const expectedPayload = {
          grantType: 'refresh_token',
          clientId,
          clientSecret,
          refreshToken,
        };

        authenticationAdapter.refreshToken(refreshToken);

        expect(mockPostMethod).toHaveBeenCalledWith(expectedPath, expectedPayload);
      });
    });
  });
});
