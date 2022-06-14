import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

test('render', () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const home = screen.getByText(/Home/i);
  expect(home).toBeInTheDocument();
});
