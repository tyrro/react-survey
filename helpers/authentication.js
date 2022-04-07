export const authTokenKey = 'Authentication';

export const getToken = () => {
  const jsonAuthTokens = localStorage.getItem(authTokenKey);
  if (!jsonAuthTokens) {
    return;
  }

  const tokens = JSON.parse(jsonAuthTokens);

  return tokens;
};

export const setToken = (tokenType, accessToken, refreshToken) => {
  const tokens = {
    tokenType,
    accessToken,
    refreshToken,
  };

  localStorage.setItem(authTokenKey, JSON.stringify(tokens));
};

export const clearToken = () => {
  localStorage.removeItem(authTokenKey);
};
