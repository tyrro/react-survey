import Image from 'next/image';

import Alert from '@/components/Alert';
import BackButton from '@/components/BackButton';
import Background from '@/components/Background';
import PasswordResetForm from '@/components/forms/PasswordReset';

import logo from '@/public/logo-large.svg';
import bellIcon from '@/public/bell.svg';

export const passwordResetPageTestIds = {
  headlineText: 'password-reset__headline-text',
};

const SUCCESS_TITLE = 'Check your email';
const SUCCESS_DESCRIPTION = "We've emailed you instructions to reset your password";

const PasswordReset = () => {
  return (
    <Background imagePath="/background.png">
      <div className="h-full">
        <div className="pl-8 pt-8">
          <BackButton />
        </div>
        <div className="w-[327px] absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
          <div className="mb-8">
            <div className="h-10 text-center mb-6">
              <Image src={logo} alt="logo" />
            </div>
            <p className="text-white/60 text-center text-base-large" data-test-id={passwordResetPageTestIds.headlineText}>
              Enter your email to receive instruction for resetting your password
            </p>
          </div>
          <div className="mb-6">
            <Alert icon={bellIcon} title={SUCCESS_TITLE} description={SUCCESS_DESCRIPTION} />
          </div>
          <PasswordResetForm />
        </div>
      </div>
    </Background>
  );
};

export default PasswordReset;