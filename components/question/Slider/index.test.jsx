import { render, screen } from '@testing-library/react';

import Slider, { sliderTestIds } from '.';

describe('Slider', () => {
  const props = {
    id: '1',
    answers: [
      {
        id: '1',
      },
    ],
    setSurveyQuestionsWithAnswers: jest.fn(),
  };

  beforeEach(() => {
    render(<Slider {...props} />);
  });

  it('renders a slider component', () => {
    const slider = screen.getByTestId(sliderTestIds.base);

    expect(slider).toBeVisible();
  });

  it('renders a range type input', () => {
    const inputField = screen.getByTestId(sliderTestIds.input);

    expect(inputField).toHaveAttribute('type', 'range');
  });
});
