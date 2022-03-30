import Link from 'next/link';

import Button from '@/components/Button';
import Input from '@/components/Input';

export const loginFormTestIds = {
  form: 'login__form',
  emailLabel: 'login__email',
  emailField: 'login__input-email',
  passwordLabel: 'login__password',
  passwordField: 'login__input-password',
  loginButton: 'login__button',
};

const LoginForm = () => {
  return (
    <form className="w-full" data-test-id={loginFormTestIds.form}>
      <div className="mb-6">
        <label
          className="block text-white text-base-small font-extrabold mb-2"
          htmlFor="email"
          data-test-id={loginFormTestIds.emailLabel}
        >
          Email
        </label>
        <Input id="email" type="email" dataTestId={loginFormTestIds.emailField} required={true} />
      </div>
      <div className="relative mb-6">
        <label
          className="block text-white text-base-small font-extrabold mb-2"
          htmlFor="password"
          data-test-id={loginFormTestIds.passwordLabel}
        >
          Password
        </label>
        <Input id="password" type="password" dataTestId={loginFormTestIds.passwordField} required={true} className="pr-[23%]" />
        <Link href="/reset-password">
          <a className="absolute text-white/50 text-base-small right-3 bottom-4">Forgot?</a>
        </Link>
      </div>
      <Button type="submit" size="medium" dark={true} dataTestId={loginFormTestIds.loginButton}>
        Sign in
      </Button>
    </form>
  );
};

export default LoginForm;
