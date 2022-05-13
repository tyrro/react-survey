import { render, screen } from '@testing-library/react';

import Rating, { ratingTestIds } from '.';

describe('Rating', () => {
  const props = {
    type: 'money',
    id: '1',
    answers: [
      {
        id: '1',
      },
    ],
    setSurveyResponse: jest.fn(),
  };

  beforeEach(() => {
    render(<Rating {...props} />);
  });

  it('renders a rating component', () => {
    const rating = screen.getByTestId(ratingTestIds.base);

    expect(rating).toBeVisible();
  });

  it('renders emojis equal to the length of the answers', () => {
    const totalEmojis = screen.getAllByTestId(ratingTestIds.emoji);

    expect(totalEmojis).toHaveLength(props.answers.length);
  });
});
