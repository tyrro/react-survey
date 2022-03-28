import Image from 'next/image';

import Background from '@/components/Background';
import LoginForm from '@/components/forms/Login';

import logo from '../public/logo.png';

export const loginTestIds = {
  logInText: 'log-in-text',
};

const Login = () => {
  return (
    <Background imagePath="/background.png">
      <div className="mb-8">
        <div className="mb-6">
          <Image src={logo} alt="logo" />
        </div>
        <p className="text-white/60 text-center text-baseLarge" data-test-id={loginTestIds.logInText}>
          Sign in to Nimble
        </p>
      </div>
      <LoginForm />
    </Background>
  );
};

export default Login;
