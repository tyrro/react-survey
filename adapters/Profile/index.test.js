import baseAdapter from 'adapters/Base';
import profileAdapter from '.';

describe('profileAdapter', () => {
  describe('fetchUser', () => {
    it('calls the get method from base adapter', () => {
      const getSpy = jest.spyOn(baseAdapter, 'get').mockImplementation(jest.fn());
      const expectedPath = 'me';

      profileAdapter.fetchUser();

      expect(getSpy).toHaveBeenCalledWith(expectedPath);

      getSpy.mockRestore();
    });
  });
});
