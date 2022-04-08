import React from 'react';

import { render, screen } from '@testing-library/react';

import { getToken } from 'helpers/authentication';

import useUser from './useUser';
import { act } from 'react-dom/test-utils';

jest.mock('helpers/authentication');

describe('useUser', () => {
  const testId = 'is-logged-in-test-id';
  const UseAuthenticationComponent = () => {
    const { user } = useUser({});
    return <div data-test-id={testId}>{user?.isLoggedIn && 'logged in'}</div>;
  };

  const mockTokens = {
    tokenType: '',
    accessToken: '',
    refreshToken: '',
  };

  beforeEach(() => {
    getToken.mockImplementation(() => mockTokens);
  });

  describe('given the token in local storage exists', () => {
    beforeEach(() => {
      mockTokens.accessToken = 'access token';
    });

    it('returns the logged in message', async () => {
      await act(async () => {
        render(<UseAuthenticationComponent />);
      });

      const testComponent = screen.getByTestId(testId);
      expect(testComponent).toHaveTextContent('logged in');
    });
  });
});
