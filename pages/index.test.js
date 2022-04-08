import { render, screen } from '@testing-library/react';

import Home from './index.page';

import useUser from 'hooks/useUser';

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
