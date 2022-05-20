const resetPasswordPageTestIds = {
  inputEmail: 'password-reset-form__input-email',
  submitButton: 'password-reset-form__button',
  emailSentAlert: 'alert__description',
};

describe('Reset password page', () => {
  context('given a valid email', () => {
    it('alerts user of an email sent to their mailbox', () => {
      cy.intercept('POST', '**/api/v1/passwords', { fixture: 'Authentication/ResetPassword/valid.json' });

      cy.visit('/reset-password');
      cy.findByTestId(resetPasswordPageTestIds.inputEmail).type('john@doe.io');

      cy.findByTestId(resetPasswordPageTestIds.submitButton).click();

      cy.findByTestId(resetPasswordPageTestIds.emailSentAlert).should('be.visible');
    });
  });
});
