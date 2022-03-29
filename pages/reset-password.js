import Image from 'next/image';

import Background from '@/components/Background';
import BackButton from '@/components/BackButton';
import PasswordResetForm from '@/components/forms/PasswordReset';

import logo from '@/public/logo.svg';

export const resetPasswordPageTestIds = {
  headlineText: 'headline-text',
};

const PasswordReset = () => {
  return (
    <Background imagePath="/background.png">
      <div className="h-full">
        <div className="pl-8 pt-8">
          <BackButton />
        </div>
        <div className="w-[327px] absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
          <div className="mb-8">
            <div className="h-10 mb-6">
              <Image src={logo} alt="logo" layout="fixed" width="327" height="40" />
            </div>
            <p className="text-white/60 text-center text-base-large" data-test-id={resetPasswordPageTestIds.headlineText}>
              Enter your email to receive instruction for resetting your password
            </p>
          </div>
          <PasswordResetForm />
        </div>
      </div>
    </Background>
  );
};

export default PasswordReset;
