import { render, screen } from '@testing-library/react';

import Image from '.';

describe('Image', () => {
  it('renders the provided image', () => {
    const props = {
      src: '/image.svg',
      'data-test-id': 'image',
    };

    render(<Image {...props} alt="image" />);

    const image = screen.getByTestId(props['data-test-id']);

    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', props.src);
  });
});
