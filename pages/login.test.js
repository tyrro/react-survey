import { render, screen } from '@testing-library/react';

import { loginFormTestIds } from '@/components/forms/Login';
import Login, { loginPageTestIds } from './login';

describe('Login', () => {
  beforeEach(() => {
    render(<Login />);
  });

  it('renders a login headline', () => {
    const headlineText = screen.getByTestId(loginPageTestIds.headlineText);

    expect(headlineText).toBeVisible();
    expect(headlineText).toHaveTextContent('Sign in to Nimble');
  });

  it('renders a login form', () => {
    const logInForm = screen.getByTestId(loginFormTestIds.form);

    expect(logInForm).toBeVisible();
  });
});
