import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Reviews from '../Sections/Reviews/Reviews';

global.URL.createObjectURL = jest.fn();

test('renders form with image', async () => {
  render(<Reviews />);

  const inputText = screen.getByLabelText(/Full Name/i);
  const inputDate = screen.getByLabelText(/Order Date/i);
  const inputFile = screen.getByLabelText(/Product Photo/i);
  const checkbox = screen.getByLabelText(/I agree to data processing rules/i);
  const submit = screen.getByText(/Submit/i);

  const file = new File(['hello'], 'hello.png', { type: 'image/png' });

  userEvent.type(inputText, 'jessica parker');

  await act(async () => {
    fireEvent.change(inputDate, { target: { value: '2021-01-01' } });
    userEvent.upload(inputFile, file);
    userEvent.click(checkbox);
    userEvent.click(submit);
  });
});
