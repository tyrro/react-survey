import Link from 'next/link';
import { useState } from 'react';

import Alert from '@/components/Alert';
import Button from '@/components/Button';
import Input from '@/components/Input';

import errorIcon from '@/public/circle-exclamation.svg';

import authenticationAdapter from 'adapters/Authentication';
import useUser from 'hooks/useUser';
import { setToken } from 'helpers/authentication';

export const loginFormTestIds = {
  form: 'login-form',
  emailLabel: 'login-form__email',
  emailField: 'login-form__input-email',
  passwordLabel: 'login-form__password',
  passwordField: 'login-form__input-password',
  loginButton: 'login-form__button',
};

const LoginForm = () => {
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true,
  });

  const SUCCESS_TITLE = 'Login failed';
  const SUCCESS_DESCRIPTION = 'Check whether you email is registered with us or if your password is correct';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginUnsuccessful, setIsLoginUnsuccessful] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const {
        data: { attributes },
      } = await authenticationAdapter.login(email, password);
      const { tokenType, accessToken, refreshToken } = attributes;
      setToken(tokenType, accessToken, refreshToken);
      mutateUser();
    } catch (error) {
      console.log(error);
      setIsLoginUnsuccessful(true);
    }
  };

  return (
    <>
      {isLoginUnsuccessful && (
        <div className="mb-6">
          <Alert icon={errorIcon} title={SUCCESS_TITLE} description={SUCCESS_DESCRIPTION} />
        </div>
      )}
      <form className="w-full" data-test-id={loginFormTestIds.form} onSubmit={() => handleSubmit(event)}>
        <div className="mb-6">
          <label
            className="block text-white text-base-small font-extrabold mb-2"
            htmlFor="email"
            data-test-id={loginFormTestIds.emailLabel}
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            data-test-id={loginFormTestIds.emailField}
            required
            onChange={() => setEmail(event.target.value)}
          />
        </div>
        <div className="relative mb-6">
          <label
            className="block text-white text-base-small font-extrabold mb-2"
            htmlFor="password"
            data-test-id={loginFormTestIds.passwordLabel}
          >
            Password
          </label>
          <Input
            id="password"
            type="password"
            data-test-id={loginFormTestIds.passwordField}
            required
            className="pr-[23%]"
            onChange={() => setPassword(event.target.value)}
          />
          <Link href="/reset-password">
            <a className="absolute text-white/50 text-base-small right-3 bottom-4">Forgot?</a>
          </Link>
        </div>
        <Button type="submit" size="medium" data-test-id={loginFormTestIds.loginButton}>
          Sign in
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
