import Link from 'next/link';

const Login = () => {
  return (
    <form className="w-80">
      <div className="mb-6">
        <label className="block text-white text-baseSmall font-extrabold mb-2" htmlFor="email">
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
      <div className="mb-6">
        <label className="block text-white text-baseSmall font-extrabold mb-2" htmlFor="password">
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
          <a className="block relative w-1/6 text-white/50 text-baseSmall ml-auto right-3 bottom-3 -mt-6">Forgot?</a>
        </Link>
      </div>
      <button className="w-full h-14 bg-white text-baseLarge font-extrabold rounded-xl" data-test-id="btn-sign-in" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Login;
