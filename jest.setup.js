import '@testing-library/jest-dom/extend-expect';
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-test-id' });

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...attributes }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} data-test-id={attributes['data-test-id']} onClick={attributes.onClick} />;
  },
}));

// Fix jest issue with the react-slick component
window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));
