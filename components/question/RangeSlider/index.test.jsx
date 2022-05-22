import { fireEvent, render, screen } from '@testing-library/react';

import RangeSlider, { rangeSliderTestIds } from '.';

describe('RangeSlider', () => {
  const props = {
    id: '1',
    answers: [
      {
        id: '1',
      },
      {
        id: '2',
      },
      {
        id: '3',
      },
    ],
    setSurveyQuestionsWithAnswers: jest.fn(),
  };

  beforeEach(() => {
    render(<RangeSlider {...props} />);
  });

  it('renders a range type input', () => {
    const rangeSlider = screen.getByTestId(rangeSliderTestIds.input);

    expect(rangeSlider).toBeVisible();
  });

  it('shows changes in input range', () => {
    const inputValue = '2';
    const rangeSlider = screen.getByTestId(rangeSliderTestIds.input);

    expect(rangeSlider).toHaveValue('0');

    fireEvent.change(rangeSlider, { target: { value: inputValue } });

    expect(rangeSlider).toHaveValue(inputValue);
  });
});
