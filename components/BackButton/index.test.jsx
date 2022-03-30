import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';

import BackButton, { backButtonTestIds } from '.';

describe('BackButton', () => {
  it('renders a back button', () => {
    render(<BackButton />);

    const backButton = screen.getByTestId(backButtonTestIds.button);

    expect(backButton).toBeVisible();
  });

  it('goes to the previous page upon click', () => {
    const mockRouter = { back: jest.fn() };
    useRouter.mockReturnValue(mockRouter);

    render(<BackButton />);

    const backButton = screen.getByTestId(backButtonTestIds.button);
    fireEvent.click(backButton);

    expect(backButton).toBeVisible();

    expect(mockRouter.back).toHaveBeenCalledTimes(1);
  });
});
