import { render, screen } from '@testing-library/react';

import RangeSlider, { rangeSliderTestIds } from '.';

describe('RangeSlider', () => {
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
    render(<RangeSlider {...props} />);
  });

  it('renders a RangeSlider component', () => {
    const rangeSlider = screen.getByTestId(rangeSliderTestIds.base);

    expect(rangeSlider).toBeVisible();
  });

  it('renders a range type input', () => {
    const inputField = screen.getByTestId(rangeSliderTestIds.input);

    expect(inputField).toHaveAttribute('type', 'range');
  });
});
