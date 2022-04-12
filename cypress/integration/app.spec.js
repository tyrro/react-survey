/// <reference types="cypress" />

describe('Homepage', () => {
  it('displays a welcome text', () => {
    cy.visit('/');
    // TODO Write UI tests
    // expect(cy.findByTestId('welcome-text').contains('Welcome'));
  });
});
