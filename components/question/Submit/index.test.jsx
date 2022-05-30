import { render, screen, waitFor } from '@testing-library/react';

import SurveySubmit, { surveySubmitTestIds } from '.';

import surveyAdapter from 'adapters/Survey';

describe('SurveySubmit', () => {
  const props = {
    surveyId: '1',
    surveyQuestionsWithAnswers: [],
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
    it('calls setIsSurveySubmitted function', async () => {
      const surveyResponse = {
        surveyId: props.surveyId,
        questions: props.surveyQuestionsWithAnswers,
      };

      const submitSurveySpy = jest.spyOn(surveyAdapter, 'submitSurvey').mockResolvedValue('success');
      const submitButton = screen.getByTestId(surveySubmitTestIds.base);

      submitButton.click();

      expect(submitSurveySpy).toBeCalledWith(surveyResponse);
      await waitFor(() => {
        expect(props.setIsSurveySubmitted).toBeCalledWith(true);
      });
    });
  });
});
