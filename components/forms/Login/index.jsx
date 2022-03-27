import Link from 'next/link';

const Login = () => {
  return (
    <form className="w-80">
      <div className="h-24 mb-5">
        <label className="block text-white text-base font-extrabold mb-3" htmlFor="email">
          Email
        </label>
        <input
          className="w-full h-14 bg-white/20 text-white text-baseLarge rounded-xl px-3 py-1.5 focus:outline-none focus:shadow-none"
          id="email"
          data-test-id="input-email"
          type="email"
          required
        />
      </div>
      <div className="h-24 mb-5">
        <label className="block text-white text-base font-extrabold mb-3" htmlFor="password">
          Password
        </label>
        <input
          className="w-full h-14 bg-white/20 text-white text-baseLarge rounded-xl px-3 py-1.5 focus:outline-none focus:shadow-none"
          id="password"
          data-test-id="input-password"
          type="password"
          required
        />
        <Link href="/forgot-password">
          <a className="block relative w-1/5 text-white/50 ml-auto bottom-10">Forgot?</a>
        </Link>
      </div>
      <div className="h-24">
        <button className="w-full h-14 bg-white text-baseLarge rounded-xl" data-test-id="btn-login" type="submit">
          Sign In
        </button>
      </div>
    </form>
  );
};

export default Login;
