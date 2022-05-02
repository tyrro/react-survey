import { renderHook } from '@testing-library/react-hooks';

import useSurvey from './useSurvey';
import surveyAdapter from 'adapters/Survey';

describe('useSurvey', () => {
  const surveyId = 1;

  describe('given NO user is logged in', () => {
    it('does not return any data', () => {
      const user = { isLoggedIn: false };
      const { result } = renderHook(() => useSurvey(user, surveyId));

      expect(result.current).toBeUndefined();
    });
  });

  describe('given user is logged in', () => {
    const surveyAttributes = {
      title: 'a survey',
      coverImageUrl: '/cover.png',
    };

    const successResponse = {
      id: surveyId,
      data: {
        attributes: surveyAttributes,
      },
    };

    it('returns survey data', async () => {
      const user = { isLoggedIn: true };
      jest.spyOn(surveyAdapter, 'fetchSurvey').mockResolvedValue(successResponse);

      const { result, waitForNextUpdate } = renderHook(() => useSurvey(user, surveyId));

      await waitForNextUpdate();

      expect(result.current).toEqual(successResponse);
    });
  });
});
