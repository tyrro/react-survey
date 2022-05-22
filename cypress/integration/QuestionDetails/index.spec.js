const questionDetailsPageTestIds = {
  closeIcon: 'survey-quit__close-icon',
  surveyQuit: 'survey-quit',
  confirmQuitButton: 'survey-quit__confirm-button',
  cancelQuitButton: 'survey-quit__cancel-button',
  questionSerial: 'question-details__serial',
  questionText: 'question-details__text',
  surveySubmitButton: 'survey-submit',
  thankYouAnimation: 'survey-outro__animation',
};

describe('Question details page', () => {
  const surveyId = 'd5de6a8f8f5f1cfe51bc';
  const questionDetailsUrl = `/surveys/${surveyId}/questions`;

  beforeEach(() => {
    cy.intercept('GET', '**/api/v1/surveys/*', { fixture: 'Survey/Details/valid.json' });
    cy.intercept('POST', '**/api/v1/responses', { fixture: 'Survey/Submit/valid.json' });

    cy.login();

    cy.visit(questionDetailsUrl);
  });

  it('renders the question details', () => {
    cy.findByTestId(questionDetailsPageTestIds.closeIcon).should('be.visible');
    cy.findByTestId(questionDetailsPageTestIds.questionSerial).should('be.visible');
    cy.findByTestId(questionDetailsPageTestIds.questionText).should('be.visible');
    cy.findByTestId(questionDetailsPageTestIds.surveySubmitButton).should('be.visible');
  });

  context('given the circle x-mark icon is clicked', () => {
    it('renders a modal to quit survey', () => {
      cy.findByTestId(questionDetailsPageTestIds.closeIcon).click();

      cy.findByTestId(questionDetailsPageTestIds.surveyQuit).should('be.visible');
    });

    context('given the Yes button is clicked on the modal', () => {
      it('returns to the home page', () => {
        cy.findByTestId(questionDetailsPageTestIds.closeIcon).click();

        cy.findByTestId(questionDetailsPageTestIds.confirmQuitButton).should('be.visible');

        cy.findByTestId(questionDetailsPageTestIds.confirmQuitButton).click();

        cy.location().should(location => {
          expect(location.pathname).to.eq('/');
        });
      });
    });

    context('given the Cancel button is clicked on the modal', () => {
      it('stays on the question details page', () => {
        cy.findByTestId(questionDetailsPageTestIds.closeIcon).click();

        cy.findByTestId(questionDetailsPageTestIds.cancelQuitButton).should('be.visible');

        cy.findByTestId(questionDetailsPageTestIds.cancelQuitButton).click();

        cy.location().should(location => {
          expect(location.pathname).to.eq(questionDetailsUrl);
        });
      });
    });
  });

  context('given the survey is submitted', () => {
    it('shows a thank you animation', () => {
      cy.findByTestId(questionDetailsPageTestIds.surveySubmitButton).click();

      cy.findByTestId(questionDetailsPageTestIds.thankYouAnimation).should('be.visible');
    });
  });
});
