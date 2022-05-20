const homePageTestIds = {
  logo: 'header__logo',
  userAvatar: 'header__user-avatar',
  sidebar: 'sidebar',
  logoutButton: 'sidebar__logout-button',
  coverImageUrl: 'survey-card__cover_image_url',
};

describe('Home page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/v1/me', { fixture: 'Authentication/Profile/valid.json' });
    cy.intercept('GET', '**/api/v1/surveys*', { fixture: 'Survey/List/valid.json' });

    cy.login();

    cy.visit('/');
  });

  context('given valid credentials', () => {
    it('renders a header with logo and use avatar', () => {
      cy.findByTestId('header__logo').should('be.visible');
      cy.findByTestId(homePageTestIds.userAvatar).should('be.visible');
    });

    it('renders survey card', () => {
      cy.findByTestId(homePageTestIds.coverImageUrl).should('be.visible');
    });

    context('given the avatar is clicked', () => {
      it('renders a sidebar', () => {
        cy.findByTestId(homePageTestIds.userAvatar).click();

        cy.findByTestId(homePageTestIds.sidebar).should('be.visible');
      });

      it('renders a logout button', () => {
        cy.findByTestId(homePageTestIds.userAvatar).click();

        cy.findByTestId(homePageTestIds.logoutButton).should('be.visible');

        cy.findByTestId(homePageTestIds.logoutButton).click();

        cy.location().should(location => {
          expect(location.pathname).to.eq('/');
        });
      });
    });
  });
});
