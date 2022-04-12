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
      const mockToken = {
        tokenType: mockTokenType,
        accessToken: mockAccessToken,
        refreshToken: mockRefreshToken,
      };
      mockStorage[authTokenKey] = JSON.stringify(mockToken);
    });

    it('returns the token from local storage', () => {
      const token = getToken();

      expect(token.tokenType).toEqual(mockTokenType);
      expect(token.accessToken).toEqual(mockAccessToken);
      expect(token.refreshToken).toEqual(mockRefreshToken);
    });
  });

  describe('setToken', () => {
    it('sets the token to local storage', () => {
      const mockToken = {
        tokenType: mockTokenType,
        accessToken: mockAccessToken,
        refreshToken: mockRefreshToken,
      };

      const setItemSpy = jest.spyOn(window.Storage.prototype, 'setItem');

      setToken(mockTokenType, mockAccessToken, mockRefreshToken);

      expect(setItemSpy).toBeCalledWith(authTokenKey, JSON.stringify(mockToken));

      setItemSpy.mockRestore();
    });
  });

  describe('clearToken', () => {
    beforeEach(() => {
      const mockToken = {
        tokenType: mockTokenType,
        accessToken: mockAccessToken,
        refreshToken: mockRefreshToken,
      };
      mockStorage[authTokenKey] = JSON.stringify(mockToken);
    });

    it('clears the token from local storage', () => {
      const removeItemSpy = jest.spyOn(window.Storage.prototype, 'removeItem');

      clearToken();

      expect(removeItemSpy).toBeCalledWith(authTokenKey);

      removeItemSpy.mockRestore();
    });
  });
});
