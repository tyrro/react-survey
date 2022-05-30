/* eslint camelcase: ["error", {allow: ["camel_case_key"]}] */
import httpClient from 'lib/httpClient';
import { getToken } from 'helpers/authentication';

import baseAdapter, { authorizationHeader } from '.';

jest.mock('lib/httpClient');
jest.mock('helpers/authentication');

describe('BaseAdapter', () => {
  const path = '/path';
  const params = {
    camelCaseKey: 'value',
  };

  beforeEach(() => {
    httpClient.mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('authorizationHeader', () => {
    const mockTokenType = 'token type';
    const mockAccessToken = 'access token';
    const mockTokens = {
      tokenType: mockTokenType,
      accessToken: mockAccessToken,
      refreshToken: 'refresh token',
    };

    beforeEach(() => {
      getToken.mockImplementation(() => mockTokens);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('returns the header that includes the access token', () => {
      const expectedHeader = {
        Authorization: `${mockTokenType} ${mockAccessToken}`,
      };

      expect(authorizationHeader()).toEqual(expectedHeader);
    });
  });

  describe('get', () => {
    describe('given only the path', () => {
      it('calls the get method from httpClient with the path and authenticated header', () => {
        baseAdapter.get(path);

        expect(httpClient).toHaveBeenCalledWith('get', path, { headers: authorizationHeader() });
      });
    });

    describe('given the path and url params', () => {
      it('calls the get method from httpClient with the path, params and authenticated header', () => {
        baseAdapter.get(path, params);

        expect(httpClient).toHaveBeenCalledWith('get', path, {
          params: { camel_case_key: params.camelCaseKey },
          headers: authorizationHeader(),
        });
      });
    });
  });

  describe('post', () => {
    describe('given the path and params', () => {
      it('calls the post method from httpClient with the path, params and authenticated header', () => {
        baseAdapter.post(path, params);

        expect(httpClient).toHaveBeenCalledWith('post', path, {
          data: { camel_case_key: params.camelCaseKey },
          headers: authorizationHeader(),
        });
      });
    });
  });
});
