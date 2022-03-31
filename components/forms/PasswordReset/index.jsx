import Input from '@/components/Input';
import Button from '@/components/Button';

export const passwordResetFormTestIds = {
  form: 'password-reset-form',
  emailLabel: 'password-reset-form__email',
  emailField: 'password-reset-form__input-email',
  passwordResetButton: 'password-reset-form__button',
};

const PasswordResetForm = () => {
  return (
    <form className="w-full" data-test-id={passwordResetFormTestIds.form}>
      <div className="mb-6">
        <label
          className="block text-white text-base-small font-extrabold mb-2"
          htmlFor="email"
          data-test-id={passwordResetFormTestIds.emailLabel}
        >
          Email
        </label>
        <Input id="email" type="email" data-test-id={passwordResetFormTestIds.emailField} required />
      </div>
      <Button type="submit" size="large" dark={false} data-test-id={passwordResetFormTestIds.passwordResetButton}>
        <div className="pt-1 pr-2">Send Recovery Email</div>
      </Button>
    </form>
  );
};

export default PasswordResetForm;
