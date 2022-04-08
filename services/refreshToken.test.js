import authenticationAdapter from 'adapters/Authentication';
import * as authenticationHelper from 'helpers/authentication';
import { mockAxiosError } from 'tests/error';

import { refreshToken, refreshTokenErrorPath } from './refreshToken';

jest.mock('adapters/Authentication');

describe('refreshToken', () => {
  const mockTokenType = 'token type';
  const mockAccessToken = 'access token';
  const mockRefreshToken = 'refresh token';
  const successResponse = {
    data: {
      type: 'authorization',
      attributes: {
        tokenType: mockTokenType,
        accessToken: mockAccessToken,
        refreshToken: mockRefreshToken,
      },
    },
  };
  const mockInvalidError = mockAxiosError(422);

  describe('given the refresh token is valid', () => {
    it('sets the tokens', async () => {
      const authenticationAdapterSpy = jest.spyOn(authenticationAdapter, 'refreshToken');
      authenticationAdapterSpy.mockResolvedValue(successResponse);
      const token = 'valid refresh token';

      const setTokenSpy = jest.spyOn(authenticationHelper, 'setToken');

      await refreshToken(token);

      expect(setTokenSpy).toBeCalledWith(mockTokenType, mockAccessToken, mockRefreshToken);

      authenticationAdapterSpy.mockRestore();
      setTokenSpy.mockRestore();
    });
  });

  describe('given the refresh token is invalid or something went wrong', () => {
    const { location } = window;

    const setHrefSpy = jest.fn(href => href);

    beforeAll(() => {
      delete window.location;
      window.location = {};
      Object.defineProperty(window.location, 'href', {
        get: jest.fn(),
        set: setHrefSpy,
      });
    });

    afterAll(() => {
      window.location = location;
    });

    it('clears the token', async () => {
      const authenticationAdapterSpy = jest.spyOn(authenticationAdapter, 'refreshToken');
      authenticationAdapterSpy.mockRejectedValue(mockInvalidError);
      const clearTokenSpy = jest.spyOn(authenticationHelper, 'clearToken');

      await refreshToken('invalid refresh token');

      expect(clearTokenSpy).toBeCalled();

      authenticationAdapterSpy.mockRestore();
      clearTokenSpy.mockRestore();
    });

    it('redirects to the login screen', async () => {
      const authenticationAdapterSpy = jest.spyOn(authenticationAdapter, 'refreshToken');
      authenticationAdapterSpy.mockRejectedValue(mockInvalidError);

      await refreshToken('invalid refresh token');

      expect(setHrefSpy).toHaveBeenCalledWith(refreshTokenErrorPath);

      authenticationAdapterSpy.mockRestore();
    });
  });
});
