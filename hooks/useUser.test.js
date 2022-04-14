import { SWRConfig } from 'swr';
import { renderHook } from '@testing-library/react-hooks';

import { getToken } from 'helpers/authentication';
import useUser from './useUser';

jest.mock('helpers/authentication');

describe('useUser', () => {
  const wrapper = ({ children }) => <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>;

  const mockToken = {
    tokenType: '',
    accessToken: '',
    refreshToken: '',
  };

  beforeEach(() => {
    getToken.mockImplementation(() => mockToken);
  });

  describe('given the token in local storage exists', () => {
    beforeEach(() => {
      mockToken.accessToken = 'access token';
    });

    it('returns the logged status as true', async () => {
      const user = { isLoggedIn: true };

      const { result, waitForNextUpdate } = renderHook(() => useUser(), { wrapper });

      await waitForNextUpdate();

      expect(result.current.user).toMatchObject(user);
    });
  });

  describe('given NO token in local storage', () => {
    beforeEach(() => {
      mockToken.accessToken = '';
    });

    it('returns the logged in status as false', async () => {
      const user = { isLoggedIn: false };

      const { result, waitForNextUpdate } = renderHook(() => useUser(), { wrapper });

      await waitForNextUpdate();

      expect(result.current.user).toMatchObject(user);
    });
  });
});
