import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { alertTestIds } from '@/components/Alert';
import PasswordResetForm, { passwordResetFormTestIds } from '.';

import authenticationAdapter from 'adapters/Authentication';

describe('PasswordResetForm', () => {
  const email = 'john@doe.io';

  const typeEmail = () => {
    const emailInput = screen.getByTestId(passwordResetFormTestIds.emailField);

    fireEvent.change(emailInput, { target: { value: email } });
  };

  const clickPasswordResetButton = () => {
    const loginButton = screen.getByTestId(passwordResetFormTestIds.passwordResetButton);

    loginButton.click();
  };

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
    const passwordResetButton = screen.getByTestId(passwordResetFormTestIds.passwordResetButton);

    expect(passwordResetButton).toBeVisible();
    expect(passwordResetButton).toHaveTextContent('Send Recovery Email');
    expect(passwordResetButton).toHaveAttribute('type', 'submit');
  });

  describe('given the login button is clicked', () => {
    const successResponse = {
      data: {
        meta: {
          message:
            'If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.',
        },
      },
    };

    it('calls resetPassword adapter', async() => {
      const resetPasswordSpy = jest.spyOn(authenticationAdapter, 'resetPassword').mockResolvedValue(successResponse);

      typeEmail();
      clickPasswordResetButton();

      await waitFor(() => {
        expect(resetPasswordSpy).toBeCalledWith(email);
      });

      resetPasswordSpy.mockRestore();
    });

    it('notifies user about a password reset email', async() => {
      jest.spyOn(authenticationAdapter, 'resetPassword').mockResolvedValue(successResponse);

      typeEmail();
      clickPasswordResetButton();

      await waitFor(() => {
        const emailSentAlert = screen.getByTestId(alertTestIds.base);

        expect(emailSentAlert).toBeVisible();
      });
    });
  });
});
