import { authTokenKey, clearToken, getToken, setToken } from './authentication';

describe('Authentication helper', () => {
  const mockStorage = {};
  const mockLocalStorageGetItem = key => {
    return mockStorage[key];
  };
  const mockLocalStorageSetItem = (key, value) => {
    mockStorage[key] = value;
  };
  const mockLocalStorageRemoveItem = key => {
    mockStorage[key] = undefined;
  };

  const mockTokenType = 'token type';
  const mockAccessToken = 'access token';
  const mockRefreshToken = 'refresh token';

  beforeEach(() => {
    window.Storage.prototype.getItem = mockLocalStorageGetItem;
    window.Storage.prototype.setItem = mockLocalStorageSetItem;
    window.Storage.prototype.removeItem = mockLocalStorageRemoveItem;
  });

  describe('getToken', () => {
    beforeEach(() => {
      const mockTokens = {
        tokenType: mockTokenType,
        accessToken: mockAccessToken,
        refreshToken: mockRefreshToken,
      };
      mockStorage[authTokenKey] = JSON.stringify(mockTokens);
    });

    it('returns the tokens from local storage', () => {
      const tokens = getToken();

      expect(tokens.tokenType).toEqual(mockTokenType);
      expect(tokens.accessToken).toEqual(mockAccessToken);
      expect(tokens.refreshToken).toEqual(mockRefreshToken);
    });
  });

  describe('setToken', () => {
    it('sets the tokens to local storage', () => {
      const mockTokens = {
        tokenType: mockTokenType,
        accessToken: mockAccessToken,
        refreshToken: mockRefreshToken,
      };

      const setItemSpy = jest.spyOn(window.Storage.prototype, 'setItem');

      setToken(mockTokenType, mockAccessToken, mockRefreshToken);

      expect(setItemSpy).toBeCalledWith(authTokenKey, JSON.stringify(mockTokens));

      setItemSpy.mockRestore();
    });
  });

  describe('clearToken', () => {
    beforeEach(() => {
      const mockTokens = {
        tokenType: mockTokenType,
        accessToken: mockAccessToken,
        refreshToken: mockRefreshToken,
      };
      mockStorage[authTokenKey] = JSON.stringify(mockTokens);
    });

    it('clears the tokens from local storage', () => {
      const removeItemSpy = jest.spyOn(window.Storage.prototype, 'removeItem');

      clearToken();

      expect(removeItemSpy).toBeCalledWith(authTokenKey);

      removeItemSpy.mockRestore();
    });
  });
});
