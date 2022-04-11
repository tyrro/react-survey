import { render, screen } from '@testing-library/react';

import Sidebar, { sidebarTestIds } from '.';

import useUser from 'hooks/useUser';
import * as authenticationHelper from 'helpers/authentication';

jest.mock('hooks/useUser');
const mutateMock = jest.fn();

const mockUseUser = {
  mutateUser: mutateMock,
};

describe('Sidebar', () => {
  const props = { name: 'john doe' };

  beforeEach(() => {
    useUser.mockImplementation(() => mockUseUser);

    render(<Sidebar {...props} />);
  });

  it('renders the user name', () => {
    const userName = screen.getByTestId(sidebarTestIds.userName);

    expect(userName).toBeVisible();
    expect(userName).toHaveTextContent(props.name);
  });

  it('renders a logout button', () => {
    const logoutButton = screen.getByTestId(sidebarTestIds.button);

    expect(logoutButton).toBeVisible();
    expect(logoutButton).toHaveTextContent('Logout');
  });

  describe('upon logout button click', () => {
    it('clears tokens', () => {
      const clearTokenSpy = jest.spyOn(authenticationHelper, 'clearToken');
      const logoutButton = screen.getByTestId(sidebarTestIds.button);
      logoutButton.click();

      expect(clearTokenSpy).toBeCalled();
      expect(mutateMock).toBeCalled();

      clearTokenSpy.mockRestore();
    });
  });
});
