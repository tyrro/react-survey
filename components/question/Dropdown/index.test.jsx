import { render, screen } from '@testing-library/react';

import Dropdown, { dropdownTestIds } from '.';

import { buildDropdownOptions } from './buildDropdownOptions';

jest.mock('./buildDropdownOptions');

describe('Dropdown', () => {
  const mockedOnOptionSelect = jest.fn();

  const props = {
    id: '1',
    survey: {},
    answers: [
      {
        id: '1',
      },
    ],
    setSurveyQuestionsWithAnswers: jest.fn(),
  };

  const mockDropDownOptions = [
    {
      label: 'Good',
      value: '1',
    },
    {
      label: 'Better',
      value: '2',
    },
    {
      label: 'Best',
      value: '3',
    },
  ];

  beforeEach(() => {
    buildDropdownOptions.mockImplementation(() => mockDropDownOptions);
  });

  it('renders a dropdown component', () => {
    render(<Dropdown {...props} onChange={mockedOnOptionSelect} />);
    const dropdown = screen.getByTestId(dropdownTestIds.base);

    expect(dropdown).toBeVisible();
  });
});
