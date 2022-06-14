import { render, screen } from '@testing-library/react';

import ReviewCards from './ReviewCards';

test('renders Cards', () => {
  const numOfCards = 3;
  const testingCard = {
    agreement: true,
    comment: 'cool blanket',
    date: '2022-03-28',
    name: 'jessica parker',
    photo: 'blob:http://localhost:3000/e2a7c05f-5492-46b0-8bd3-0bfe12aa415a',
    promo: true,
    rate: '5',
  };
  const testingCards = new Array(numOfCards).fill(testingCard);

  render(<ReviewCards cards={testingCards} />);

  const cards = screen.getAllByTestId('card');

  expect(cards.length).toBe(numOfCards);
});
