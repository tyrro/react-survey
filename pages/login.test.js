import { render, screen } from '@testing-library/react';

import { loginFormTestIds } from '@/components/forms/Login';
import Login, { loginTestIds } from './login';

describe('Login', () => {
  beforeEach(() => {
    render(<Login />);
  });

  it('renders log in text', () => {
    const logInText = screen.getByTestId(loginTestIds.logInText);

    expect(logInText).toBeVisible();
    expect(logInText).toHaveTextContent('Sign in to Nimble');
  });

  it('renders a login form', () => {
    const logInForm = screen.getByTestId(loginFormTestIds.form);

    expect(logInForm).toBeVisible();
  });
});
