import './style.css';

import ReviewCard from './ReviewCard/ReviewCard';

import IReviewCard from '../../interfaces/IReviewCard';

const ReviewCards = ({ cards }: { cards: IReviewCard[] }) => {
  return (
    <ul className="review-cards ">
      {cards.map((card, idx) => (
        <li className="review-cards__item" key={idx}>
          <ReviewCard card={card} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewCards;
