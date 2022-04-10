import { render, screen, waitFor } from '@testing-library/react';

import { loginFormTestIds } from '@/components/forms/Login';
import Login, { loginPageTestIds } from './login.page';

describe('Login', () => {
  it('renders a login headline', async() => {
    render(<Login />);

    await waitFor(() => {
      const headlineText = screen.getByTestId(loginPageTestIds.headlineText);

      expect(headlineText).toBeVisible();
      expect(headlineText).toHaveTextContent('Sign in to Nimble');
    });
  });

  it('renders a login form', async() => {
    render(<Login />);

    await waitFor(() => {
      const logInForm = screen.getByTestId(loginFormTestIds.form);

      expect(logInForm).toBeVisible();
    });
  });
});
