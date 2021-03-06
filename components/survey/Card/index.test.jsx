import { render, screen } from '@testing-library/react';

import SurveyCard, { surveyCardTestIds } from '.';

import { highResolutionImageUrl } from 'helpers/highResolutionImageUrl';

describe('SurveyCard', () => {
  const props = { surveyId: 'id', title: 'a survey card', description: 'a nice survey card', coverImageUrl: '/cover.png' };

  beforeEach(() => {
    render(<SurveyCard {...props} />);
  });

  it('renders the cover image', () => {
    const coverImage = screen.getByTestId(surveyCardTestIds.coverImageUrl);

    expect(coverImage).toBeVisible();
    expect(coverImage).toHaveAttribute('src', highResolutionImageUrl(props.coverImageUrl));
  });

  it('renders the title', () => {
    const title = screen.getByTestId(surveyCardTestIds.title);

    expect(title).toBeVisible();
    expect(title).toHaveTextContent(props.title);
  });

  it('renders the description', () => {
    const description = screen.getByTestId(surveyCardTestIds.description);

    expect(description).toBeVisible();
    expect(description).toHaveTextContent(props.description);
  });
});
