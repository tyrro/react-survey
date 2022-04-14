import baseAdapter from 'adapters/Base';
import profileAdapter from '.';

describe('profileAdapter', () => {
  describe('fetchUser', () => {
    describe('given an authorization header', () => {
      it('calls the get method from base adapter', () => {
        const getSpy = jest.spyOn(baseAdapter, 'get').mockImplementation(jest.fn());

        const authorizationHeader = 'Bearer token';
        const expectedPath = 'me';
        const requestOptions = { headers: authorizationHeader };

        profileAdapter.fetchUser(authorizationHeader);

        expect(getSpy).toHaveBeenCalledWith(expectedPath, requestOptions);

        getSpy.mockRestore();
      });
    });
  });
});
