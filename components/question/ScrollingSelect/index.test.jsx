import { render, screen } from '@testing-library/react';

import ScrollingSelect, { scrollingSelectTestIds } from '.';

import { buildSelectOptions } from './buildSelectOptions';

jest.mock('./buildSelectOptions');

describe('ScrollingSelect', () => {
  const props = {
    id: '1',
    pick: 'any',
    survey: {},
    answers: [
      {
        id: '1',
      },
    ],
    setSurveyQuestionsWithAnswers: jest.fn(),
  };

  const mockSelectOptions = [
    {
      label: 'name',
      value: 'name',
      selected: false,
    },
    {
      label: 'email',
      value: 'email',
      selected: false,
    },
    {
      label: 'phone',
      value: 'phone',
      selected: false,
    },
  ];

  beforeEach(() => {
    buildSelectOptions.mockImplementation(() => mockSelectOptions);
  });

  it('renders a scrollingSelect component', () => {
    render(<ScrollingSelect {...props} />);

    const scrollingSelect = screen.getByTestId(scrollingSelectTestIds.base);

    expect(scrollingSelect).toBeVisible();
  });

  it('renders select options equal to the provided options', () => {
    render(<ScrollingSelect {...props} />);

    const totalSelectOptions = screen.getAllByTestId(scrollingSelectTestIds.option);

    expect(totalSelectOptions).toHaveLength(mockSelectOptions.length);
  });

  describe('given the question pick is any', () => {
    it('renders a multi select box', () => {
      render(<ScrollingSelect {...props} />);

      const circleCheckIcons = screen.getAllByTestId(scrollingSelectTestIds.icon);

      expect(circleCheckIcons).toHaveLength(mockSelectOptions.length);
    });
  });

  describe('given the question pick is any', () => {
    it('renders a multi select box', () => {
      render(<ScrollingSelect {...props} />);

      const circleCheckIcons = screen.getAllByTestId(scrollingSelectTestIds.icon);

      expect(circleCheckIcons).toHaveLength(mockSelectOptions.length);
    });
  });

  describe('given the question pick is one', () => {
    it('renders a single select box', () => {
      render(<ScrollingSelect {...props} pick="one" />);

      const circleCheckIcon = screen.queryByTestId(scrollingSelectTestIds.icon);

      expect(circleCheckIcon).toBeNull();
    });
  });
});
