import { render, screen } from '@testing-library/react';

import Input from '.';

describe('Input', () => {
  it('renders a input box', () => {
    const props = {
      id: 'email',
      type: 'email',
      required: true,
      dataTestId: 'email_input',
    };

    render(<Input {...props} />);

    const input = screen.getByTestId(props.dataTestId);

    expect(input).toBeVisible();
    expect(input).toHaveAttribute('type', props.type);
  });
});
