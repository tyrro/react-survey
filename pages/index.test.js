import { render, screen } from '@testing-library/react';

import Home from './index.page';

describe(Home, () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByTestId('welcome-text');

    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent('Welcome to Next.js!');
  });
});
