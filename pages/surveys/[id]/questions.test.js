import { useRouter } from 'next/router';
import { render, screen } from '@testing-library/react';

import { questionDetailsTestIds } from '@/components/question/Details';
import { surveyQuitTestIds } from '@/components/survey/Quit';
import Questions from './questions.page';

import useUser from 'hooks/useUser';
import useSurvey from 'hooks/useSurvey';

jest.mock('next/router');
jest.mock('hooks/useUser');
jest.mock('hooks/useSurvey');

const surveyId = 1;
const surveyTitle = 'a survey card';
const coverImageUrl = '/cover.png';

const mockUseUser = {
  user: {
    isLoggedIn: true,
  },
};

const mockUseSurvey = {
  id: 'id',
  data: {
    attributes: {
      title: surveyTitle,
      coverImageUrl,
    },
  },
};

describe('Questions', () => {
  beforeEach(() => {
    useRouter.mockReturnValue({ query: { id: surveyId } });
    useUser.mockImplementation(() => mockUseUser);
    useSurvey.mockImplementation(() => mockUseSurvey);

    render(<Questions />);
  });

  it('renders a close icon to quit survey', () => {
    const quitSurveyIcon = screen.getByTestId(surveyQuitTestIds.quitSurveyIcon);

    expect(quitSurveyIcon).toBeVisible();
  });

  it('renders QuestionDetails component', () => {
    const questionDetails = screen.getByTestId(questionDetailsTestIds.base);

    expect(questionDetails).toBeVisible();
  });
});
