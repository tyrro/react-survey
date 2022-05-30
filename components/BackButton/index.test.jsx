import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import BackButton, { backButtonTestIds } from '.';

jest.mock('next/router');

describe('BackButton', () => {
  it('renders a back button', () => {
    render(<BackButton />);

    const backButton = screen.getByTestId(backButtonTestIds.button);

    expect(backButton).toBeVisible();
  });

  it('routes to the previous page upon click', () => {
    const mockBackButton = jest.fn();
    useRouter.mockReturnValue({ back: mockBackButton });

    render(<BackButton />);

    const backButton = screen.getByTestId(backButtonTestIds.button);
    backButton.click();

    expect(mockBackButton).toHaveBeenCalledTimes(1);
  });
});
