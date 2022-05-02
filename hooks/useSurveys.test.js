import { renderHook } from '@testing-library/react-hooks';

import useSurveys from './useSurveys';
import surveyAdapter from 'adapters/Survey';

describe('useSurveys', () => {
  const currentPage = 1;

  describe('given NO user is logged in', () => {
    it('does not return any data', () => {
      const user = { isLoggedIn: false };
      const { result } = renderHook(() => useSurveys(user, currentPage));

      expect(result.current).toBeUndefined();
    });
  });

  describe('given user is logged in', () => {
    const surveysAttributes = [
      {
        id: 'id',
        attributes: {
          title: 'a survey card',
          description: 'a nice survey card',
          coverImageUrl: '/cover.png',
        },
      },
    ];

    const metaAttributes = {
      page: 1,
      pages: 1,
    };

    const successResponse = {
      data: surveysAttributes,
      meta: metaAttributes,
    };

    it('returns profile data', async () => {
      const user = { isLoggedIn: true };
      jest.spyOn(surveyAdapter, 'fetchSurveys').mockResolvedValue(successResponse);

      const { result, waitForNextUpdate } = renderHook(() => useSurveys(user, currentPage));

      await waitForNextUpdate();

      expect(result.current).toEqual(successResponse);
    });
  });
});
