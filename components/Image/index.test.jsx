import { render, screen } from '@testing-library/react';

import Image from '.';

describe('Image', () => {
  it('renders the provided icon', () => {
    const props = {
      src: '/icon.svg',
      alt: 'icon',
    };

    const dataTestId = 'icon';

    render(
      <div data-test-id={dataTestId}>
        <Image {...props} />
      </div>,
    );

    const icon = screen.getByTestId(dataTestId);

    expect(icon).toBeVisible();
    expect(icon).toHaveTextContent(props.src);
  });
});
