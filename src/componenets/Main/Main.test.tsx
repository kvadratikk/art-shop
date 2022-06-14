import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

test('renders input', () => {
  render(
    <Router>
      <Main />
    </Router>
  );
  const title = screen.getByText(/Our Products/i);
  expect(title).toBeInTheDocument();
});
