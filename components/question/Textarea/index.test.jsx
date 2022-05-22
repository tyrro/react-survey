import { fireEvent, render, screen } from '@testing-library/react';

import Textarea, { textareaTestIds } from '.';

describe('Textarea', () => {
  const props = {
    id: '1',
    answers: [
      {
        id: '1',
      },
    ],
    setSurveyQuestionsWithAnswers: jest.fn(),
  };

  beforeEach(() => {
    render(<Textarea {...props} />);
  });

  it('shows user input texts in the box', () => {
    const inputText = 'input';
    const inputField = screen.getByTestId(textareaTestIds.inputField);

    expect(inputField).toHaveTextContent('');

    fireEvent.change(inputField, { target: { value: inputText } });

    expect(inputField).toHaveTextContent(inputText);
  });
});
