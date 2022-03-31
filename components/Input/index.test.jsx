import { render, screen } from '@testing-library/react';

import Input from '.';

describe('Input', () => {
  it('renders a input box', () => {
    const props = {
      id: 'email',
      type: 'email',
      required: true,
      className: 'email-bold',
      'data-test-id': 'email_input',
    };

    render(<Input {...props} />);

    const input = screen.getByTestId(props['data-test-id']);

    expect(input).toBeVisible();
    expect(input).toHaveAttribute('type', props.type);
    expect(input).toHaveClass(props.className);
  });
});
