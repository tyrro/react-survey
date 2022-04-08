import '@testing-library/jest-dom/extend-expect';
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-test-id' });

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => {
    return 'Next image stub';
  },
}));

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
  Router: jest.fn(),
}));
