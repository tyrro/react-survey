import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import LoginForm, { loginFormTestIds } from '.';

import authenticationAdapter from 'adapters/Authentication';
import useUser from 'hooks/useUser';

jest.mock('hooks/useUser');
const mutateUserMock = jest.fn();

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

  beforeEach(() => {
    useUser.mockImplementation(() => ({ mutateUser: mutateUserMock }));

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

  describe('given the login button is clicked', () => {
    const tokenType = 'token type';
    const successResponse = { data: { attributes: { tokenType } } };

    it('calls login adapter', async () => {
      const loginSpy = jest.spyOn(authenticationAdapter, 'login').mockResolvedValue(successResponse);

      typeEmail();
      typePassword();
      clickLoginButton();

      await waitFor(() => {
        expect(loginSpy).toBeCalledWith(email, password);
        expect(mutateUserMock).toBeCalled();
      });

      loginSpy.mockRestore();
    });
  });
});
