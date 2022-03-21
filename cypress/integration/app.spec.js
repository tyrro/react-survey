/// <reference types="cypress" />

describe('Homepage', () => {
  it('displays a welcome text', () => {
    cy.visit('/');
    cy.contains('Welcome');
  });
});
