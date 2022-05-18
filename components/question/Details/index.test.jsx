import { useRouter } from 'next/router';
import { render, screen } from '@testing-library/react';

import { surveyQuitTestIds } from '@/components/survey/Quit';
import { getQuestionsFromSurvey } from '@/components/survey/Details/getQuestionsFromSurvey';
import QuestionDetails, { questionDetailsTestIds } from '.';

import useUser from 'hooks/useUser';
import useSurvey from 'hooks/useSurvey';

jest.mock('next/router');
jest.mock('hooks/useUser');
jest.mock('hooks/useSurvey');
jest.mock('@/components/survey/Details/getQuestionsFromSurvey');

const surveyId = '1';
const surveyTitle = 'a survey card';
const coverImageUrl = '/cover.png';
const surveyText = 'intro question';

const mockUseSurvey = {
  id: surveyId,
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
  {
    id: '2',
    type: 'star',
    text: surveyText,
    answers: [],
  },
];

const props = {
  setBackgroundImagePath: jest.fn(),
};

describe('QuestionDetails', () => {
  beforeEach(() => {
    useRouter.mockReturnValue({ query: { id: surveyId } });
    useUser.mockImplementation(() => jest.fn());
    useSurvey.mockImplementation(() => mockUseSurvey);
    getQuestionsFromSurvey.mockImplementation(() => mockQuestions);

    render(<QuestionDetails {...props} />);
  });

  it('renders a close icon to quit survey', () => {
    const quitSurveyIcon = screen.getByTestId(surveyQuitTestIds.quitSurveyIcon);

    expect(quitSurveyIcon).toBeVisible();
  });

  it('renders a current question serial text', () => {
    const currentQuestionSerial = screen.getByTestId(questionDetailsTestIds.serial);

    expect(currentQuestionSerial).toBeVisible();
    expect(currentQuestionSerial).toHaveTextContent(`1 / ${mockQuestions.length}`);
  });

  it('renders the current question', () => {
    const currentQuestion = screen.getByTestId(questionDetailsTestIds.text);

    expect(currentQuestion).toBeVisible();
    expect(currentQuestion).toHaveTextContent(mockQuestions[0].text);
  });

  it('renders an angle right icon to go to the next question', () => {
    const angleRightIcon = screen.getByTestId(questionDetailsTestIds.angleRightIcon);

    expect(angleRightIcon).toBeVisible();
  });
});
