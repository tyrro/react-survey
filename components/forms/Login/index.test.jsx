import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import LoginForm, { loginFormTestIds } from '.';

import authenticationAdapter from 'adapters/Authentication';

describe('LoginForm', () => {
  const email = 'john@doe.io';

  const typeEmail = () => {
    const emailInput = screen.getByTestId(loginFormTestIds.emailField);

    fireEvent.change(emailInput, { target: { value: email } });
  };

  const password = 'asd123';

  const typePassword = () => {
    const passwordInput = screen.getByTestId(loginFormTestIds.passwordField);

    fireEvent.change(passwordInput, { target: { value: password } });
  };

  const clickLoginButton = () => {
    const loginButton = screen.getByTestId(loginFormTestIds.loginButton);

    loginButton.click();
  };

  it('renders an email label', async () => {
    await act(async () => {
      render(<LoginForm />);
    });

    const emailLabel = screen.getByTestId(loginFormTestIds.emailLabel);

    expect(emailLabel).toBeVisible();
    expect(emailLabel).toHaveTextContent('Email');
  });

  it('renders an email input field', async () => {
    await act(async () => {
      render(<LoginForm />);
    });

    const emailInput = screen.getByTestId(loginFormTestIds.emailField);

    expect(emailInput).toBeVisible();
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('renders a password field', async () => {
    await act(async () => {
      render(<LoginForm />);
    });

    const passwordLabel = screen.getByTestId(loginFormTestIds.passwordLabel);

    expect(passwordLabel).toBeVisible();
    expect(passwordLabel).toHaveTextContent('Password');
  });

  it('renders a password input field', async () => {
    await act(async () => {
      render(<LoginForm />);
    });

    const passwordInput = screen.getByTestId(loginFormTestIds.passwordField);

    expect(passwordInput).toBeVisible();
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('renders a login button', async () => {
    await act(async () => {
      render(<LoginForm />);
    });

    const loginButton = screen.getByTestId(loginFormTestIds.loginButton);

    expect(loginButton).toBeVisible();
    expect(loginButton).toHaveTextContent('Sign in');
    expect(loginButton).toHaveAttribute('type', 'submit');
  });

  describe('given the login button is clicked', () => {
    const tokenType = 'token type';
    const successResponse = { data: { attributes: { tokenType } } };

    it('calls login adapter', async () => {
      const loginSpy = jest.spyOn(authenticationAdapter, 'login').mockResolvedValue(successResponse);

      await act(async () => {
        render(<LoginForm />);
      });

      typeEmail();
      typePassword();
      clickLoginButton();

      expect(loginSpy).toBeCalledWith(email, password);

      loginSpy.mockRestore();
    });
  });
});
