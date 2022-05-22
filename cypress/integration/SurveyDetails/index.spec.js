const surveyDetailsPageTestIds = {
  coverImageUrl: 'survey-details__cover_image_url',
  title: 'survey-details__title',
  introText: 'survey-details__intro-text',
  startSurveyButton: 'survey-details__start-survey',
};

describe('Survey details page', () => {
  const surveyId = 'd5de6a8f8f5f1cfe51bc';

  beforeEach(() => {
    cy.intercept('GET', '**/api/v1/surveys/*', { fixture: 'Survey/Details/valid.json' });

    cy.login();

    cy.visit(`/surveys/${surveyId}`);
  });

  it('renders the survey details', () => {
    cy.findByTestId(surveyDetailsPageTestIds.coverImageUrl).should('be.visible');
    cy.findByTestId(surveyDetailsPageTestIds.introText).should('be.visible');
    cy.findByTestId(surveyDetailsPageTestIds.title).should('be.visible');
  });

  it('renders a button to start the survey', () => {
    cy.findByTestId(surveyDetailsPageTestIds.startSurveyButton).should('be.visible');

    cy.findByTestId(surveyDetailsPageTestIds.startSurveyButton).click();

    cy.location().should(location => {
      expect(location.pathname).to.eq(`/surveys/${surveyId}/questions`);
    });
  });
});
