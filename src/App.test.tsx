import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Our Products/i);
  expect(linkElement).toBeInTheDocument();
});
