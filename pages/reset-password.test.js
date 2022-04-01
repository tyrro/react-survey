import { render, screen } from '@testing-library/react';

import { passwordResetFormTestIds } from '@/components/forms/PasswordReset';
import PasswordReset, { passwordResetPageTestIds } from './reset-password';

describe('PasswordReset', () => {
  beforeEach(() => {
    render(<PasswordReset />);
  });

  it('renders a password reset headline', () => {
    const headlineText = screen.getByTestId(passwordResetPageTestIds.headlineText);

    expect(headlineText).toBeVisible();
    expect(headlineText).toHaveTextContent('Enter your email to receive instruction for resetting your password');
  });

  it('renders a password reset form', () => {
    const logInForm = screen.getByTestId(passwordResetFormTestIds.form);

    expect(logInForm).toBeVisible();
  });
});
