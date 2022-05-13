import { render, screen } from '@testing-library/react';

import SurveySubmit, { surveySubmitTestIds } from '.';

describe('SurveySubmit', () => {
  const props = {
    surveyId: '1',
    surveyResponse: [],
    setIsSurveySubmitted: jest.fn(),
  };

  beforeEach(() => {
    render(<SurveySubmit {...props} />);
  });

  it('renders a submit button', () => {
    const submitButton = screen.getByTestId(surveySubmitTestIds.base);

    expect(submitButton).toBeVisible();
    expect(submitButton).toHaveTextContent('Submit');
    expect(submitButton).toHaveAttribute('type', 'submit');
  });

  describe('given the submit button is clicked', () => {
    it('calls setIsSurveySubmitted function', () => {
      const submitButton = screen.getByTestId(surveySubmitTestIds.base);

      submitButton.click();

      expect(props.setIsSurveySubmitted).toBeCalledWith(true);
    });
  });
});
