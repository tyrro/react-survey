import { useRouter } from 'next/router';
import { render, screen } from '@testing-library/react';

import SurveyDetails, { surveyDetailsTestIds, highResolutionImageUrl } from '.';

import useUser from 'hooks/useUser';
import useSurvey from 'hooks/useSurvey';
import { getQuestionsFromSurvey } from './getQuestionsFromSurvey';

jest.mock('next/router');
jest.mock('hooks/useUser');
jest.mock('hooks/useSurvey');
jest.mock('./getQuestionsFromSurvey');

const surveyId = 1;
const surveyTitle = 'a survey card';
const coverImageUrl = '/cover.png';
const surveyIntroText = 'intro question';

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
    type: 'intro',
    text: surveyIntroText,
  },
];

const props = {
  setBackgroundImagePath: jest.fn(),
};

describe('SurveyDetails', () => {
  beforeEach(() => {
    useRouter.mockReturnValue({ query: { id: surveyId } });
    useUser.mockImplementation(() => jest.fn());
    useSurvey.mockImplementation(() => mockUseSurvey);
    getQuestionsFromSurvey.mockImplementation(() => mockQuestions);

    render(<SurveyDetails {...props} />);
  });

  it('renders the cover image', () => {
    const coverImage = screen.getByTestId(surveyDetailsTestIds.coverImageUrl);

    expect(coverImage).toBeVisible();
    expect(coverImage).toHaveAttribute('src', highResolutionImageUrl(coverImageUrl));
  });

  it('renders the title', () => {
    const title = screen.getByTestId(surveyDetailsTestIds.title);
    expect(title).toBeVisible();
    expect(title).toHaveTextContent(surveyTitle);
  });

  it('renders the question intro text', () => {
    const introText = screen.getByTestId(surveyDetailsTestIds.introText);

    expect(introText).toBeVisible();
    expect(introText).toHaveTextContent(surveyIntroText);
  });
});
