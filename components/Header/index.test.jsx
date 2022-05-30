import { render, screen } from '@testing-library/react';

import { sidebarTestIds } from '@/components/Sidebar';
import Header, { headerTestIds } from '.';

import useUser from 'hooks/useUser';
import useProfile from 'hooks/useProfile';

jest.mock('hooks/useUser');
jest.mock('hooks/useProfile');

const mockUseProfile = {
  name: 'john doe',
  avatarUrl: 'avatar.me',
};

describe('Header', () => {
  beforeEach(() => {
    useUser.mockImplementation(() => jest.fn());
    useProfile.mockImplementation(() => mockUseProfile);

    render(<Header />);
  });

  it('renders a logo', () => {
    const logo = screen.getByTestId(headerTestIds.logo);

    expect(logo).toBeVisible();
  });

  it('renders the user avatar', () => {
    const userAvatar = screen.getByTestId(headerTestIds.userAvatar);

    expect(userAvatar).toBeVisible();
    expect(userAvatar).toHaveAttribute('src', mockUseProfile.avatarUrl);
  });

  it('does not render the sidebar open', () => {
    const sidebar = screen.queryByTestId(sidebarTestIds.base);

    expect(sidebar).toBeNull();
  });

  describe('given the avatar is clicked', () => {
    it('renders the sidebar', () => {
      const userAvatar = screen.getByTestId(headerTestIds.userAvatar);

      userAvatar.click();

      const sidebar = screen.getByTestId(sidebarTestIds.base);

      expect(sidebar).toBeVisible();
    });
  });
});
