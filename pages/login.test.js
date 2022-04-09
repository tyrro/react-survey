import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { loginFormTestIds } from '@/components/forms/Login';
import Login, { loginPageTestIds } from './login';

describe('Login', () => {
  it('renders a login headline', async () => {
    await act(async () => {
      render(<Login />);
    });

    const headlineText = screen.getByTestId(loginPageTestIds.headlineText);

    expect(headlineText).toBeVisible();
    expect(headlineText).toHaveTextContent('Sign in to Nimble');
  });

  it('renders a login form', async () => {
    await act(async () => {
      render(<Login />);
    });

    const logInForm = screen.getByTestId(loginFormTestIds.form);

    expect(logInForm).toBeVisible();
  });
});
