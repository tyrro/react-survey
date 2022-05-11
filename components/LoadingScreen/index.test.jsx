import { render } from '@testing-library/react';

import LoadingScreen, { BASE_COLOR, HIGHLIGHT_COLOR, BORDER_RADIUS } from '.';

import { getLoadingScreen } from 'tests/loadingScreen';

describe('LoadingScreen', () => {
  it('renders a skeleton theme with the provided values', () => {
    render(<LoadingScreen />);

    const skeleton = getLoadingScreen();

    expect(skeleton.style.getPropertyValue('--base-color')).toBe(BASE_COLOR);
    expect(skeleton.style.getPropertyValue('--base-color')).toBe(BASE_COLOR);
    expect(skeleton.style.getPropertyValue('--highlight-color')).toBe(HIGHLIGHT_COLOR);
    expect(skeleton.style.getPropertyValue('border-radius')).toBe(`${BORDER_RADIUS}px`);
  });

  it('renders a loading screen skeleton', () => {
    render(<LoadingScreen circle />);

    const skeleton = getLoadingScreen();

    expect(skeleton).toHaveStyle({ borderRadius: '50%' });
  });
});
