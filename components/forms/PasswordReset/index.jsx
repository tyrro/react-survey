export const passwordResetFormTestIds = {
  form: 'password-reset-form',
  emailLabel: 'email',
  emailField: 'input-email',
  loginButton: 'btn-password-reset',
};

const PasswordReset = () => {
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
        <input
          className="w-full h-14 bg-white/20 text-white text-base-large rounded-xl px-3 py-1.5 focus:outline-none focus:shadow-none"
          id="email"
          data-test-id={passwordResetFormTestIds.emailField}
          type="email"
          required
        />
      </div>
      <button
        className="w-full h-14 bg-white text-base-large font-extrabold rounded-xl"
        data-test-id={passwordResetFormTestIds.loginButton}
        type="submit"
      >
        Send Recovery Email
      </button>
    </form>
  );
};

export default PasswordReset;
