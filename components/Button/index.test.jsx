import { render, screen } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
  it('renders a button', () => {
    const props = {
      type: 'reset',
      size: 'small',
      dark: true,
      dataTestId: 'reset_button',
      children: 'reset',
    };

    render(<Button {...props} />);

    const button = screen.getByTestId(props.dataTestId);

    expect(button).toBeVisible();
    expect(button).toHaveTextContent(props.children);
    expect(button).toHaveAttribute('type', props.type);
  });
});
