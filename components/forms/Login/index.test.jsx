import { render, screen } from '@testing-library/react';
import Login from '.';

const testIDs = {
  emailField: 'input-email',
  passwordField: 'input-password',
  signInButton: 'btn-sign-in',
};

describe(Login, () => {
  beforeEach(() => {
    render(<Login />);
  });

  it('renders an email field', () => {
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByTestId(testIDs.emailField)).toBeInTheDocument();
  });

  it('renders an password field', () => {
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByTestId(testIDs.passwordField)).toBeInTheDocument();
  });

  it('renders a sign in button', () => {
    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.getByTestId(testIDs.signInButton)).toBeInTheDocument();
  });
});
