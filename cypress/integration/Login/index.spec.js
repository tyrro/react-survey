const loginPageTestIds = {
  inputEmail: 'login-form__input-email',
  inputPassword: 'login-form__input-password',
  submitButton: 'login-form__button',
};

describe('Login page', () => {
  context('given valid credentials', () => {
    it('redirects user to home page', () => {
      cy.intercept('POST', '**/api/v1/oauth/token', { fixture: 'Authentication/OauthToken/valid.json' });

      cy.visit('/login');
      cy.findByTestId(loginPageTestIds.inputEmail).type('john@doe.io');
      cy.findByTestId(loginPageTestIds.inputPassword).type('asd123');

      cy.findByTestId(loginPageTestIds.submitButton).click();

      cy.get('.react-loading-skeleton').should('be.visible');

      cy.location().should(location => {
        expect(location.pathname).to.eq('/');
      });
    });
  });
});
