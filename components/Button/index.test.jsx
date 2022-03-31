import { render, screen } from '@testing-library/react';

import Button, { SIZE_CLASSES } from '.';

describe('Button', () => {
  it('renders a button', () => {
    const props = {
      type: 'reset',
      size: 'small',
      dark: true,
      dataTestId: 'reset_button',
    };

    const label = 'Reset';

    render(<Button {...props}>{label}</Button>);

    const button = screen.getByTestId(props.dataTestId);

    expect(button).toBeVisible();
    expect(button).toHaveTextContent(label);
    expect(button).toHaveAttribute('type', props.type);
    expect(button).toHaveClass(SIZE_CLASSES[props.size]);
    expect(button).toHaveClass('bg-dark');
  });
});
