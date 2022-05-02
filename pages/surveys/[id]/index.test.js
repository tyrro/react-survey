import { useRouter } from 'next/router';
import { render, screen } from '@testing-library/react';

import { surveyDetailsTestIds } from '@/components/survey/Details';
import { backButtonTestIds } from '@/components/BackButton';
import { getQuestionsFromSurvey } from '@/components/survey/Details/getQuestionsFromSurvey';
import Survey from './index.page';

import useUser from 'hooks/useUser';
import useSurvey from 'hooks/useSurvey';

jest.mock('next/router');
jest.mock('hooks/useUser');
jest.mock('hooks/useSurvey');
jest.mock('@/components/survey/Details/getQuestionsFromSurvey');

const surveyId = 1;
const surveyTitle = 'a survey card';
const coverImageUrl = '/cover.png';
const surveyIntroText = 'intro question';

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

const mockQuestions = [
  {
    type: 'intro',
    text: surveyIntroText,
  },
];

describe('Survey', () => {
  beforeEach(() => {
    useRouter.mockReturnValue({ query: { id: surveyId } });
    useUser.mockImplementation(() => mockUseUser);
    useSurvey.mockImplementation(() => mockUseSurvey);
    getQuestionsFromSurvey.mockImplementation(() => mockQuestions);

    render(<Survey />);
  });

  it('renders a back button', () => {
    const backButton = screen.getByTestId(backButtonTestIds.button);

    expect(backButton).toBeVisible();
  });

  it('renders SurveyDetails component', () => {
    const surveyDetails = screen.getByTestId(surveyDetailsTestIds.base);

    expect(surveyDetails).toBeVisible();
  });
});
