import { render, screen } from '@testing-library/react';
import Error from './Error';

test('renders Error', () => {
  render(<Error />);
  const linkElement = screen.getByText(/404/i);
  expect(linkElement).toBeInTheDocument();
});
