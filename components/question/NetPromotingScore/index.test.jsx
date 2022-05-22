import { render, screen } from '@testing-library/react';

import NetPromotingScore, { netPromotingScoreTestIds } from '.';

describe('NetPromotingScore', () => {
  const props = {
    id: '1',
    answers: [
      {
        id: '1',
      },
      {
        id: '2',
      },
    ],
    setSurveyQuestionsWithAnswers: jest.fn(),
  };

  beforeEach(() => {
    render(<NetPromotingScore {...props} />);
  });

  it('renders a NPS component', () => {
    const netPromotingScore = screen.getByTestId(netPromotingScoreTestIds.base);

    expect(netPromotingScore).toBeVisible();
  });

  it('renders scores equal to one less than the length of the answers', () => {
    const totalScore = screen.getAllByTestId(netPromotingScoreTestIds.score);

    expect(totalScore).toHaveLength(props.answers.length - 1);
  });

  it('renders an unlikely score text', () => {
    const unlikelyText = screen.getByTestId(netPromotingScoreTestIds.unlikelyText);

    expect(unlikelyText).toBeVisible();
    expect(unlikelyText).toHaveTextContent('Not at all Likely');
  });

  it('renders a likely score text', () => {
    const likelyText = screen.getByTestId(netPromotingScoreTestIds.likelyText);

    expect(likelyText).toBeVisible();
    expect(likelyText).toHaveTextContent('Extremely Likely');
  });
});
