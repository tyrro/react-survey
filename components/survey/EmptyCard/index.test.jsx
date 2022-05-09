import { render, screen } from '@testing-library/react';

import EmptySurveyCard, { emptySurveyCardTestIds } from '.';

describe('EmptySurveyCard', () => {
  const props = { setBackgroundImagePath: jest.fn() };

  beforeEach(() => {
    render(<EmptySurveyCard {...props} />);
  });

  it('renders a sunglasses icon', () => {
    const sunglassesIcon = screen.getByTestId(emptySurveyCardTestIds.sunglassesIcon);

    expect(sunglassesIcon).toBeVisible();
  });

  it('renders a survey completed text', () => {
    const surveyCompletedText = screen.getByTestId(emptySurveyCardTestIds.surveyCompletedText);

    expect(surveyCompletedText).toBeVisible();
    expect(surveyCompletedText).toHaveTextContent("You've completed all the surveys. Take a moment.");
  });
});
