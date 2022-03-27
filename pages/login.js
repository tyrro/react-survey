import Image from 'next/image';

import Background from '../components/Background';
import LoginForm from '../components/forms/Login';

import logo from '../public/logo.png';

const Login = () => {
  return (
    <Background imagePath="/background.png">
      <div className="mb-6">
        <div className="mx-6 mb-6">
          <Image src={logo} alt="logo" data-test-id="app-logo" />
        </div>
        <p className="text-white/60 text-center text-baseLarge mb-4">Sign in to Nimble</p>
      </div>
      <LoginForm />
    </Background>
  );
};

export default Login;
