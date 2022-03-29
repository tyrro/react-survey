import { render, screen } from '@testing-library/react';
import PasswordResetForm, { passwordResetFormTestIds } from '.';

describe('PasswordResetForm', () => {
  beforeEach(() => {
    render(<PasswordResetForm />);
  });

  it('renders an email label', () => {
    const emailLabel = screen.getByTestId(passwordResetFormTestIds.emailLabel);

    expect(emailLabel).toBeVisible();
    expect(emailLabel).toHaveTextContent('Email');
  });

  it('renders an email input field', () => {
    const emailInput = screen.getByTestId(passwordResetFormTestIds.emailField);

    expect(emailInput).toBeVisible();
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('renders a button to reset password', () => {
    const loginButton = screen.getByTestId(passwordResetFormTestIds.passwordResetButton);

    expect(loginButton).toBeVisible();
    expect(loginButton).toHaveTextContent('Send Recovery Email');
    expect(loginButton).toHaveAttribute('type', 'submit');
  });
});
