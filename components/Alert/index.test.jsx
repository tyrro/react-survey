import { render, screen } from '@testing-library/react';

import Alert, { alertTestIds } from '.';

describe('Alert', () => {
  const props = {
    icon: '/icon.png',
    title: 'alert title',
    description: 'alert description',
  };

  beforeEach(() => {
    render(<Alert {...props} />);
  });

  it('renders the provided icon', () => {
    const icon = screen.getByTestId(alertTestIds.icon);

    expect(icon).toBeVisible();
  });

  it('renders the alert title', () => {
    const title = screen.getByTestId(alertTestIds.title);

    expect(title).toBeVisible();
    expect(title).toHaveTextContent(props.title);
  });

  it('renders the alert description', () => {
    const description = screen.getByTestId(alertTestIds.description);

    expect(description).toBeVisible();
    expect(description).toHaveTextContent(props.description);
  });
});
