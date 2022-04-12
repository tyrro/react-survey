export const authTokenKey = 'Authentication';

export const getToken = () => {
  const jsonAuthToken = localStorage.getItem(authTokenKey);
  if (!jsonAuthToken) {
    return;
  }

  const token = JSON.parse(jsonAuthToken);

  return token;
};

export const setToken = (tokenType, accessToken, refreshToken) => {
  const token = {
    tokenType,
    accessToken,
    refreshToken,
  };

  localStorage.setItem(authTokenKey, JSON.stringify(token));
};

export const clearToken = () => {
  localStorage.removeItem(authTokenKey);
};
