import { render, screen } from '@testing-library/react';

import Background, { backgroundTestIds } from '.';

describe('Background', () => {
  it('renders the children component', () => {
    const props = {
      imagePath: '/background.png',
      children: '<div>Hello</div>',
    };

    render(<Background {...props} />);

    const foregroundChildren = screen.getByTestId(backgroundTestIds.foregroundChildren);

    expect(foregroundChildren).toHaveTextContent(props.children);
  });

  describe('given the imagePath is empty', () => {
    const props = {
      imagePath: '',
    };

    it('renders a dark background', () => {
      render(<Background {...props} />);

      const darkBackground = screen.getByTestId(backgroundTestIds.image);

      expect(darkBackground).toBeVisible();
      expect(darkBackground).toHaveAttribute('alt', 'dark background');
    });
  });
});
