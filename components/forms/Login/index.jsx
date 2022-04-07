import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';

export const loginFormTestIds = {
  form: 'login-form',
  emailLabel: 'login-form__email',
  emailField: 'login-form__input-email',
  passwordLabel: 'login-form__password',
  passwordField: 'login-form__input-password',
  loginButton: 'login-form__button',
};

const LoginForm = ({ handleSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="w-full" data-test-id={loginFormTestIds.form} onSubmit={() => handleSubmit(event, email, password)}>
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
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
