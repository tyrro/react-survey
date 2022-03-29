import { render, screen } from '@testing-library/react';
import LoginForm, { loginFormTestIds } from '.';

describe('LoginForm', () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  it('renders an email label', () => {
    const emailLabel = screen.getByTestId(loginFormTestIds.emailLabel);

    expect(emailLabel).toBeVisible();
    expect(emailLabel).toHaveTextContent('Email');
  });

  it('renders an email input field', () => {
    const emailInput = screen.getByTestId(loginFormTestIds.emailField);

    expect(emailInput).toBeVisible();
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('renders a password field', () => {
    const passwordLabel = screen.getByTestId(loginFormTestIds.passwordLabel);

    expect(passwordLabel).toBeVisible();
    expect(passwordLabel).toHaveTextContent('Password');
  });

  it('renders a password input field', () => {
    const passwordInput = screen.getByTestId(loginFormTestIds.passwordField);

    expect(passwordInput).toBeVisible();
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('renders a login button', () => {
    const loginButton = screen.getByTestId(loginFormTestIds.loginButton);

    expect(loginButton).toBeVisible();
    expect(loginButton).toHaveTextContent('Sign in');
    expect(loginButton).toHaveAttribute('type', 'submit');
  });
});
