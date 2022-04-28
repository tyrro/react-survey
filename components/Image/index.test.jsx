import { render, screen } from '@testing-library/react';

import Image from '.';

describe('Image', () => {
  it('renders the provided image', () => {
    const props = {
      src: '/image.svg',
      alt: 'image',
      'data-test-id': 'image',
    };

    render(<Image {...props} />);

    const image = screen.getByTestId(props['data-test-id']);

    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', props.src);
  });
});
