import { render } from '@testing-library/react';

import LoadingSkeleton, { BASE_COLOR, HIGHLIGHT_COLOR, BORDER_RADIUS } from '.';

import { getLoadingSkeleton } from 'tests/loadingSkeleton';

describe('LoadingSkeleton', () => {
  it('renders a skeleton theme with the provided values', () => {
    render(<LoadingSkeleton />);

    const skeleton = getLoadingSkeleton();

    expect(skeleton.style.getPropertyValue('--base-color')).toBe(BASE_COLOR);
    expect(skeleton.style.getPropertyValue('--base-color')).toBe(BASE_COLOR);
    expect(skeleton.style.getPropertyValue('--highlight-color')).toBe(HIGHLIGHT_COLOR);
    expect(skeleton.style.getPropertyValue('border-radius')).toBe(`${BORDER_RADIUS}px`);
  });

  it('renders a loading skeleton', () => {
    render(<LoadingSkeleton circle />);

    const skeleton = getLoadingSkeleton();

    expect(skeleton).toHaveStyle({ borderRadius: '50%' });
  });
});
