import { useRouter } from 'next/router';
import { render, screen } from '@testing-library/react';

import SurveyQuit, { surveyQuitTestIds } from '.';

jest.mock('next/router');

describe('SurveyQuit', () => {
  beforeEach(() => {
    const mockPushButton = jest.fn();
    useRouter.mockReturnValue({ push: mockPushButton });

    render(<SurveyQuit />);
  });

  it('renders a close icon', () => {
    const quitSurveyIcon = screen.getByTestId(surveyQuitTestIds.quitSurveyIcon);

    expect(quitSurveyIcon).toBeVisible();
  });

  it("doesn't render the survey quit modal", () => {
    const surveyQuitModal = screen.queryByTestId(surveyQuitTestIds.base);

    expect(surveyQuitModal).toBeNull();
  });

  describe('given the close icon is clicked', () => {
    beforeEach(() => {
      const quitSurveyIcon = screen.getByTestId(surveyQuitTestIds.quitSurveyIcon);

      quitSurveyIcon.click();
    });

    it('renders the survey quit modal', async () => {
      const surveyQuitModal = screen.getByTestId(surveyQuitTestIds.base);

      expect(surveyQuitModal).toBeVisible();
    });

    it('renders a warning text', () => {
      const warningText = screen.getByTestId(surveyQuitTestIds.warningText);

      expect(warningText).toBeVisible();
      expect(warningText).toHaveTextContent('Warning!');
    });

    it('renders a quit confirmation text', () => {
      const quitConfirmationText = screen.getByTestId(surveyQuitTestIds.quitConfirmationText);

      expect(quitConfirmationText).toBeVisible();
      expect(quitConfirmationText).toHaveTextContent('Are you sure you want to quit the survey?');
    });

    it('displays buttons to quit modal', () => {
      const quitConfirmationConfirmButton = screen.getByTestId(surveyQuitTestIds.quitConfirmationConfirmButton);
      const quitConfirmationCancelButton = screen.getByTestId(surveyQuitTestIds.quitConfirmationCancelButton);

      expect(quitConfirmationConfirmButton).toBeVisible();
      expect(quitConfirmationConfirmButton).toHaveTextContent('Yes');

      expect(quitConfirmationCancelButton).toBeVisible();
      expect(quitConfirmationCancelButton).toHaveTextContent('Cancel');
    });
  });
});
