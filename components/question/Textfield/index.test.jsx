import { render, screen } from '@testing-library/react';

import Textfield, { textfieldTestIds } from '.';

import { buildTextfieldData } from './buildTextfieldData';

jest.mock('./buildTextfieldData');

describe('Textfield', () => {
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

  const mockTextfieldData = [
    {
      id: 1,
      placeholder: 'name',
    },
    {
      id: 2,
      placeholder: 'email',
    },
    {
      id: 3,
      placeholder: 'mobile',
    },
  ];

  beforeEach(() => {
    buildTextfieldData.mockImplementation(() => mockTextfieldData);
    render(<Textfield {...props} />);
  });

  it('renders a textfield component', () => {
    const textfield = screen.getByTestId(textfieldTestIds.base);

    expect(textfield).toBeVisible();
  });

  it('renders input fields equal to the length of the textfield data', () => {
    const totalInputFields = screen.getAllByTestId(textfieldTestIds.input);

    expect(totalInputFields).toHaveLength(mockTextfieldData.length);
  });
});
