import './style.css';

import IReviewCard from '../../../interfaces/IReviewCard';

const ReviewCard = ({ card }: { card: IReviewCard }) => {
  const { name, date, rate, photo, promo, comment, agreement } = card;

  const transformName = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div data-testid="card" className="review-card">
      <div className="review-card__user">
        <div className="review-card__other">
          <p>{transformName(name)}</p>
          <p>
            {promo
              ? String.fromCharCode(9745) + ' subscribed to the newsletter'
              : String.fromCharCode(9746) + ' not subscribed to the newsletter'}
          </p>
          <p>{agreement ? String.fromCharCode(9745) + ' agreed to data processing rules' : ''}</p>
        </div>
        <div className="review-card__order">
          <div className="review-card__rating">
            <span className={Number(rate) >= 1 ? 'active' : ''}></span>
            <span className={Number(rate) >= 2 ? 'active' : ''}></span>
            <span className={Number(rate) >= 3 ? 'active' : ''}></span>
            <span className={Number(rate) >= 4 ? 'active' : ''}></span>
            <span className={Number(rate) >= 5 ? 'active' : ''}></span>
          </div>
          <time title="Order Date" dateTime={date} className="review-card__date">
            {date}
          </time>
        </div>
      </div>
      <img src={String(photo)} alt="product" />
      <p className="review-card__comment">{comment}</p>
    </div>
  );
};

export default ReviewCard;
