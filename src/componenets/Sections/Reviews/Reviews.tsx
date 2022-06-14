import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types/Store';
import AppSlice from '../../../store/reducers/AppSlice';

import './style.css';

import Form from '../../Form/Form';
import ReviewCards from '../../ReviewCards/ReviewCards';

import IReviewCard from '../../../interfaces/IReviewCard';

const Reviews = () => {
  const dispatch = useDispatch();
  const { addFormCards } = AppSlice.actions;
  const formCards = useSelector((state: RootState) => state.formCards);

  const createCard = (card: IReviewCard) => {
    dispatch(addFormCards(card));
  };

  return (
    <section className="reviews">
      <div className="container">
        <h2 className="title">Send Review</h2>
        <Form createCard={createCard} />
        <ReviewCards cards={formCards} />
      </div>
    </section>
  );
};

export default Reviews;
