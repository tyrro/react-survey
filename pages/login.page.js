import Image from 'next/image';
import { useState } from 'react';

import Alert from '@/components/Alert';
import Background from '@/components/Background';
import LoginForm from '@/components/forms/Login';

import logo from '@/public/logo-large.svg';
import errorIcon from '@/public/circle-exclamation.svg';

import authenticationAdapter from 'adapters/Authentication';
import useUser from 'lib/useUser';
import { setToken } from 'helpers/authentication';

export const loginPageTestIds = {
  headlineText: 'login__headline-text',
};

const SUCCESS_TITLE = 'Login failed';
const SUCCESS_DESCRIPTION = 'Check whether you email is registered with us or if your password is correct';

const Login = () => {
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true,
  });

  const [isLoginUnsuccessful, setIsLoginUnsuccessful] = useState(false);

  const handleSubmit = async (event, email, password) => {
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
    <Background imagePath="/background.png">
      <div className="h-full w-80 m-auto flex flex-col justify-center items-center">
        <div className="mb-8">
          <div className="h-10 text-center mb-6">
            <Image src={logo} alt="logo" />
          </div>
          <p className="text-white/60 text-center text-base-large" data-test-id={loginPageTestIds.headlineText}>
            Sign in to Nimble
          </p>
        </div>
        {isLoginUnsuccessful && (
          <div className="mb-6">
            <Alert icon={errorIcon} title={SUCCESS_TITLE} description={SUCCESS_DESCRIPTION} />
          </div>
        )}
        <LoginForm handleSubmit={handleSubmit} />
      </div>
    </Background>
  );
};

export default Login;
