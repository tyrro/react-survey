import { render, screen } from '@testing-library/react';
import Background from '.';

describe(Background, () => {
  it('renders the children component', () => {
    const props = {
      imagePath: '/background.png',
      children: '<div>Hello</div>',
    };

    render(<Background {...props} />);

    const foregroundChildren = screen.getByTestId('foreground-children');

    expect(foregroundChildren).toHaveTextContent(props.children);
  });
});
