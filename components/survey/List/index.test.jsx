import { render, screen } from '@testing-library/react';

import { surveyCardTestIds } from '@/components/survey/Card';
import SurveyList, { surveyListTestIds } from '.';

import useUser from 'hooks/useUser';
import useSurveys from 'hooks/useSurveys';

jest.mock('hooks/useUser');
jest.mock('hooks/useSurveys');

const mockUseSurveys = [
  {
    id: 'id',
    attributes: {
      title: 'a survey card',
      description: 'a nice survey card',
      coverImageUrl: '/cover.png',
    },
  },
];

const props = {
  setBackgroundImagePath: jest.fn(),
};

describe('SurveyList', () => {
  beforeEach(() => {
    useUser.mockImplementation(() => jest.fn());
    useSurveys.mockImplementation(() => mockUseSurveys);

    render(<SurveyList {...props} />);
  });

  it('renders a today text', () => {
    const text = screen.getByTestId(surveyListTestIds.text);

    expect(text).toBeVisible();
    expect(text).toHaveTextContent('Today');
  });

  it('renders a survey card', () => {
    const surveyCard = screen.getByTestId(surveyCardTestIds.base);

    expect(surveyCard).toBeVisible();
  });
});
