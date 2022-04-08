import { render, screen } from '@testing-library/react';

import useUser from 'hooks/useUser';

import Home from '.';

jest.mock('hooks/useUser');
const mockUseUser = {
  user: {
    isLoggedIn: true,
  },
};

describe('Home', () => {
  it('renders a heading', () => {
    useUser.mockImplementation(() => mockUseUser);
    render(<Home />);

    const heading = screen.getByTestId('welcome-text');

    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent('Welcome to Next.js!');
  });
});
