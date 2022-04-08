/* eslint-disable camelcase */
import httpClient from 'lib/httpClient';

import baseAdapter from '.';

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

  describe('get', () => {
    describe('given only the path', () => {
      it('calls the get method from request manager with the path and no params', () => {
        baseAdapter.get(path);

        expect(httpClient).toHaveBeenCalledWith('get', path, {});
      });
    });

    describe('given the path and url params', () => {
      it('calls the get method from request manager with the path and params with snake case keys', () => {
        baseAdapter.get(path, { params });

        expect(httpClient).toHaveBeenCalledWith('get', path, {
          params: { camel_case_key: params.camelCaseKey },
        });
      });
    });
  });

  describe('post', () => {
    describe('given the path and url params', () => {
      it('calls the post method from request manager with the path and data with snake case key', () => {
        baseAdapter.post(path, params);

        expect(httpClient).toHaveBeenCalledWith('post', path, {
          data: { camel_case_key: params.camelCaseKey },
        });
      });
    });
  });
});
