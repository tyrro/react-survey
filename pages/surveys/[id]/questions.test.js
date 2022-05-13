import { useRouter } from 'next/router';
import { render, screen } from '@testing-library/react';

import { getQuestionsFromSurvey } from '@/components/survey/Details/getQuestionsFromSurvey';
import { questionDetailsTestIds } from '@/components/question/Details';
import Questions from './questions.page';

import useUser from 'hooks/useUser';
import useSurvey from 'hooks/useSurvey';

jest.mock('next/router');
jest.mock('hooks/useUser');
jest.mock('hooks/useSurvey');
jest.mock('@/components/survey/Details/getQuestionsFromSurvey');

const surveyId = '1';
const surveyTitle = 'a survey card';
const coverImageUrl = '/cover.png';
const surveyText = 'a survey question';

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
    id: '1',
    type: 'smiley',
    text: surveyText,
    answers: [],
  },
];

describe('Questions', () => {
  beforeEach(() => {
    useRouter.mockReturnValue({ query: { id: surveyId } });
    useUser.mockImplementation(() => mockUseUser);
    useSurvey.mockImplementation(() => mockUseSurvey);
    getQuestionsFromSurvey.mockImplementation(() => mockQuestions);

    render(<Questions />);
  });

  it('renders QuestionDetails component', () => {
    const questionDetails = screen.getByTestId(questionDetailsTestIds.base);

    expect(questionDetails).toBeVisible();
  });
});
