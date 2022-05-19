import { render, screen } from '@testing-library/react';

import SurveyOutro, { surveyOutroTestIds } from '.';

describe('SurveyOutro', () => {
  beforeEach(() => {
    render(<SurveyOutro />);
  });

  it('renders a SurveyOutro component', () => {
    const SurveyOutro = screen.getByTestId(surveyOutroTestIds.base);

    expect(SurveyOutro).toBeVisible();
  });

  it('renders an animation', () => {
    const animation = screen.getByTestId(surveyOutroTestIds.animation);

    expect(animation).toBeVisible();
  });

  it('renders a thank you text', () => {
    const text = screen.getByTestId(surveyOutroTestIds.text);

    expect(text).toBeVisible();
    expect(text).toHaveTextContent('Thanks for taking the survey.');
  });
});
