import { render, screen } from '@testing-library/react';

import { surveyCardTestIds } from '@/components/survey/Card';
import { emptySurveyCardTestIds } from '@/components/survey/EmptyCard';
import SurveyList, { surveyListTestIds } from '.';

import useUser from 'hooks/useUser';
import useSurveys from 'hooks/useSurveys';

jest.mock('hooks/useUser');
jest.mock('hooks/useSurveys');

const mockUseSurveys = {
  data: [
    {
      id: 'id',
      attributes: {
        title: 'a survey card',
        description: 'a nice survey card',
        coverImageUrl: '/cover.png',
      },
    },
  ],
  meta: {
    page: 1,
    pages: 1,
  },
};

const props = {
  setBackgroundImagePath: jest.fn(),
};

describe('SurveyList', () => {
  beforeEach(() => {
    useUser.mockImplementation(() => jest.fn());
  });

  it('renders a today text', () => {
    useSurveys.mockImplementation(() => mockUseSurveys);
    render(<SurveyList {...props} />);

    const text = screen.getByTestId(surveyListTestIds.text);

    expect(text).toBeVisible();
    expect(text).toHaveTextContent('Today');
  });

  it('renders a survey card', () => {
    useSurveys.mockImplementation(() => mockUseSurveys);
    render(<SurveyList {...props} />);

    const surveyCard = screen.getByTestId(surveyCardTestIds.base);

    expect(surveyCard).toBeVisible();
  });

  it("does't render empty survey card", () => {
    useSurveys.mockImplementation(() => mockUseSurveys);
    render(<SurveyList {...props} />);

    const emptySurveyCard = screen.queryByTestId(emptySurveyCardTestIds.base);

    expect(emptySurveyCard).toBeNull();
  });

  describe('given surveys are empty', () => {
    const emptySurveys = {
      data: [],
      meta: {
        page: 1,
        pages: 0,
        records: 0,
      },
    };

    it('renders empty survey card', () => {
      useSurveys.mockImplementation(() => emptySurveys);
      render(<SurveyList {...props} />);

      const emptySurveyCard = screen.getByTestId(emptySurveyCardTestIds.base);

      expect(emptySurveyCard).toBeVisible();
    });
  });
});
