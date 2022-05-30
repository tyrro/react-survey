import baseAdapter from 'adapters/Base';
import surveyAdapter from '.';

describe('surveyAdapter', () => {
  describe('fetchSurveys', () => {
    describe('given current page number', () => {
      it('calls the get method from base adapter', () => {
        const getSpy = jest.spyOn(baseAdapter, 'get').mockImplementation(jest.fn());

        const currentPage = 1;
        const expectedPath = `surveys?page[number]=${currentPage}`;

        surveyAdapter.fetchSurveys(currentPage);

        expect(getSpy).toHaveBeenCalledWith(expectedPath);

        getSpy.mockRestore();
      });
    });
  });

  describe('fetchSurvey', () => {
    describe('given a survey id', () => {
      it('calls the get method from base adapter', () => {
        const getSpy = jest.spyOn(baseAdapter, 'get').mockImplementation(jest.fn());

        const surveyId = 1;
        const expectedPath = `surveys/${surveyId}`;

        surveyAdapter.fetchSurvey(surveyId);

        expect(getSpy).toHaveBeenCalledWith(expectedPath);

        getSpy.mockRestore();
      });
    });
  });

  describe('submitSurvey', () => {
    describe('given the survey response', () => {
      it('calls the post method from base adapter', () => {
        const postSpy = jest.spyOn(baseAdapter, 'post').mockImplementation(jest.fn());

        const surveyOptions = {
          surveyId: '1',
          questions: [
            {
              id: '1',
              answers: [
                {
                  id: '1',
                },
              ],
            },
          ],
        };

        const expectedPath = 'responses';
        const expectedPayload = { surveyOptions };

        surveyAdapter.submitSurvey(expectedPayload);

        expect(postSpy).toHaveBeenCalledWith(expectedPath, expectedPayload);

        postSpy.mockRestore();
      });
    });
  });
});
