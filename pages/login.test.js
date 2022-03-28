import { render, screen } from '@testing-library/react';
import Login from './login';

describe(Login, () => {
  it('renders sign in text', () => {
    render(<Login />);

    const signInText = screen.getByTestId('sign-in-text');

    expect(signInText).toBeVisible();
    expect(signInText).toHaveTextContent('Sign in to Nimble');
  });
});
