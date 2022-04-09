import { render, screen } from '@testing-library/react';

import { headerTestIds } from '@/components/Header';
import Home from '.';

import useUser from 'hooks/useUser';
import useProfile from 'hooks/useProfile';

jest.mock('hooks/useUser');
jest.mock('hooks/useProfile');

const mockUseUser = {
  user: {
    isLoggedIn: true,
  },
};

const mockUseProfile = {
  name: 'john doe',
  avatarUrl: 'avatar.me',
};

describe('Home', () => {
  it('renders the header', () => {
    useUser.mockImplementation(() => mockUseUser);
    useProfile.mockImplementation(() => mockUseProfile);

    render(<Home />);

    const header = screen.getByTestId(headerTestIds.base);

    expect(header).toBeVisible();
  });
});
