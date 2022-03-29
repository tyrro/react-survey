import Image from 'next/image';

import Background from '@/components/Background';
import LoginForm from '@/components/forms/Login';

import logo from '../public/logo.svg';

export const loginPageTestIds = {
  headlineText: 'headline-text',
};

const Login = () => {
  return (
    <Background imagePath="/background.png">
      <div className="h-full w-80 m-auto flex flex-col justify-center items-center">
        <div className="mb-8">
          <div className="mb-5">
            <Image src={logo} alt="logo" height={48} />
          </div>
          <p className="text-white/60 text-center text-base-large" data-test-id={loginPageTestIds.headlineText}>
            Sign in to Nimble
          </p>
        </div>
        <LoginForm />
      </div>
    </Background>
  );
};

export default Login;
