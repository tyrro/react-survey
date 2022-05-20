const login = () => {
  const mockTokens = {
    tokenType: 'token type',
    accessToken: 'access token',
    refreshToken: 'refresh token',
  };

  window.localStorage.setItem('Authentication', JSON.stringify(mockTokens));
};

Cypress.Commands.add('login', login);
