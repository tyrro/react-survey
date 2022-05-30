import { renderHook } from '@testing-library/react-hooks';

import useProfile from './useProfile';
import profileAdapter from 'adapters/Profile';

describe('useProfile', () => {
  describe('given NO user is logged in', () => {
    it('does not return any data', () => {
      const user = { isLoggedIn: false };
      const { result } = renderHook(() => useProfile(user));

      expect(result.current).toBeUndefined();
    });
  });

  describe('given user is logged in', () => {
    const profileAttributes = {
      name: 'john doe',
      avatarUrl: 'avatar.me',
    };

    const successResponse = {
      data: {
        attributes: profileAttributes,
      },
    };

    it('returns profile data', async () => {
      const user = { isLoggedIn: true };
      jest.spyOn(profileAdapter, 'fetchUser').mockResolvedValue(successResponse);

      const { result, waitForNextUpdate } = renderHook(() => useProfile(user));

      await waitForNextUpdate();

      expect(result.current).toEqual(profileAttributes);
    });
  });
});
