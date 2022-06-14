import { render, screen } from '@testing-library/react';

import ReviewCard from './ReviewCard';

test('renders Card', () => {
  const testingCard = {
    agreement: true,
    comment: 'cool blanket',
    date: '2022-03-28',
    name: 'jessica parker',
    photo: 'blob:http://localhost:3000/e2a7c05f-5492-46b0-8bd3-0bfe12aa415a',
    promo: true,
    rate: '5',
  };

  render(<ReviewCard card={testingCard} />);

  const card = screen.getByTestId('card');

  expect(card).toMatchInlineSnapshot(`
    <div
      class="review-card"
      data-testid="card"
    >
      <div
        class="review-card__user"
      >
        <div
          class="review-card__other"
        >
          <p>
            Jessica Parker
          </p>
          <p>
            ☑ subscribed to the newsletter
          </p>
          <p>
            ☑ agreed to data processing rules
          </p>
        </div>
        <div
          class="review-card__order"
        >
          <div
            class="review-card__rating"
          >
            <span
              class="active"
            />
            <span
              class="active"
            />
            <span
              class="active"
            />
            <span
              class="active"
            />
            <span
              class="active"
            />
          </div>
          <time
            class="review-card__date"
            datetime="2022-03-28"
            title="Order Date"
          >
            2022-03-28
          </time>
        </div>
      </div>
      <img
        alt="product"
        src="blob:http://localhost:3000/e2a7c05f-5492-46b0-8bd3-0bfe12aa415a"
      />
      <p
        class="review-card__comment"
      >
        cool blanket
      </p>
    </div>
  `);
});

test('renders Card', () => {
  const testingCard = {
    agreement: false,
    comment: 'cool blanket',
    date: '2022-03-28',
    name: 'jessica parker',
    photo: 'blob:http://localhost:3000/e2a7c05f-5492-46b0-8bd3-0bfe12aa415a',
    promo: false,
    rate: '0',
  };

  render(<ReviewCard card={testingCard} />);

  const card = screen.getByTestId('card');

  expect(card).toMatchInlineSnapshot(`
    <div
      class="review-card"
      data-testid="card"
    >
      <div
        class="review-card__user"
      >
        <div
          class="review-card__other"
        >
          <p>
            Jessica Parker
          </p>
          <p>
            ☒ not subscribed to the newsletter
          </p>
          <p />
        </div>
        <div
          class="review-card__order"
        >
          <div
            class="review-card__rating"
          >
            <span
              class=""
            />
            <span
              class=""
            />
            <span
              class=""
            />
            <span
              class=""
            />
            <span
              class=""
            />
          </div>
          <time
            class="review-card__date"
            datetime="2022-03-28"
            title="Order Date"
          >
            2022-03-28
          </time>
        </div>
      </div>
      <img
        alt="product"
        src="blob:http://localhost:3000/e2a7c05f-5492-46b0-8bd3-0bfe12aa415a"
      />
      <p
        class="review-card__comment"
      >
        cool blanket
      </p>
    </div>
  `);
});
