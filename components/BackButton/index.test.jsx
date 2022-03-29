import { render, screen } from '@testing-library/react';
import BackButton, { backButtonTestIds } from '.';

describe('BackButton', () => {
  it('renders a back button', () => {
    render(<BackButton />);

    const backButton = screen.getByTestId(backButtonTestIds.button);

    expect(backButton).toBeVisible();
  });
});
