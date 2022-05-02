import baseAdapter from 'adapters/Base';
import surveyAdapter from '.';

describe('surveyAdapter', () => {
  describe('fetchSurveys', () => {
    describe('given current page number and an authorization header', () => {
      it('calls the get method from base adapter', () => {
        const getSpy = jest.spyOn(baseAdapter, 'get').mockImplementation(jest.fn());

        const currentPage = 1;
        const authorizationHeader = 'Bearer token';
        const expectedPath = `surveys?page[number]=${currentPage}`;
        const requestOptions = { headers: authorizationHeader };

        surveyAdapter.fetchSurveys(currentPage, authorizationHeader);

        expect(getSpy).toHaveBeenCalledWith(expectedPath, requestOptions);

        getSpy.mockRestore();
      });
    });
  });

  describe('fetchSurvey', () => {
    describe('given a survey id and an authorization header', () => {
      it('calls the get method from base adapter', () => {
        const getSpy = jest.spyOn(baseAdapter, 'get').mockImplementation(jest.fn());

        const surveyId = 1;
        const authorizationHeader = 'Bearer token';
        const expectedPath = `surveys/${surveyId}`;
        const requestOptions = { headers: authorizationHeader };

        surveyAdapter.fetchSurvey(surveyId, authorizationHeader);

        expect(getSpy).toHaveBeenCalledWith(expectedPath, requestOptions);

        getSpy.mockRestore();
      });
    });
  });
});
