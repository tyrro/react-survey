/// <reference types="cypress" />

describe('Homepage', () => {
  it('displays a welcome text', () => {
    cy.visit('/');
    expect(cy.findByTestId('welcome-text').contains('Welcome'));
  });
});
