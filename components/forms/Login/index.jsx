import Link from 'next/link';

export const loginFormTestIds = {
  form: 'login-form',
  emailLabel: 'email',
  emailField: 'input-email',
  passwordLabel: 'password',
  passwordField: 'input-password',
  loginButton: 'btn-login',
};

const Login = () => {
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
        <input
          className="w-full h-14 bg-white/20 text-white text-base-large rounded-xl px-3 py-1.5 focus:outline-none focus:shadow-none"
          id="email"
          data-test-id={loginFormTestIds.emailField}
          type="email"
          required
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
        <input
          className="w-full h-14 bg-white/20 text-white text-base-large rounded-xl px-3 py-1.5 pr-[23%] focus:outline-none focus:shadow-none"
          id="password"
          data-test-id={loginFormTestIds.passwordField}
          type="password"
          required
        />
        <Link href="/reset-password">
          <a className="absolute text-white/50 text-base-small right-3 bottom-[18px]">Forgot?</a>
        </Link>
      </div>
      <button
        className="w-full h-14 bg-white text-base-large font-extrabold rounded-xl"
        data-test-id={loginFormTestIds.loginButton}
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
};

export default Login;
