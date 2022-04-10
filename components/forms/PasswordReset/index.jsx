import { useState } from 'react';

import Alert from '@/components/Alert';
import Input from '@/components/Input';
import Button from '@/components/Button';
import bellIcon from '@/public/bell.svg';

import authenticationAdapter from 'adapters/Authentication';

export const passwordResetFormTestIds = {
  form: 'password-reset-form',
  emailLabel: 'password-reset-form__email',
  emailField: 'password-reset-form__input-email',
  passwordResetButton: 'password-reset-form__button',
};

const SUCCESS_TITLE = 'Check your email';
const SUCCESS_DESCRIPTION = "We've emailed you instructions to reset your password";

const PasswordResetForm = () => {
  const [email, setEmail] = useState('');
  const [isPasswordResetRequested, setIsPasswordResetRequested] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await authenticationAdapter.resetPassword(email);
      setIsPasswordResetRequested(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isPasswordResetRequested && (
        <div className="mb-6">
          <Alert icon={bellIcon} title={SUCCESS_TITLE} description={SUCCESS_DESCRIPTION} />
        </div>
      )}
      <form className="w-full" data-test-id={passwordResetFormTestIds.form} onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            className="block text-white text-base-small font-extrabold mb-2"
            htmlFor="email"
            data-test-id={passwordResetFormTestIds.emailLabel}
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            data-test-id={passwordResetFormTestIds.emailField}
            required
            onChange={() => setEmail(event.target.value)}
          />
        </div>
        <Button type="submit" size="large" data-test-id={passwordResetFormTestIds.passwordResetButton}>
          <div className="pt-1 pr-2">Send Recovery Email</div>
        </Button>
      </form>
    </>
  );
};

export default PasswordResetForm;
